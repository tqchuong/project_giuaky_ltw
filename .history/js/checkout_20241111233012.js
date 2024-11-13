const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");

// Hàm hiển thị trang thanh toán
function thanhtoanpage(option, product) {
    let today = new Date();
    let ngaymai = new Date();
    let ngaykia = new Date();
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

    document.querySelectorAll('.pick-date').forEach(pickDate => {
        pickDate.onclick = function() {
            document.querySelector(".pick-date.active").classList.remove("active");
            this.classList.add('active');
        };
    });

    let totalBillOrder = document.querySelector('.total-bill-order');
    let totalBillOrderHtml;

    switch (option) {
        case 1: // Thanh toán giỏ hàng
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
            break;

        case 2: // Mua ngay
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
            break;
    }

    totalBillOrder.innerHTML = totalBillOrderHtml;
}

// Hàm hiển thị giỏ hàng
function showProductCart() {
    let currentuser = JSON.parse(localStorage.getItem('currentuser'));
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = '';

    currentuser.cart.forEach(item => {
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

// Hàm hiển thị sản phẩm mua ngay
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

// Xử lý nút "Đặt hàng"
document.querySelector(".complete-checkout-btn").onclick = () => {
    xulyDathang();
};

// Hàm xử lý đặt hàng
function xulyDathang(product) {
    let diachinhan = document.querySelector("#diachinhan").value || "";
    let hinhthucgiao = document.querySelector(".type-order-btn.active").innerText.trim();
    let thoigiangiao = document.querySelector("#giaongay").checked ? "Giao ngay khi xong" : document.querySelector(".choise-time").value;
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));

    if (!diachinhan) {
        alert("Vui lòng nhập địa chỉ nhận hàng.");
        return;
    }

    let donhang = {
        id: createId(currentUser.cart),
        khachhang: currentUser.phone,
        hinhthucgiao: hinhthucgiao,
        ngaygiaohang: document.querySelector(".pick-date.active").getAttribute("data-date"),
        thoigiangiao: thoigiangiao,
        tenguoinhan: document.querySelector("#tennguoinhan").value,
        sdtnhan: document.querySelector("#sdtnhan").value,
        diachinhan: diachinhan,
        tongtien: getCartTotal() + PHIVANCHUYEN,
        trangthai: 0
    };

    let orderDetails = JSON.parse(localStorage.getItem("orderDetails") || "[]");
    orderDetails.push(donhang);
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    localStorage.setItem("currentuser", JSON.stringify(currentUser));

    alert("Đặt hàng thành công!");
    window.location.href = "/";
}

// Hàm chuyển đổi số thành VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

// Hàm lấy tổng giá trị giỏ hàng
function getCartTotal() {
    let currentuser = JSON.parse(localStorage.getItem('currentuser'));
    return currentuser.cart.reduce((total, item) => {
        let product = getProduct(item);
        return total + product.price * product.soluong;
    }, 0);
}
