function openModal() {
    displaySavedCoupons();
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
// Định nghĩa hàm displaySavedCoupons
function displaySavedCoupons() {
    const modalCouponList = document.getElementById('modal-coupon-list');
    modalCouponList.innerHTML = ''; // Xóa danh sách hiện tại

    const savedCoupons = JSON.parse(localStorage.getItem('savedCoupons')) || [];

    savedCoupons.forEach(coupon => {
        const li = document.createElement('li');
        li.innerHTML = `  
            <input type="radio" name="coupon" class="coupon-radio" value="${coupon.code}" data-discount="${coupon.discount}" />  
            ${coupon.code} - Giảm ${coupon.discount}%  
        `;
        modalCouponList.appendChild(li);
    });
}

$(document).ready(function () {
    displayCart(); // Hiển thị giỏ hàng khi tài liệu sẵn sàng

    function displayCart() {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var cartList = $(".cart-list");
        cartList.empty();

        if (cart.length === 0) {
            $(".gio-hang-trong").show();
        } else {
            $(".gio-hang-trong").hide();
            cart.forEach(function (item) {
                var listItem = `
                    <li class="item">
                        <img src="${item.img}" alt="${item.title}" class="item-image"/>
                        <h4>${item.title}</h4>
                        <p class="item-price">${vnd(item.price)}</p>
                        <div class="quantity-controls">
                            <button class="btn-quantity minus">-</button>
                            <input type="number" class="quantity_field" value="${item.quantity}" data-price="${item.price}" min="1"/>
                            <button class="btn-quantity plus">+</button>
                        </div>
                        <button class="btn-remove"><i class="fas fa-trash"></i></button>
                    </li>`;
                cartList.append(listItem);
            });
            updateEventListeners();
            calculateTotal(); // Tính tổng tiền ban đầu
        }
    }
$(document).ready(function () {
    const validCoupons = {
        "GIAM30K": { type: "amount", value: 30000 },  // Giảm trực tiếp 30,000 VNĐ
        "DISCOUNT20": { type: "percent", value: 20 }, // Giảm 20%
        "FREESHIP": { type: "amount", value: 0 }      // Freeship, không giảm giá tiền
    };

    // Kiểm tra và ẩn thông báo "Giỏ hàng trống" nếu có sản phẩm
    if ($(".cart-list .item").length > 0) {
        $(".gio-hang-trong").hide();
    } else {
        $(".gio-hang-trong").show();
    }

    updateEventListeners(); // Kích hoạt các sự kiện ban đầu
    calculateTotal(); // Tính tổng tiền ngay khi tải trang

    function updateEventListeners() {
        // Xử lý nút tăng số lượng
        $(".btn-quantity.plus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
            const $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                nextQuantity = currentQuantity + 1;
                currentQuantity = parseInt($quantityField.val()),
                nextQuantity = currentQuantity + 1;

            $quantityField.val(nextQuantity);

            calculateTotal();
            updateLocalStorage();
        });

            $quantityField.val(nextQuantity); // Cập nhật số lượng
            calculateTotal(); // Tính lại tổng tiền
        });

        // Xử lý nút giảm số lượng
        $(".btn-quantity.minus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
            const $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                prevQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;

            $quantityField.val(prevQuantity);

            calculateTotal();
            updateLocalStorage();
        });

                currentQuantity = parseInt($quantityField.val()),
                prevQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;

            $quantityField.val(prevQuantity); // Cập nhật số lượng
            calculateTotal(); // Tính lại tổng tiền
        });

        // Xử lý nút xóa sản phẩm
        $(".btn-remove").off("click").on("click", function () {
            var $item = $(this).closest(".item");
            $item.remove(); // Xóa sản phẩm khỏi DOM

            updateLocalStorage();
            calculateTotal();
        });
    }

    // Hàm tính tổng tiền, có hỗ trợ giảm giá
    function calculateTotal(discount = 0) {
        let subTotal = 0;
        $(".quantity_field").each(function () {
            var quantity = parseInt($(this).val()),
                price = parseFloat($(this).data("price"));
            subTotal += quantity * price;
        });

        // Áp dụng giảm giá nếu có
        if (discount > 0) {
            subTotal -= (subTotal * (discount / 100));
        }

        $(".amount").html(vnd(subTotal)); // Hiển thị tổng tiền
    }

    // Cập nhật lại giỏ hàng trong localStorage
    function updateLocalStorage() {
        var updatedCart = [];
        $(".item").each(function () {
            var title = $(this).find("h4").text();
            var price = $(this).find(".item-price").text().replace(' VNĐ', '');
            var quantity = $(this).find(".quantity_field").val();
            updatedCart.push({ title: title, price: parseFloat(price), quantity: parseInt(quantity) });
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
            const $item = $(this).closest(".item");
            $item.remove(); // Xóa sản phẩm

            if ($(".cart-list .item").length === 0) {
                $(".gio-hang-trong").show(); // Hiển thị thông báo giỏ hàng trống
            }

            calculateTotal(); // Tính lại tổng tiền
        });

        // Xử lý nhập mã giảm giá
        $("#coupon-input").off("input").on("input", function () {
            const couponCode = $(this).val().trim().toUpperCase(); // Lấy mã giảm giá
            const discount = getCouponDiscount(couponCode); // Lấy chi tiết giảm giá
            calculateTotal(discount); // Tính tổng tiền với giảm giá
        });
    }

    function calculateTotal(discount = { type: null, value: 0 }) {
        let subTotal = 0;

        // Tính tổng tiền sản phẩm
        $(".cart-list .item").each(function () {
            const $item = $(this),
                quantity = parseInt($item.find(".quantity_field").val()),
                price = parseFloat($item.find(".quantity_field").data("price"));

            subTotal += quantity * price; // Cộng dồn giá trị
        });

        let finalTotal = subTotal;

        // Áp dụng giảm giá
        if (discount.type === "percent") {
            finalTotal = subTotal * (1 - discount.value / 100);
        } else if (discount.type === "amount") {
            finalTotal = Math.max(0, subTotal - discount.value); // Đảm bảo không âm
        }

        // Hiển thị tổng tiền sau giảm giá
        $(".amount").html(vnd(finalTotal));

        // Hiển thị thông báo giỏ hàng trống nếu không còn sản phẩm
        if (subTotal === 0) {
            $(".gio-hang-trong").show();
        }
    }

    // Hàm kiểm tra mã giảm giá
    function getCouponDiscount(code) {
        return validCoupons[code] || { type: null, value: 0 }; // Trả về thông tin giảm giá hoặc mặc định
    }

    // Hàm định dạng số tiền VNĐ
    function vnd(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }

    // Hàm chuyển đổi giá tiền
    function vnd(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    calculateTotal(); // Tính tổng tiền ban đầu

    // Event Listener cho nút "Áp dụng" để kích hoạt giảm giá
    document.getElementById('apply-coupon-btn').addEventListener('click', function() {
        const couponCode = document.getElementById('coupon-code-input').value;
        if (couponCode) {
            const savedCoupons = JSON.parse(localStorage.getItem('savedCoupons')) || [];
            const coupon = savedCoupons.find(c => c.code === couponCode);

            if (coupon) {
                // Tính lại tổng tiền với giảm giá khi nhấn nút áp dụng
                calculateTotal(parseFloat(coupon.discount));
            } else {
                alert('Mã giảm giá không hợp lệ.');
            }
        } else {
            alert('Vui lòng chọn một mã giảm giá.');
        }
    });

    // Xác nhận mã giảm giá đã chọn
    document.getElementById('confirm-coupon-btn').addEventListener('click', function() {
        const selectedCoupon = document.querySelector('.coupon-radio:checked');
        if (selectedCoupon) {
            const couponCode = selectedCoupon.value;
            const discount = selectedCoupon.getAttribute('data-discount');

            // Cập nhật ô nhập mã giảm giá
            document.getElementById('coupon-code-input').value = couponCode;

            // Đóng modal
            closeModal();
        } else {
            alert('Vui lòng chọn một mã giảm giá.');
        }
    });
});


// Cập nhật số lượng giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
    updateAmount();
});

    // // Hàm cập nhật số lượng giỏ hàng
    // function updateAmount() {
    //     if (localStorage.getItem('currentuser') != null) {
    //         let amount = getAmountCart();
    //         document.querySelector('.count-product-cart').innerText = amount;
    //     }
    // }

function animationCart() {
    document.querySelector(".count-product-cart").style.animation = "slidein ease 1s";
    setTimeout(() => {
        document.querySelector(".count-product-cart").style.animation = "none";
    }, 1000);
}

function showProductBuyNow(product) {
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = `<div class="food-total">
        <div class="count">${product.soluong}x</div>
        <div class="info-food">
            <div class="name-food">${product.title}</div>
        </div>
    </div>`;
    listOrder.innerHTML = listOrderHtml;
}
});
