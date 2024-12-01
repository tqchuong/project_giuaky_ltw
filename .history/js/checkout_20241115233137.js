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
    // Biến để lưu địa chỉ nhận, hình thức giao hàng, và thời gian giao hàng
    let diachinhan = "";
    let hinhthucgiao = "";
    let thoigiangiao = "";

    // Lấy các lựa chọn giao hàng từ form
    const giaotannoi = document.querySelector("#giaotannoi");
    const tudenlay = document.querySelector("#tudenlay");
    const giaongay = document.querySelector("#giaongay");

    // Xác định địa chỉ và hình thức giao hàng
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

    // Xác định thời gian giao hàng
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

    // Lấy thông tin giỏ hàng
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let tongtien = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    if (giaotannoi.classList.contains("active")) {
        tongtien += PHIVANCHUYEN;
    }

    // Tạo mã đơn hàng duy nhất
    let madon = `DH${Date.now()}`;

    // Tạo thông tin đơn hàng
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

    // Lưu thông tin đơn hàng và chi tiết đơn hàng vào localStorage
    let orderList = JSON.parse(localStorage.getItem("order")) || [];
    orderList.unshift(donhang);
    localStorage.setItem("order", JSON.stringify(orderList));

    // Lưu thông tin chi tiết đơn hàng
    let orderDetails = JSON.parse(localStorage.getItem("orderDetails")) || [];
    let updatedDetails = cart.map(item => ({ ...item, madon }));
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails.concat(updatedDetails)));

    // Xóa giỏ hàng sau khi đặt hàng thành công
    localStorage.removeItem("cart");

    alert("Đặt hàng thành công!");
    window.location.href = "home.html"; // Quay về trang chủ sau khi đặt hàng
}


