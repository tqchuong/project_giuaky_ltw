$(document).ready(function () {
    displayCart(); // Display the cart when the document is ready

    // Function to display cart items
    function displayCart() {
        var cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage
        var cartList = $(".cart-list"); // Select cart list element
        cartList.empty(); // Clear current cart items

        if (cart.length === 0) {
            // Show empty cart message if cart is empty
            $(".gio-hang-trong").show();
        } else {
            // Hide empty cart message if there are items
            $(".gio-hang-trong").hide();

            cart.forEach(function (item) {
                // Add each item to the cart list
                var listItem = `
                    <li class="item">
                        <div class="item-details">
                            <img src="${item.img}" alt="${item.title}" class="item-image" />
                            <h4>${item.title}</h4>
                            <p>Giá: <span class="item-price">${item.price}</span> VNĐ</p>
                            <div class="quantity-controls">
                                <button class="btn-quantity minus">-</button>
                                <input type="number" class="quantity_field" value="${item.quantity}" data-price="${item.price}" />
                                <button class="btn-quantity plus">+</button>
                                <button class="btn-remove"><i class="fas fa-trash"></i></button>
                            </div>
                            <p class="current_quantity">Số lượng: <span>${item.quantity}</span></p>
                        </div>
                    </li>`;
                cartList.append(listItem); // Append item to the cart list
            });

            // Update event listeners for buttons
            updateEventListeners();
            calculateTotal(); // Calculate total amount
        }
    }

    // Function to update event listeners for plus, minus, and remove buttons
    function updateEventListeners() {
        $(".btn-quantity.plus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                nextQuantity = currentQuantity + 1;

            $quantityField.val(nextQuantity);
            $item.find(".current_quantity span").html(nextQuantity);

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
            $item.find(".current_quantity span").html(prevQuantity);

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

    // Function to calculate total cart value
    function calculateTotal() {
        var subTotal = 0;
        $(".quantity_field").each(function () {
            var quantity = parseInt($(this).val()),
                price = parseFloat($(this).data("price"));

            // Calculate subtotal (without tax)
            subTotal += quantity * price;
        });

        // Update subtotal display
        $(".total .amount").html("Tổng: " + subTotal.toFixed(0) + " VNĐ");
    }

    // Function to update cart in localStorage
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

    calculateTotal(); // Initial total calculation
});
