$(document).ready(function () {


    $(".apply-coupon-btn").on("click", function () {
        applyCoupon();
    });
    // Kiểm tra và ẩn thông báo "Giỏ hàng trống" nếu có sản phẩm
    function checkEmptyCart() {
        const hasItems = $(".cart-list .item").length > 0;
        if (hasItems) {
            $(".gio-hang-trong").hide();
            $(".actions").show();
        } else {
            $(".gio-hang-trong").show();
            $(".actions").hide();
        }
    }

    function vnd(value) {
        return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
    }

    function applyCoupon() {
        const couponCode = document.getElementById("couponCode").value;

        fetch(`/project/apply-coupon`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({couponCode}),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.success) {
                    alert(`Áp dụng thành công! Bạn được giảm ${data.discountAmount} VNĐ.`);
                    document.querySelector(".summary .amount").innerText = `${data.newTotal} VNĐ`;
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => {
                console.error("Lỗi khi áp dụng mã giảm giá:", error);
                alert("Có lỗi xảy ra. Vui lòng thử lại!");
            });
    }

        // Sự kiện cho nút "Tăng/Giảm số lượng"
    $(".btn-quantity").on("click", function () {
        const productId = $(this).data("id");
        const action = $(this).data("action");
        const quantityField = $(this).closest(".quantity-controls").find(".quantity_field");
        let currentQuantity = parseInt(quantityField.val());

        const newQuantity = action === "increase" ? currentQuantity + 1 : currentQuantity - 1;

        if (newQuantity > 0) {
            updateCart(productId, newQuantity);
        }
    });

    // Sự kiện cho nút "Xóa sản phẩm"
    $(".btn-remove").on("click", function () {
        const productId = $(this).data("id");
        removeFromCart(productId);
    });

    // Sự kiện cho nút "Chọn tất cả"
    $("#selectAll").on("change", function () {
        const isChecked = $(this).prop("checked");
        $(".productCheckbox").prop("checked", isChecked);
        calculateTotalAmount();
    });

    // Sự kiện khi chọn sản phẩm
    $(".productCheckbox").on("change", function () {
        const allChecked = $(".productCheckbox:checked").length === $(".productCheckbox").length;
        $("#selectAll").prop("checked", allChecked);
        calculateTotalAmount();
    });

    // Sự kiện cho nút "Xóa tất cả"
    $(".btn-remove-all").on("click", function () {
        $(".cart-list .item").each(function () {
            const productId = $(this).data("id");
            removeFromCart(productId);
        });
    });

    // Kiểm tra giỏ hàng và tính toán tổng tiền khi tải trang
    checkEmptyCart();

});
