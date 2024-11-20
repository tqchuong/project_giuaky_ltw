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



// // Hàm tính và hiển thị tổng giá trị đơn hàng
// function thanhtoanpage() {
//     setupDeliveryDates();
   

  

//     let totalBillOrder = document.querySelector('.total-bill-order');
//     totalBillOrder.innerHTML = `
//         <div class="priceFlx">
//             <div class="text">Tiền hàng <span class="count">${cart.length} món</span></div>
//             <div class="price-detail"><span id="checkout-cart-total">${vnd(totalCart)}</span></div>
//         </div>
//         <div class="priceFlx chk-ship">
//             <div class="text">Phí vận chuyển</div>
//             <div class="price-detail chk-free-ship"><span>${vnd(PHIVANCHUYEN)}</span></div>
//         </div>`;

//     priceFinal.innerText = vnd(totalCart + PHIVANCHUYEN);
//     setupDeliveryMethod();
// }








// Khởi tạo trang thanh toán khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", function() {
    thanhtoanpage();
});
