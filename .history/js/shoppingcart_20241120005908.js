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

            if ($(".cart-list .item").length === 0) {
                $(".gio-hang-trong").show(); // Hiển thị thông báo giỏ hàng trống
            }

            calculateTotal(); // Tính lại tổng tiền
        });

        // Xử lý nhập mã giảm giá
        $(".coupon-input").off("input").on("input", function () {
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
});
