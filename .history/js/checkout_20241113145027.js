const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");

// Hàm xử lý cho trang thanh toán
function thanhtoanpage() {
    setupDeliveryDates(); // Cài đặt ngày giao hàng

    let totalBillOrder = document.querySelector('.total-bill-order');
    let totalBillOrderHtml;

    showProductCart(); // Hiển thị sản phẩm trong giỏ hàng

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCart = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    totalBillOrderHtml = `
        <div class="priceFlx">
            <div class="text">Tiền hàng <span class="count">${cart.length} món</span></div>
            <div class="price-detail"><span id="checkout-cart-total">${vnd(totalCart)}</span></div>
        </div>
        <div class="priceFlx chk-ship">
            <div class="text">Phí vận chuyển</div>
            <div class="price-detail chk-free-ship"><span>${vnd(PHIVANCHUYEN)}</span></div>
        </div>`;

    priceFinal.innerText = vnd(totalCart + PHIVANCHUYEN);
    totalBillOrder.innerHTML = totalBillOrderHtml;
    setupDeliveryMethod();
}

// Cài đặt ngày giao hàng
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
        date.onclick = function() {
            document.querySelector(".pick-date.active").classList.remove("active");
            this.classList.add('active');
        };
    });
}

// Hiển thị sản phẩm trong giỏ hàng
function showProductCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = '';

    if (cart && cart.length > 0) {
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



function showProductBuyNow(product) {
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = `
    <div class="food-total">
        <div class="count">${product.soluong}x</div>
        <div class="info-food">
            <div class="name-food">${product.title}</div>
            <div class="price">${vnd(product.price * product.soluong)}</div>
        </div>
    </div>`;
    listOrder.innerHTML = listOrderHtml;
}


// Cấu hình phương thức giao hàng
function setupDeliveryMethod(option, product) {
    let giaotannoi = document.querySelector('#giaotannoi');
    let tudenlay = document.querySelector('#tudenlay');
    let tudenlayGroup = document.querySelector('#tudenlay-group');
    let chkShip = document.querySelectorAll(".chk-ship");

    tudenlay.addEventListener('click', () => {
        giaotannoi.classList.remove("active");
        tudenlay.classList.add("active");
        chkShip.forEach(item => item.style.display = "none");
        tudenlayGroup.style.display = "block";
        updateTotalPrice(option, product, false);
    });

    giaotannoi.addEventListener('click', () => {
        tudenlay.classList.remove("active");
        giaotannoi.classList.add("active");
        tudenlayGroup.style.display = "none";
        chkShip.forEach(item => item.style.display = "flex");
        updateTotalPrice(option, product, true);
    });

    document.querySelector(".complete-checkout-btn").onclick = () => {
        option === 1 ? xulyDathang() : xulyDathang(product);
    };
}


// Cập nhật tổng giá khi thay đổi phương thức giao hàng
function updateTotalPrice(option, product, includeShipping) {
    let total = option === 1 ? getCartTotal() : product.soluong * product.price;
    if (includeShipping) {
        total += PHIVANCHUYEN;
    }
    priceFinal.innerText = vnd(total);
}


// Xử lý khi đặt hàng
function xulyDathang(product) {
    let diachinhan = "";
    let hinhthucgiao = "";
    let thoigiangiao = "";
    const giaotannoi = document.querySelector("#giaotannoi");
    const tudenlay = document.querySelector("#tudenlay");
    const giaongay = document.querySelector("#giaongay");
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));

    if (giaotannoi.classList.contains("active")) {
        const diachiInput = document.querySelector("#diachinhan");
        diachinhan = diachiInput ? diachiInput.value : "";
        hinhthucgiao = "Giao tận nơi";
    } else if (tudenlay.classList.contains("active")) {
        diachinhan = document.querySelector("#chinhanh-1").checked ? "Khu phố 6, Phường Linh Trung, TP Thủ Đức, TP HCM" : "Nhơn Tân, An Nhơn, Bình Định";
        hinhthucgiao = "Tự đến lấy";
    }

    if (giaongay && giaongay.checked) {
        thoigiangiao = "Giao ngay khi xong";
    } else {
        thoigiangiao = document.querySelector(".choise-time").value || "Không xác định";
    }

    console.log("Thông tin đặt hàng:");
    console.log("Địa chỉ nhận:", diachinhan);
    console.log("Hình thức giao hàng:", hinhthucgiao);
    console.log("Thời gian giao hàng:", thoigiangiao);
}


// Chuyển đổi giá sang định dạng VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}


document.addEventListener("DOMContentLoaded", function() {
    thanhtoanpage(1); // Thay đổi tham số nếu cần, ví dụ: 1 cho giỏ hàng, 2 cho mua ngay
});


// Đóng trang thanh toán
function closecheckout() {
    document.querySelector('.checkout-page').classList.remove('active');
    document.body.style.overflow = "auto";
}






// Xu ly hinh thuc giao hang
let giaotannoi = document.querySelector('#giaotannoi');
let tudenlay = document.querySelector('#tudenlay');
let tudenlayGroup = document.querySelector('#tudenlay-group');
let chkShip = document.querySelectorAll(".chk-ship");

tudenlay.addEventListener('click', () => {
    giaotannoi.classList.remove("active");
    tudenlay.classList.add("active");
    chkShip.forEach(item => {
        item.style.display = "none";
    });
    tudenlayGroup.style.display = "block";
    switch (option) {
        case 1:
            priceFinal.innerText = vnd(getCartTotal());
            break;
        case 2:
            priceFinal.innerText = vnd((product.soluong * product.price));
            break;
    }
})

giaotannoi.addEventListener('click', () => {
    tudenlay.classList.remove("active");
    giaotannoi.classList.add("active");
    tudenlayGroup.style.display = "none";
    chkShip.forEach(item => {
        item.style.display = "flex";
    });
    switch (option) {
        case 1:
            priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
            break;
        case 2:
            priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
            break;
    }
})

// Thong tin cac don hang da mua - Xu ly khi nhan nut dat hang
function xulyDathang(product) {
    let diachinhan = "";
    let hinhthucgiao = "";
    let thoigiangiao = "";

    const giaotannoi = document.querySelector("#giaotannoi");
    const tudenlay = document.querySelector("#tudenlay");
    const giaongay = document.querySelector("#giaongay");
    const giaovaogio = document.querySelector("#deliverytime");
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));

    // Xác định hình thức giao hàng và địa chỉ nhận
    if (giaotannoi.classList.contains("active")) {
        const diachiInput = document.querySelector("#diachinhan");
        diachinhan = diachiInput ? diachiInput.value : "";
        hinhthucgiao = giaotannoi.innerText.trim();
   
    }

    // Xác định thời gian nhận hàng
    if (giaongay && giaongay.checked) {
        thoigiangiao = "Giao ngay khi xong";
    } else if (giaovaogio && giaovaogio.checked) {
        const choiseTime = document.querySelector(".choise-time");
        thoigiangiao = choiseTime ? choiseTime.value : "";
    }

    // Xử lý thêm logic theo yêu cầu, ví dụ lưu trữ hoặc hiển thị thông tin đặt hàng
    console.log("Thông tin đặt hàng:");
    console.log("Địa chỉ nhận:", diachinhan);
    console.log("Hình thức giao hàng:", hinhthucgiao);
    console.log("Thời gian giao hàng:", thoigiangiao);

    // Có thể thêm logic khác ở đây nếu cần
}















