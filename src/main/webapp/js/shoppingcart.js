$(document).ready(function () {
    const validCoupons = {
        "GIAM30": { type: "amount", value: 30000 },  // Giảm trực tiếp 30,000 VNĐ
        "DISCOUNT20": { type: "percent", value: 20 }, // Giảm 20%
        "FREESHIP": { type: "amount", value: 0 }      // Freeship, không giảm giá tiền
    };

    // Kiểm tra và ẩn thông báo "Giỏ hàng trống" nếu có sản phẩm
    function checkEmptyCart() {
        const hasItems = $(".cart-list .item").length > 0;
        const hasCheckedItems = $(".cart-list .item .productCheckbox:checked").length > 0;

        if (hasItems && !hasCheckedItems) {
            $(".gio-hang-trong").hide(); // Ẩn nếu có sản phẩm nhưng không chọn
        } else if (!hasItems) {
            $(".gio-hang-trong").show(); // Hiển thị nếu không có sản phẩm nào
            $(".actions").hide();
        } else {
            $(".gio-hang-trong").hide(); // Ẩn nếu có sản phẩm được chọn
        }
    }

    // Gọi khi trang tải
    $(document).ready(() => {
        updateEventListeners();
        calculateTotal();
        checkEmptyCart(); // Kiểm tra trạng thái giỏ hàng

        // Lấy các phần tử
        const selectAllCheckbox = document.getElementById("selectAll");
        const productCheckboxes = document.querySelectorAll(".productCheckbox");

        // Sự kiện "Chọn tất cả"
        selectAllCheckbox.addEventListener("change", () => {
            productCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked; // Đồng bộ trạng thái
            });
            calculateTotal(); // Tính lại tổng tiền
            checkEmptyCart(); // Kiểm tra trạng thái giỏ hàng
        });

        // Kiểm tra nếu tất cả checkbox sản phẩm được chọn
        productCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                const allChecked = Array.from(productCheckboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked; // Cập nhật trạng thái "Chọn tất cả"
                calculateTotal(); // Tính lại tổng tiền
                checkEmptyCart(); // Kiểm tra trạng thái giỏ hàng
            });
        });
    });

    // Hàm cập nhật sự kiện
    function updateEventListeners() {
        // Xử lý nút tăng số lượng
        $(".btn-quantity.plus").off("click").on("click", function (e) {
            e.preventDefault();
            const $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                nextQuantity = currentQuantity + 1;

            $quantityField.val(nextQuantity); // Cập nhật số lượng
            calculateTotal(); // Tính lại tổng tiền
        });

        // Xử lý nút giảm số lượng
        $(".btn-quantity.minus").off("click").on("click", function (e) {
            e.preventDefault();
            const $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                prevQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;

            $quantityField.val(prevQuantity); // Cập nhật số lượng
            calculateTotal(); // Tính lại tổng tiền
        });

        // Xử lý nút xóa sản phẩm
        $(".btn-remove").off("click").on("click", function () {
            const $item = $(this).closest(".item");
            $item.remove(); // Xóa sản phẩm

            calculateTotal(); // Tính lại tổng tiền
            checkEmptyCart(); // Kiểm tra trạng thái giỏ hàng
        });
    }

    // Hàm tính tổng tiền
    function calculateTotal(discount = { type: null, value: 0 }) {
        let subTotal = 0;

        // Tính tổng tiền sản phẩm được chọn
        $(".cart-list .item").each(function () {
            const $item = $(this),
                isChecked = $item.find(".productCheckbox").is(":checked"), // Kiểm tra checkbox
                quantity = parseInt($item.find(".quantity_field").val()),
                price = parseFloat($item.find(".quantity_field").data("price"));

            if (isChecked) {
                subTotal += quantity * price; // Cộng dồn giá trị sản phẩm được chọn
            }
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

        // Kiểm tra trạng thái giỏ hàng
        checkEmptyCart();
    }

    // Gọi lại hàm khi checkbox thay đổi
    $(".productCheckbox").on("change", function () {
        calculateTotal();
    });

    // Gọi lại hàm khi thay đổi số lượng
    $(".quantity_field").on("input", function () {
        calculateTotal();
    });




    //  sự kiện nhấn nút "Xoá"
    $(".deleteItem").click(function () {
        // Lặp qua tất cả các checkbox và chỉ xóa những sản phẩm được chọn
        $(".cart-list .item").each(function () {
            const $item = $(this);
            const checkbox = $item.find(".productCheckbox");  // Tìm checkbox trong sản phẩm

            // Kiểm tra nếu checkbox được chọn
            if (checkbox.prop("checked")) {
                $item.remove();  // Xóa sản phẩm
            }
        });

        calculateTotal();  // Tính lại tổng tiền sau khi xóa
        checkEmptyCart();  // Kiểm tra nếu giỏ hàng trống
    });

// Thêm sản phẩm vào giỏ hàng
    function addToCart(productId) {
        fetch('/add-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `id=${productId}`
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    alert(data.message);
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error("Lỗi:", error));
    }

// Xóa sản phẩm khỏi giỏ hàng
    function removeFromCart(productId) {
        fetch('/remove-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `id=${productId}`
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    alert(data.message);
                    loadCart(); // Tải lại giỏ hàng
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error("Lỗi:", error));
    }

// Cập nhật số lượng sản phẩm
    function updateCart(productId, quantity) {
        fetch('/update-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `id=${productId}&quantity=${quantity}`
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    alert(data.message);
                    loadCart(); // Tải lại giỏ hàng
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error("Lỗi:", error));
    }

// Tải danh sách sản phẩm trong giỏ hàng
    function loadCart() {
        fetch('/api/cart')
            .then(response => response.json())
            .then(cartItems => {
                const cartList = document.querySelector(".cart-list");
                if (cartItems.length === 0) {
                    cartList.innerHTML = `
                    <div class="gio-hang-trong">
                        <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                        <p>Giỏ hàng của bạn trống</p>
                    </div>
                `;
                } else {
                    cartList.innerHTML = cartItems.map(item => `
                    <li class="item">
                        <input type="checkbox" class="productCheckbox" />
                        <img src="${item.imageURL}" alt="${item.productName}" class="item-image">
                        <h4>${item.productName}</h4>
                        <p class="item-price">${item.price} ₫</p>
                        <div class="quantity-controls">
                            <button class="btn-quantity minus" data-id="${item.id}">-</button>
                            <input type="number" class="quantity_field" value="${item.quantity}" data-id="${item.id}" data-price="${item.price}" min="1">
                            <button class="btn-quantity plus" data-id="${item.id}">+</button>
                        </div>
                        <button class="btn-remove" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                    </li>
                `).join('');
                }
            })
            .catch(error => console.error("Lỗi khi tải giỏ hàng:", error));
    }

// Event listeners cho các nút và input
    document.addEventListener("DOMContentLoaded", () => {
        // Load giỏ hàng khi trang được tải
        loadCart();

        // Lắng nghe sự kiện click cho nút xóa sản phẩm
        document.body.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn-remove")) {
                const productId = e.target.dataset.id;
                removeFromCart(productId);
            }
        });

        // Lắng nghe sự kiện click cho nút tăng/giảm số lượng
        document.body.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn-quantity")) {
                const productId = e.target.dataset.id;
                const quantityField = document.querySelector(`input[data-id="${productId}"]`);
                let quantity = parseInt(quantityField.value);

                if (e.target.classList.contains("minus") && quantity > 1) {
                    quantity--;
                } else if (e.target.classList.contains("plus")) {
                    quantity++;
                }

                quantityField.value = quantity;
                updateCart(productId, quantity);
            }
        });

        // Lắng nghe sự kiện thay đổi số lượng trực tiếp trong input
        document.body.addEventListener("input", (e) => {
            if (e.target.classList.contains("quantity_field")) {
                const productId = e.target.dataset.id;
                const quantity = parseInt(e.target.value);

                if (quantity > 0) {
                    updateCart(productId, quantity);
                }
            }
        });
    });






    // Hàm kiểm tra mã giảm giá
    function getCouponDiscount(code) {
        return validCoupons[code] || { type: null, value: 0 }; // Trả về thông tin giảm giá hoặc mặc định
    }

    // Hàm định dạng số tiền VNĐ
    function vnd(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
});
function addToCart(productId) {
    fetch('/add-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `pid=${productId}`
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === 'success') {
                updateCartUI();
            }
        })
        .catch(error => console.error('Error:', error));
}
function removeFromCart(productId) {
    fetch('/remove-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `pid=${productId}`
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === 'success') {
                updateCartUI();
            }
        })
        .catch(error => console.error('Error:', error));
}
function updateCart(productId, quantity) {
    fetch('/update-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `pid=${productId}&quantity=${quantity}`
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === 'success') {
                updateCartUI();
            }
        })
        .catch(error => console.error('Error:', error));
}
function updateCartUI() {
    fetch('/ShowCart')
        .then(response => response.json())
        .then(cart => {
            const cartList = document.querySelector('.cart-list');
            cartList.innerHTML = '';

            cart.list.forEach(item => {
                cartList.innerHTML += `
                <li class="item">
                    <img src="${item.imageURL}" alt="${item.productName}" class="item-image">
                    <h4>${item.productName}</h4>
                    <p class="item-price">${item.price}₫</p>
                    <div class="quantity-controls">
                        <button class="btn-quantity minus" onclick="updateCart(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" class="quantity_field" value="${item.quantity}" readonly>
                        <button class="btn-quantity plus" onclick="updateCart(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </li>`;
            });

            if (cart.list.length === 0) {
                cartList.innerHTML = '<p>Giỏ hàng của bạn đang trống!</p>';
            }
        })
        .catch(error => console.error('Error:', error));
}
