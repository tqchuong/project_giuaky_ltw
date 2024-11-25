const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");

// Hàm cài đặt ngày giao hàng
function setupDeliveryDates() {
    let today = new Date();
    let ngaymai = new Date(today);
    let ngaykia = new Date(today);
    ngaymai.setDate(today.getDate() + 1);
    ngaykia.setDate(today.getDate() + 2);

    let dateorderhtml = `
        <a href="javascript:;" class="pick-date active" data-date="${today}">
            <span class="text">Hôm nay</span>
            <span class="date">${today.getDate()}/${today.getMonth() + 1}</span>
        </a>
        <a href="javascript:;" class="pick-date" data-date="${ngaymai}">
            <span class="text">Ngày mai</span>
            <span class="date">${ngaymai.getDate()}/${ngaymai.getMonth() + 1}</span>
        </a>
        <a href="javascript:;" class="pick-date" data-date="${ngaykia}">
            <span class="text">Ngày kia</span>
            <span class="date">${ngaykia.getDate()}/${ngaykia.getMonth() + 1}</span>
        </a>`;

    document.querySelector('.date-order').innerHTML = dateorderhtml;

    document.querySelectorAll('.pick-date').forEach(date => {
        date.onclick = function () {
            document.querySelector(".pick-date.active").classList.remove("active");
            this.classList.add('active');
        };
    });
}

// Hàm hiển thị sản phẩm trong giỏ hàng
function showProductCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = '';

    if (cart.length > 0) {
        cart.forEach(item => {
            listOrderHtml += `
            <div class="food-total">
                <div class="count">${item.quantity}x</div>
                <div class="info-food">
                    <div class="name-food">${item.title}</div>
                    <div class="price">${vnd(item.price * item.quantity)}</div>
                </div>
            </div>`;
        });
    } else {
        listOrderHtml = '<p>Giỏ hàng trống</p>';
    }

    listOrder.innerHTML = listOrderHtml;
}

// Hàm tính và hiển thị tổng giá trị đơn hàng
function thanhtoanpage() {
    setupDeliveryDates();
    showProductCart();

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCart = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    let totalBillOrder = document.querySelector('.total-bill-order');
    totalBillOrder.innerHTML = `
        <div class="priceFlx">
            <div class="text">Tiền hàng <span class="count">${cart.length} món</span></div>
            <div class="price-detail"><span id="checkout-cart-total">${vnd(totalCart)}</span></div>
        </div>
        <div class="priceFlx chk-ship">
            <div class="text">Phí vận chuyển</div>
            <div class="price-detail chk-free-ship"><span>${vnd(PHIVANCHUYEN)}</span></div>
        </div>`;

    priceFinal.innerText = vnd(totalCart + PHIVANCHUYEN);
    setupDeliveryMethod();
}

// Cấu hình phương thức giao hàng
function setupDeliveryMethod() {
    let giaotannoi = document.querySelector('#giaotannoi');
    let tudenlay = document.querySelector('#tudenlay');
    let tudenlayGroup = document.querySelector('#tudenlay-group');
    let chkShip = document.querySelectorAll(".chk-ship");

    tudenlay.addEventListener('click', () => {
        giaotannoi.classList.remove("active");
        tudenlay.classList.add("active");
        chkShip.forEach(item => item.style.display = "none");
        tudenlayGroup.style.display = "block";
        updateTotalPrice(false);
    });

    giaotannoi.addEventListener('click', () => {
        tudenlay.classList.remove("active");
        giaotannoi.classList.add("active");
        tudenlayGroup.style.display = "none";
        chkShip.forEach(item => item.style.display = "flex");
        updateTotalPrice(true);
    });

    document.querySelector(".complete-checkout-btn").onclick = () => xulyDathang();
}

// Cập nhật tổng giá khi thay đổi phương thức giao hàng
function updateTotalPrice(includeShipping) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCart = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (includeShipping) {
        totalCart += PHIVANCHUYEN;
    }
    priceFinal.innerText = vnd(totalCart);
}

// Xử lý khi đặt hàng
function xulyDathang() {
    let diachinhan = "";
    let hinhthucgiao = "";
    let thoigiangiao = "";

    const giaotannoi = document.querySelector("#giaotannoi");
    const tudenlay = document.querySelector("#tudenlay");
    const giaongay = document.querySelector("#giaongay");

    if (giaotannoi.classList.contains("active")) {
        const diachiInput = document.querySelector("#diachinhan");
        diachinhan = diachiInput ? diachiInput.value : "";
        hinhthucgiao = "Giao tận nơi";
    } else if (tudenlay.classList.contains("active")) {
        diachinhan = document.querySelector("#chinhanh-1").checked ? 
                     "Khu phố 6, Phường Linh Trung, TP Thủ Đức, TP HCM" : 
                     "Nhơn Tân, An Nhơn, Bình Định";
        hinhthucgiao = "Tự đến lấy";
    }

    if (giaongay && giaongay.checked) {
        thoigiangiao = "Giao ngay khi xong";
    } else {
        thoigiangiao = document.querySelector(".choise-time").value || "Không xác định";
    }

    // Kiểm tra thông tin người nhận trước khi đặt hàng
    let tennguoinhan = document.querySelector("#tennguoinhan").value;
    let sdtnhan = document.querySelector("#sdtnhan").value;

    if (!tennguoinhan || !sdtnhan || !diachinhan) {
        alert("Vui lòng nhập đầy đủ thông tin người nhận.");
        return;
    }

    // Lưu đơn hàng vào localStorage
    let orderDetails = JSON.parse(localStorage.getItem("orderDetails")) || [];
    let order = JSON.parse(localStorage.getItem("order")) || [];
    let madon = `DH${new Date().getTime()}`;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let tongtien = cart.reduce((total, item) => total + item.price * item.quantity, 0) + (giaotannoi.classList.contains("active") ? PHIVANCHUYEN : 0);

    let donhang = {
        id: madon,
        khachhang: JSON.parse(localStorage.getItem('currentuser')).phone,
        hinhthucgiao: hinhthucgiao,
        ngaygiaohang: document.querySelector(".pick-date.active").getAttribute("data-date"),
        thoigiangiao: thoigiangiao,
        tenguoinhan: tennguoinhan,
        sdtnhan: sdtnhan,
        diachinhan: diachinhan,
        tongtien: tongtien,
        trangthai: "Chưa xử lý",
        ghichu: document.querySelector(".note-order").value || ""
    };

    order.unshift(donhang);
    orderDetails = orderDetails.concat(cart.map(item => ({ ...item, madon })));
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    alert("Đặt hàng thành công!");
    window.location.href = "home.html"; // Quay về trang chủ sau khi đặt hàng
}

// Hàm chuyển đổi giá sang định dạng VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

// Khởi tạo trang thanh toán khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", function() {
    thanhtoanpage();
});
