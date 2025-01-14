const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");
let phiVanChuyenElement = document.querySelector(".chk-free-ship span");
let cartTotalElement = document.getElementById("checkout-cart-total");

// Hàm cài đặt ngày giao hàng
function setupDeliveryDates() {
    let today = new Date();
    let ngaymai = new Date(today);
    let ngaykia = new Date(today);
    ngaymai.setDate(today.getDate() + 1);
    ngaykia.setDate(today.getDate() + 2);

    let dateorderhtml = `
        <a href="javascript:;" class="pick-date active" data-date="${today.toISOString().split('T')[0]}">
            <span class="text">Hôm nay</span>
            <span class="date">${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}</span>
        </a>
        <a href="javascript:;" class="pick-date" data-date="${ngaymai.toISOString().split('T')[0]}">
            <span class="text">Ngày mai</span>
            <span class="date">${ngaymai.getDate()}/${ngaymai.getMonth() + 1}/${ngaymai.getFullYear()}</span>
        </a>
        <a href="javascript:;" class="pick-date" data-date="${ngaykia.toISOString().split('T')[0]}">
            <span class="text">Ngày kia</span>
            <span class="date">${ngaykia.getDate()}/${ngaykia.getMonth() + 1}/${ngaykia.getFullYear()}</span>
        </a>`;

    document.querySelector('.date-order').innerHTML = dateorderhtml;

    // Thêm sự kiện click để cập nhật giá trị cho input type="date"
    const dateLinks = document.querySelectorAll('.pick-date');
    const dateInput = document.getElementById('deliveryDate');
    dateLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Gỡ bỏ class "active" khỏi các liên kết khác
            dateLinks.forEach(l => l.classList.remove('active'));
            // Thêm class "active" vào liên kết được chọn
            this.classList.add('active');
            // Gán giá trị ngày vào input type="date"
            dateInput.value = this.getAttribute('data-date');
        });
    });


    document.querySelector('.date-order').innerHTML = dateorderhtml;

    document.querySelectorAll('.pick-date').forEach(date => {
        date.onclick = function () {
            document.querySelector(".pick-date.active").classList.remove("active");
            this.classList.add('active');
        };
    });
}

// Hàm cập nhật tổng tiền
function updateTotal(isGiaoTanNoi) {
    let cartTotal = parseInt(cartTotalElement.textContent.replace(/\D/g, ""));
    let finalTotal = isGiaoTanNoi ? cartTotal + PHIVANCHUYEN : cartTotal;

    if (isGiaoTanNoi) {
        phiVanChuyenElement.textContent = `${PHIVANCHUYEN.toLocaleString()} ₫`;
    } else {
        phiVanChuyenElement.textContent = "0 ₫";
    }

    priceFinal.textContent = `${finalTotal.toLocaleString()} ₫`;
}

// Hàm chuyển đổi giao diện giữa các tùy chọn giao hàng
function toggleDeliveryOptions() {
    const btnGiaoTanNoi = document.getElementById("giaotannoi");
    const btnTuDenLay = document.getElementById("tudenlay");
    const giaoTanNoiGroup = document.getElementById("giaotannoi-group");
    const tuDenLayGroup = document.getElementById("tudenlay-group");
    const diaChiNhan = document.getElementById("diachinhan");

    // Khi chọn "Giao tận nơi"
    btnGiaoTanNoi.addEventListener("click", () => {
        btnGiaoTanNoi.classList.add("active");
        btnTuDenLay.classList.remove("active");
        giaoTanNoiGroup.style.display = "block";
        tuDenLayGroup.style.display = "none";
        diaChiNhan.style.display = "block";
        updateTotal(true); // Thêm phí vận chuyển
    });

    // Khi chọn "Tự đến lấy"
    btnTuDenLay.addEventListener("click", () => {
        btnTuDenLay.classList.add("active");
        btnGiaoTanNoi.classList.remove("active");
        giaoTanNoiGroup.style.display = "none";
        tuDenLayGroup.style.display = "block";
        diaChiNhan.style.display = "none";
        updateTotal(false); // Không thêm phí vận chuyển
    });
}

// Khởi tạo trang thanh toán khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
    setupDeliveryDates();
    toggleDeliveryOptions();
});