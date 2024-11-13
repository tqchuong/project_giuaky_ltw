const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");

function thanhtoanpage(option, product) {
    // Xử lý ngày nhận hàng
    setupDeliveryDates();

    let totalBillOrder = document.querySelector('.total-bill-order');
    let totalBillOrderHtml;

    if (option === 1) {
        showProductCart();
        totalBillOrderHtml = `
            <div class="priceFlx">
                <div class="text">Tiền hàng <span class="count">${getAmountCart()} món</span></div>
                <div class="price-detail"><span id="checkout-cart-total">${vnd(getCartTotal())}</span></div>
            </div>
            <div class="priceFlx chk-ship">
                <div class="text">Phí vận chuyển</div>
                <div class="price-detail chk-free-ship"><span>${vnd(PHIVANCHUYEN)}</span></div>
            </div>`;
        priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
    } else if (option === 2) {
        showProductBuyNow(product);
        totalBillOrderHtml = `
            <div class="priceFlx">
                <div class="text">Tiền hàng <span class="count">${product.soluong} món</span></div>
                <div class="price-detail"><span id="checkout-cart-total">${vnd(product.soluong * product.price)}</span></div>
            </div>
            <div class="priceFlx chk-ship">
                <div class="text">Phí vận chuyển</div>
                <div class="price-detail chk-free-ship"><span>${vnd(PHIVANCHUYEN)}</span></div>
            </div>`;
        priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
    }

    totalBillOrder.innerHTML = totalBillOrderHtml;
    setupDeliveryMethod(option, product);
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
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = '';
    currentUser.cart.forEach(item => {
        let product = getProduct(item);
        listOrderHtml += `
        <div class="food-total">
            <div class="count">${product.soluong}x</div>
            <div class="info-food">
                <div class="name-food">${product.title}</div>
                <div class="price">${vnd(product.price * product.soluong)}</div>
            </div>
        </div>`;
    });
    listOrder.innerHTML = listOrderHtml;
}

// Hiển thị sản phẩm mua ngay
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

// Đặt hàng ngay
function dathangngay() {
    let productInfo = document.getElementById("product-detail-content");
    let datHangNgayBtn = productInfo.querySelector(".button-dathangngay");
    datHangNgayBtn.onclick = () => {
        if (localStorage.getItem('currentuser')) {
            let productId = datHangNgayBtn.getAttribute("data-product");
            let soluong = parseInt(productInfo.querySelector(".buttons_added .input-qty").value);
            let noteValue = productInfo.querySelector("#popup-detail-note").value || "Không có ghi chú";
            let products = JSON.parse(localStorage.getItem('products'));
            let selectedProduct = products.find(item => item.id == productId);
            selectedProduct.soluong = soluong;
            selectedProduct.note = noteValue;

            openCheckoutPage(2, selectedProduct);
        } else {
            toast({ title: 'Warning', message: 'Chưa đăng nhập tài khoản!', type: 'warning', duration: 3000 });
        }
    }
}

// Mở trang thanh toán
function openCheckoutPage(option, product) {
    document.querySelector('.checkout-page').classList.add('active');
    thanhtoanpage(option, product);
    closeCart();
    document.body.style.overflow = "hidden";
}

// Đóng trang thanh toán
function closecheckout() {
    document.querySelector('.checkout-page').classList.remove('active');
    document.body.style.overflow = "auto";
}

// Xử lý khi đặt hàng
function xulyDathang(product) {
    let diachinhan = "";
    let hinhthucgiao = "";
    let thoigiangiao = "";
    let giaotannoi = document.querySelector("#giaotannoi");
    let tudenlay = document.querySelector("#tudenlay");
    let giaongay = document.querySelector("#giaongay");
    let giaovaogio = document.querySelector("#deliverytime");
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));

    if (giaotannoi.classList.contains("active")) {
        diachinhan = document.querySelector("#diachinhan").value;
        hinhthucgiao = "Giao tận nơi";
    } else if (tudenlay.classList.contains("active")) {
        diachinhan = document.querySelector("#chinhanh-1").checked ? "273 An Dương Vương, Quận 5" : "04 Tôn Đức Thắng, Quận 1";
        hinhthucgiao = "Tự đến lấy";
    }

    thoigiangiao = giaongay.checked ? "Giao ngay khi xong" : document.querySelector(".choise-time").value;

    let orderDetails = JSON.parse(localStorage.getItem("orderDetails") || "[]");
    let order = JSON.parse(localStorage.getItem("order") || "[]");
    let madon = createId(order);
    let tongtien = product ? product.price * product.soluong : getCartTotal();

    if (product) {
        product.madon = madon;
        orderDetails.push(product);
    } else {
        currentUser.cart.forEach(item => {
            let prod = getProduct(item);
            prod.madon = madon;
            orderDetails.push(prod);
        });
    }

    let tennguoinhan = document.querySelector("#tennguoinhan").value;
    let sdtnhan = document.querySelector("#sdtnhan").value;

    if (!tennguoinhan || !sdtnhan || !diachinhan) {
        toast({ title: 'Chú ý', message: 'Vui lòng nhập đầy đủ thông tin!', type: 'warning', duration: 4000 });
        return;
    }

    let donhang = {
        id: madon,
        khachhang: currentUser.phone,
        hinhthucgiao: hinhthucgiao,
        ngaygiaohang: document.querySelector(".pick-date.active").getAttribute("data-date"),
        thoigiangiao: thoigiangiao,
        ghichu: document.querySelector(".note-order").value,
        tenguoinhan: tennguoinhan,
        sdtnhan: sdtnhan,
        diachinhan: diachinhan,
        thoigiandat: new Date(),
        tongtien: tongtien + (giaotannoi.classList.contains("active") ? PHIVANCHUYEN : 0),
        trangthai: 0
    };

    order.unshift(donhang);
    currentUser.cart = product ? currentUser.cart : [];
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.setItem("currentuser", JSON.stringify(currentUser));
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    toast({ title: 'Thành công', message: 'Đặt hàng thành công!', type: 'success', duration: 1000 });
    setTimeout(() => window.location.href = "/", 2000);
}

// Chuyển đổi giá sang định dạng VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

document.addEventListener("DOMContentLoaded", function() {
    thanhtoanpage(1);
});








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

