const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");

function thanhtoanpage(option, product) {
    setupDeliveryDateOptions();

    let totalBillOrder = document.querySelector('.total-bill-order');
    let totalBillOrderHtml;

    // Kiểm tra và xử lý từng trường hợp thanh toán
    switch (option) {
        case 1: // Thanh toán sản phẩm trong giỏ hàng
            showProductCart();
            totalBillOrderHtml = generateTotalHtml(getAmountCart(), getCartTotal());
            priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
            break;
        case 2: // Thanh toán sản phẩm mua ngay
            showProductBuyNow(product);
            totalBillOrderHtml = generateTotalHtml(product.soluong, product.soluong * product.price);
            priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
            break;
    }

    totalBillOrder.innerHTML = totalBillOrderHtml;
    setupDeliveryMethod(option, product);
}

// Cài đặt ngày giao hàng
function setupDeliveryDateOptions() {
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

// Tạo HTML hiển thị tổng số tiền
function generateTotalHtml(quantity, totalPrice) {
    return `
    <div class="priceFlx">
        <div class="text">Tiền hàng <span class="count">${quantity} món</span></div>
        <div class="price-detail"><span id="checkout-cart-total">${vnd(totalPrice)}</span></div>
    </div>
    <div class="priceFlx chk-ship">
        <div class="text">Phí vận chuyển</div>
        <div class="price-detail chk-free-ship"><span>${vnd(PHIVANCHUYEN)}</span></div>
    </div>`;
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
    let tongtien = product ? product.soluong * product.price : getCartTotal();

    if (product === undefined) {
        currentUser.cart.forEach(item => {
            item.madon = madon;
            item.price = getpriceProduct(item.id);
            tongtien += item.price * item.soluong;
            orderDetails.push(item);
        });
    } else {
        product.madon = madon;
        product.price = getpriceProduct(product.id);
        orderDetails.push(product);
    }

    let tennguoinhan = document.querySelector("#tennguoinhan").value;
    let sdtnhan = document.querySelector("#sdtnhan").value;

    if (!tennguoinhan || !sdtnhan || !diachinhan) {
        toast({ title: 'Chú ý', message: 'Vui lòng nhập đầy đủ thông tin!', type: 'warning', duration: 4000 });
    } else {
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
        if (!product) {
            currentUser.cart = [];
        }

        localStorage.setItem("order", JSON.stringify(order));
        localStorage.setItem("currentuser", JSON.stringify(currentUser));
        localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
        toast({ title: 'Thành công', message: 'Đặt hàng thành công!', type: 'success', duration: 1000 });

        setTimeout(() => {
            window.location = "/";
        }, 2000);
    }
}

function getpriceProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    let sp = products.find(item => item.id === id);
    return sp ? sp.price : 0;
}

function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
