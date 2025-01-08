$(document).ready(function () {
    // Hàm định dạng VND
    function vnd(value) {
        return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
    }
    $(".apply-coupon-btn").on("click", function () {
        applyCoupon();
    });
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
    // Cập nhật giỏ hàng
    function updateCart(productId, quantity) {
        if (quantity < 1) {
            alert("Số lượng không thể nhỏ hơn 1!");
            return;
        }

        fetch(`/project/update-cart?pid=${productId}&quantity=${quantity}`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Cập nhật tổng tiền
                    document.querySelector(".summary .amount").innerText = `${data.totalAmount} VNĐ`;

                    // Cập nhật số lượng và giá tiền của sản phẩm vừa được cập nhật
                    const updatedProduct = data.updatedProduct;
                    const productItem = $(`.item[data-id="${updatedProduct.id}"]`);

                    // Cập nhật số lượng hiển thị
                    productItem.find(".quantity_field").val(updatedProduct.quantity);
                    if ($(".cart-list .item").length === 0) {
                        $(".gio-hang-trong").show();
                        $(".actions").hide();
                    } else {
                        $(".gio-hang-trong").hide();
                        $(".actions").show();
                    }
                } else {
                    alert(data.message || "Cập nhật thất bại");
                }
            })
            .catch(error => console.error("Error:", error));
    }
    // Xóa sản phẩm
    function removeFromCart(productId) {
        fetch(`/project/remove-cart?pid=${productId}`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Xóa sản phẩm khỏi danh sách
                    $(`.item[data-id="${productId}"]`).remove();

                    // Cập nhật tổng tiền
                    document.querySelector(".summary .amount").innerText = `${data.totalAmount} VNĐ`;

                } else {
                    alert(data.message || "Xóa sản phẩm thất bại");
                }
            })
            .catch(error => console.error("Error:", error));
    }



        // Sự kiện tăng giảm số lượng
        $(document).on("click", ".btn-quantity.plus", function () {
            const item = $(this).closest(".item");
            const productId = item.data("id");
            const quantity = parseInt(item.find(".quantity_field").val()) + 1;
            updateCart(productId, quantity);
        });

        $(document).on("click", ".btn-quantity.minus", function () {
            const item = $(this).closest(".item");
            const productId = item.data("id");
            const quantity = parseInt(item.find(".quantity_field").val()) - 1;
            updateCart(productId, quantity);
        });

        // Sự kiện xóa sản phẩm
        $(document).on("click", ".btn-remove", function () {
            const item = $(this).closest(".item");
            const productId = item.data("id");
            removeFromCart(productId);
        });

        // Kiểm tra giỏ hàng trống khi tải trang
        if ($(".cart-list .item").length === 0) {
            $(".gio-hang-trong").show();
            $(".actions").hide();
        } else {
            $(".gio-hang-trong").hide();
            $(".actions").show();
        }

});


