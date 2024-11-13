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






















document.addEventListener("DOMContentLoaded", function() {
    thanhtoanpage(1); 
});