const PHIVANCHUYEN = 30000;
let priceFinal = document.getElementById("checkout-cart-price-final");

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

    if (option === 1) {
        showProductCart();
        totalBillOrderHtml = `
            <div class="priceFlx">
                <div class="text">
                    Tiền hàng <span class="count">${getAmountCart()} món</span>
                </div>
                <div class="price-detail">
                    <span id="checkout-cart-total">${vnd(getCartTotal())}</span>
                </div>
            </div>
            <div class="priceFlx chk-ship">
                <div class="text">Phí vận chuyển</div>
                <div class="price-detail chk-free-ship">
                    <span>${vnd(PHIVANCHUYEN)}</span>
                </div>
            </div>`;
        priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
    } else if (option === 2) {
        showProductBuyNow(product);
        totalBillOrderHtml = `
            <div class="priceFlx">
                <div class="text">
                    Tiền hàng <span class="count">${product.soluong} món</span>
                </div>
                <div class="price-detail">
                    <span id="checkout-cart-total">${vnd(product.soluong * product.price)}</span>
                </div>
            </div>
            <div class="priceFlx chk-ship">
                <div class="text">Phí vận chuyển</div>
                <div class="price-detail chk-free-ship">
                    <span>${vnd(PHIVANCHUYEN)}</span>
                </div>
            </div>`;
        priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
    }

    totalBillOrder.innerHTML = totalBillOrderHtml;
}
document.addEventListener("DOMContentLoaded", function() {
    thanhtoanpage(1); 
});
