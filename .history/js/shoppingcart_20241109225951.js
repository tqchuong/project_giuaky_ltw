
$(document).ready(function() {
    displayCart(); // Hiển thị giỏ hàng khi tài liệu đã sẵn sàng

    // Hàm để hiển thị giỏ hàng
    function displayCart() {
        var cart = JSON.parse(localStorage.getItem('cart')) || []; // Lấy giỏ hàng từ localStorage
        var cartList = $(".cart-list"); // Lấy danh sách giỏ hàng
        cartList.empty(); // Xóa danh sách giỏ hàng hiện tại

        if (cart.length === 0) {
            // Nếu giỏ hàng trống
            $(".gio-hang-trong").show();
        } else {
            // Ẩn thông báo giỏ hàng trống
            $(".gio-hang-trong").hide();

            cart.forEach(function(item) {
                // Thêm từng sản phẩm vào danh sách giỏ hàng
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
                cartList.append(listItem); // Thêm sản phẩm vào danh sách giỏ hàng
            });

            // Cập nhật sự kiện cho các nút tăng, giảm và xóa
            updateEventListeners();
            calculateTotal(); // Tính toán tổng giá trị
        }
    }

    function updateEventListeners() {
        $(".btn-quantity.plus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).parents(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = $quantityField.val(),
                nextQuantity = parseFloat(currentQuantity) + 1;

            $item.find(".current_quantity span").html(nextQuantity);
            $quantityField.val(nextQuantity);

            calculateTotal();
            updateLocalStorage();
        });

        $(".btn-quantity.minus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).parents(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = $quantityField.val();
            var prevQuantity = currentQuantity <= 1 ? 1 : parseFloat(currentQuantity) - 1;

            $item.find(".current_quantity span").html(prevQuantity);
            $quantityField.val(prevQuantity);

            calculateTotal();
            updateLocalStorage();
        });

        $(".btn-remove").off("click").on("click", function () {
            var $item = $(this).parents(".item");
            $item.remove();

            // Cập nhật giỏ hàng trong localStorage
            updateLocalStorage();
            calculateTotal();
        });
    }

    // Hàm tính tổng giá trị giỏ hàng
    var calculateTotal = function () {
        var newSubTotal = 0;
        $(".quantity_field").each(function () {
            var quantity = $(this).val(),
                price = parseFloat($(this).data("price"));

            // Tính tổng phụ (chưa tính thuế)
            newSubTotal += quantity * price;
        });

        // Cập nhật tổng phụ vào phần hiển thị
        $(".sub-total .amount").html(newSubTotal.toFixed(0) + " VNĐ");

        // Tính tổng với thuế (20%)
        var withTax = newSubTotal * 1.2;
        $(".total .amount").html("Tổng: " + withTax.toFixed(0) + " VNĐ");
    };


    // Hàm cập nhật giỏ hàng vào localStorage
    function updateLocalStorage() {
        var updatedCart = [];
        $(".item").each(function() {
            var title = $(this).find("h4").text();
            var price = $(this).find(".item-price").text().replace(' VNĐ', '');
            var quantity = $(this).find(".quantity_field").val();
            updatedCart.push({ title: title, price: parseFloat(price), quantity: parseInt(quantity) });
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    calculateTotal(); // Tính tổng ban đầu
});
