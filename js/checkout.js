const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");

// Payment Page Initialization
function thanhtoanpage(option, product) {
    // Process delivery date options
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

    // Activate date selection
    let pickdateElements = document.getElementsByClassName('pick-date');
    Array.from(pickdateElements).forEach((element) => {
        element.onclick = function () {
            document.querySelector(".pick-date.active").classList.remove("active");
            this.classList.add('active');
        };
    });

    // Display order and calculate total
    updateOrderDetails(option, product);

    // Setup delivery method event handlers
    handleDeliveryOptionSelection(option, product);
}

// Display order details and calculate initial total
function updateOrderDetails(option, product) {
    let totalBillOrder = document.querySelector('.total-bill-order');
    let totalBillOrderHtml;

    switch (option) {
        case 1: // Cart purchase
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
        case 2: // Buy now
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

// Handle delivery option selection between "Giao tận nơi" and "Tự đến lấy"
function handleDeliveryOptionSelection(option, product) {
    const giaotannoi = document.querySelector('#giaotannoi');
    const tudenlay = document.querySelector('#tudenlay');
    const tudenlayGroup = document.querySelector('#tudenlay-group');
    const chkShipElements = document.querySelectorAll(".chk-ship");

    tudenlay.addEventListener('click', () => {
        giaotannoi.classList.remove("active");
        tudenlay.classList.add("active");

        // Hide shipping fee and display pick-up option
        chkShipElements.forEach(item => item.style.display = "none");
        tudenlayGroup.style.display = "block";

        // Update total without shipping fee
        updateTotal(option, product, false);
    });

    giaotannoi.addEventListener('click', () => {
        tudenlay.classList.remove("active");
        giaotannoi.classList.add("active");

        // Display shipping fee and hide pick-up option
        chkShipElements.forEach(item => item.style.display = "flex");
        tudenlayGroup.style.display = "none";

        // Update total with shipping fee
        updateTotal(option, product, true);
    });
}

// Update the total cost based on delivery option
function updateTotal(option, product, includeShipping) {
    const shippingFee = includeShipping ? PHIVANCHUYEN : 0;
    switch (option) {
        case 1:
            priceFinal.innerText = vnd(getCartTotal() + shippingFee);
            break;
        case 2:
            priceFinal.innerText = vnd((product.soluong * product.price) + shippingFee);
            break;
    }
}
