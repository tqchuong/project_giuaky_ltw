$(document).ready(function () {
    // Ẩn thông báo giỏ hàng trống nếu có sản phẩm trong danh sách
    if ($(".cart-list .item").length > 0) {
        $(".gio-hang-trong").hide();
    }

    updateEventListeners(); // Kích hoạt các sự kiện ban đầu
    calculateTotal(); // Tính tổng tiền

    function updateEventListeners() {
        // Xử lý nút tăng số lượng
        $(".btn-quantity.plus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                nextQuantity = currentQuantity + 1;

            $quantityField.val(nextQuantity);
            calculateTotal();
        });

        // Xử lý nút giảm số lượng
        $(".btn-quantity.minus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                prevQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;

            $quantityField.val(prevQuantity);
            calculateTotal();
        });

        // Xử lý nút xóa sản phẩm
        $(".btn-remove").off("click").on("click", function () {
            var $item = $(this).closest(".item");
            $item.remove(); // Xóa sản phẩm khỏi danh sách

            if ($(".cart-list .item").length === 0) {
                $(".gio-hang-trong").show(); // Hiển thị thông báo giỏ hàng trống
            }

            calculateTotal(); // Cập nhật tổng tiền
        });
    }

    function calculateTotal() {
        var subTotal = 0;

        // Tính tổng tiền từ các sản phẩm trong giỏ
        $(".cart-list .item").each(function () {
            var $item = $(this),
                quantity = parseInt($item.find(".quantity_field").val()),
                price = parseFloat($item.find(".quantity_field").data("price"));

            subTotal += quantity * price;
        });

        // Hiển thị tổng tiền dưới dạng VNĐ
        $(".amount").html(vnd(subTotal));
    }

    // Hàm định dạng số tiền VNĐ
    function vnd(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
});
