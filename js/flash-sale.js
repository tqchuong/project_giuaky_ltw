document.addEventListener("DOMContentLoaded", function () {
    // Cập nhật countdown timer
    function updateTimer() {
        const now = new Date();

        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentSecond = now.getSeconds();

        // Các khung giờ Flash Sale
        const slots = [
            { timeRange: [9, 11], id: 'slot9', message: 'Khung giờ 9h-11h' },
            { timeRange: [12, 15], id: 'slot12', message: 'Khung giờ 12h-15h' },
            { timeRange: [16, 22], id: 'slot16', message: 'Khung giờ 16h-22h' },
            { timeRange: [23, 8], id: 'slot23', message: 'Khung giờ 23h-8h' }
        ];

        let ongoingSlot = null;
        let nextSlot = null;

        for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            const [startHour, endHour] = slot.timeRange;

            if (
                (startHour <= currentHour && currentHour <= endHour) || // Khung giờ cùng ngày
                (startHour > endHour && (currentHour >= startHour || currentHour <= endHour)) // Khung giờ qua ngày mới
            ) {
                ongoingSlot = slot;
                break;
            }

            if (currentHour < startHour || (startHour > endHour && currentHour <= endHour)) {
                nextSlot = slot;
                break;
            }
        }

        const timerMessage = document.getElementById('timer-message');
        const timerElement = document.getElementById('timer');

        if (ongoingSlot) {
            timerMessage.textContent = "Đang diễn ra: " + ongoingSlot.message;
            timerElement.textContent = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}:${String(currentSecond).padStart(2, '0')}`;
        } else if (nextSlot) {
            const targetTime = new Date();
            targetTime.setHours(nextSlot.timeRange[0], 0, 0, 0);
            if (currentHour >= 23) targetTime.setDate(targetTime.getDate() + 1);

            const timeDiff = targetTime - now;
            const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

            timerMessage.textContent = "Bắt đầu sau: " + nextSlot.message;
            timerElement.textContent = `${String(hoursLeft).padStart(2, '0')}:${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
        } else {
            timerMessage.textContent = "Không còn Flash Sale hôm nay.";
            timerElement.textContent = "--:--:--";
        }
    }

    // Hiển thị sản phẩm theo khung giờ và danh mục
    function filterProducts(category, currentSlotId) {
        const allProducts = document.querySelectorAll('.col-product');
        allProducts.forEach(product => {
            const productCategory = product.getAttribute('data-loai');
            const productSlot = product.getAttribute('data-slot');
            product.style.display =
                (category === 'all' || productCategory === category) &&
                productSlot === currentSlotId ? 'block' : 'none';
        });
    }

    let selectedSlotId = null; // Lưu khung giờ được chọn

    // Xử lý sự kiện khi chọn khung giờ
    const slotButtons = document.querySelectorAll('.slot-button');
    slotButtons.forEach(button => {
        button.addEventListener('click', function () {
            selectedSlotId = button.getAttribute('data-slot');
            const activeCategory = document.querySelector('.category-button.active')?.getAttribute('data-loai') || 'all';

            filterProducts(activeCategory, selectedSlotId);

            // Đánh dấu nút khung giờ hiện tại
            slotButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Xử lý sự kiện khi chọn danh mục
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (!selectedSlotId) {
                alert("Vui lòng chọn khung giờ trước!");
                return;
            }

            const category = button.getAttribute('data-loai');
            filterProducts(category, selectedSlotId);

            // Đánh dấu nút danh mục hiện tại
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Xử lý sự kiện khi bấm "Đặt hàng"
    const orderButtons = document.querySelectorAll('.order-item');
    orderButtons.forEach(button => {
        button.addEventListener('click', function (event) {
        const productElement = this.closest('.col-product');
        const productSlot = productElement.getAttribute('data-slot');
        const productHref = productElement.getAttribute('data-href');
        const currentSlot = getCurrentSlot();

        if (!currentSlot) {
            alert("Flash Sale đã kết thúc. Hãy chờ đợt tiếp theo!");
            event.preventDefault();
            return;
        }

        if (productSlot !== currentSlot.id) {
            alert(`Chưa đến giờ hoặc đã kết thúc . ${currentSlot.message}`);
            event.preventDefault();
            return;
        }

        alert("Đặt hàng thành công!");
        // Chuyển hướng đến trang chi tiết sản phẩm
        window.location.href = productHref;
    });
});

    // Hàm xác định khung giờ hiện tại
    function getCurrentSlot() {
        const now = new Date();
        const currentHour = now.getHours();

        const slots = [
            { timeRange: [9, 11], id: 'slot9', message: 'Khung giờ 9h-11h' },
            { timeRange: [12, 15], id: 'slot12', message: 'Khung giờ 12h-15h' },
            { timeRange: [16, 22], id: 'slot16', message: 'Khung giờ 16h-22h' },
            { timeRange: [23, 8], id: 'slot23', message: 'Khung giờ 23h-8h' }
        ];

        for (let slot of slots) {
            const [startHour, endHour] = slot.timeRange;

            if (
                (startHour <= currentHour && currentHour <= endHour) ||
                (startHour > endHour && (currentHour >= startHour || currentHour <= endHour))
            ) {
                return slot;
            }
        }
        return null;
    }

    // Cập nhật timer mỗi giây
    setInterval(updateTimer, 1000);

    // Hiển thị sản phẩm mặc định khi tải trang
    const currentSlot = getCurrentSlot();
    if (currentSlot) {
        selectedSlotId = currentSlot.id;
        filterProducts('all', currentSlot.id);
    } else {
        alert("Hiện không có khung giờ Flash Sale nào đang hoạt động.");
    }
});
