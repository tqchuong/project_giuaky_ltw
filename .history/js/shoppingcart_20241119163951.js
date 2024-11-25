$(document).ready(function () {
    // Kiểm tra và ẩn thông báo "Giỏ hàng trống" nếu có sản phẩm trong giỏ
    if ($(".cart-list .item").length > 0) {
        $(".gio-hang-trong").hide(); // Ẩn thông báo giỏ hàng trống
    } else {
        $(".gio-hang-trong").show(); // Hiển thị thông báo giỏ hàng trống
    }

    updateEventListeners(); // Kích hoạt sự kiện ban đầu
    calculateTotal(); // Tính tổng tiền ngay khi trang tải

    function updateEventListeners() {
        // Xử lý nút tăng số lượng
        $(".btn-quantity.plus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                nextQuantity = currentQuantity + 1;

            $quantityField.val(nextQuantity); // Cập nhật giá trị số lượng
            calculateTotal(); // Cập nhật tổng tiền
        });

        // Xử lý nút giảm số lượng
        $(".btn-quantity.minus").off("click").on("click", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".item"),
                $quantityField = $item.find(".quantity_field"),
                currentQuantity = parseInt($quantityField.val()),
                prevQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;

            $quantityField.val(prevQuantity); // Cập nhật giá trị số lượng
            calculateTotal(); // Cập nhật tổng tiền
        });

        // Xử lý nút xóa sản phẩm
        $(".btn-remove").off("click").on("click", function () {
            var $item = $(this).closest(".item");
            $item.remove(); // Xóa sản phẩm khỏi danh sách

            // Hiển thị thông báo giỏ hàng trống nếu không còn sản phẩm
            if ($(".cart-list .item").length === 0) {
                $(".gio-hang-trong").show();
            }

            calculateTotal(); // Cập nhật tổng tiền
        });

        // Xử lý nhập mã giảm giá
        $("#coupon-input").off("input").on("input", function () {
            const couponCode = $(this).val().trim().toUpperCase();
            const discount = getCouponDiscount(couponCode); // Kiểm tra mã giảm giá
            calculateTotal(discount);
        });
    }

    function calculateTotal(discount = 0) {
        let subTotal = 0;

        // Tính tổng tiền dựa trên số lượng và giá của từng sản phẩm
        $(".cart-list .item").each(function () {
            const $item = $(this),
                quantity = parseInt($item.find(".quantity_field").val()),
                price = parseFloat($item.find(".quantity_field").data("price"));

            subTotal += quantity * price; // Cộng dồn tiền
        });

        // Áp dụng giảm giá nếu có
        const discountedTotal = subTotal * (1 - discount);

        // Hiển thị tổng tiền dưới dạng VNĐ
        $(".amount").html(vnd(discountedTotal));

        // Nếu tổng tiền bằng 0, hiển thị thông báo giỏ hàng trống
        if (subTotal === 0) {
            $(".gio-hang-trong").show();
        }
    }

    // Hàm kiểm tra mã giảm giá
    function getCouponDiscount(code) {
        const validCoupons = {
            "GIAM30":  -30, // 10% giảm giá
            "DISCOUNT20": 0.2, // 20% giảm giá
            "FREESHIP": 0      // Freeship không giảm giá
        };

        return validCoupons[code] || 0; // Trả về mức giảm giá hoặc 0 nếu mã không hợp lệ
    }

    // Hàm định dạng số tiền VNĐ
    function vnd(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
});
