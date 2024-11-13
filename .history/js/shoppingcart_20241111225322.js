$(document).ready(function () {
    initializeCartCount(); // Initial cart count update

    displayCart(); // Display the cart items
    updateAmount(); // Update the cart count icon on page load

    function initializeCartCount() {
        // Retrieve the cart count from localStorage and set it on the icon
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        $(".count-product-cart").text(totalItems);
    }

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
            calculateTotal();
        }
        updateAmount();
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
            updateAmount();
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
            updateAmount();
        });

        $(".btn-remove").off("click").on("click", function () {
            var $item = $(this).closest(".item");
            $item.remove();

            updateLocalStorage();
            calculateTotal();
            updateAmount();
        });
    }

    function calculateTotal() {
        var subTotal = 0;
        $(".quantity_field").each(function () {
            var quantity = parseInt($(this).val()),
                price = parseFloat($(this).data("price"));
            subTotal += quantity * price;
        });

        $(".amount").html(vnd(subTotal));
    }

    function updateLocalStorage() {
        var updatedCart = [];
        $(".item").each(function () {
            var title = $(this).find("h4").text();
            var price = $(this).find(".item-price").text().replace(' VNĐ', '');
            var quantity = $(this).find(".quantity_field").val();
            updatedCart.push({ title: title, price: parseFloat(price), quantity: parseInt(quantity) });
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    function vnd(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    function updateAmount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        $(".count-product-cart").text(totalItems);
        localStorage.setItem('cartCount', totalItems);
    }
    
    calculateTotal();
});
