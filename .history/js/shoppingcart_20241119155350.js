$(document).ready(function () {
    displayCart(); // Display the cart when the document is ready

    function displayCart() {
        var cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage
        var cartList = $(".cart-list"); // Select cart list element
        cartList.empty(); // Clear current cart items

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
                cartList.append(listItem); // Append item to the cart list
            });
            updateEventListeners();
            calculateTotal(); // Calculate total amount
        }
    }

    function updateEventListeners() {
        $(".btn-quantity.plus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                nextQuantity = currentQuantity + 1;

            $quantityField.val(nextQuantity);

            calculateTotal();
            updateLocalStorage();
        });

        $(".btn-quantity.minus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                prevQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;

            $quantityField.val(prevQuantity);

            calculateTotal();
            updateLocalStorage();
        });

        $(".btn-remove").off("click").on("click", function () {
            var $item = $(this).closest(".item");
            $item.remove(); // Remove item from DOM

            // Update localStorage cart
            updateLocalStorage();
            calculateTotal();
        });
    }

    function calculateTotal() {
        var subTotal = 0;
        $(".quantity_field").each(function () {
            var quantity = parseInt($(this).val()),
                price = parseFloat($(this).data("price"));
            subTotal += quantity * price;
        });

        $(".amount").html(vnd(subTotal)); // Display total amount
    }

})

// Cập nhật số lượng sản phẩm trong giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
    updateAmount();
});

// Hàm cập nhật số lượng giỏ hàng
function updateAmount() {
    if (localStorage.getItem('currentuser') != null) {
        let amount = getAmountCart();
        document.querySelector('.count-product-cart').innerText = amount;
    }
}
function animationCart() {
    document.querySelector(".count-product-cart").style.animation = "slidein ease 1s";
    setTimeout(() => {
        document.querySelector(".count-product-cart").style.animation = "none";
    }, 1000);
    
}

