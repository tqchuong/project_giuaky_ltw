$(document).ready(function () {
    const validCoupons = {
        "GIAM30": { type: "amount", value: 30000 },
        "DISCOUNT20": { type: "percent", value: 20 },
        "FREESHIP": { type: "amount", value: 0 }
    };



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
