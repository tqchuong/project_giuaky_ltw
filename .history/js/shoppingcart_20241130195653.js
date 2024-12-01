$(document).ready(function () {
    const validCoupons = {
        "GIAM30": { type: "amount", value: 30000 },  // Giảm trực tiếp 30,000 VNĐ
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







    // Hàm kiểm tra mã giảm giá
    function getCouponDiscount(code) {
        return validCoupons[code] || { type: null, value: 0 }; // Trả về thông tin giảm giá hoặc mặc định
    }

    // Hàm định dạng số tiền VNĐ
    function vnd(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
});
