<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="css/shoppingcart.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>

    <!-- Header -->
    <header class="header">
        <div class="logo">
            <a href="home.jsp" aria-label="Homepage">
                <img src="image/shoppingcart/6.png" alt="Store Logo" />
            </a>
        </div>
        <div class="basket">
            <a href="javascript:void(0);" onclick="toggleCart()" aria-label="Cart">
                <img src="image/shoppingcart/shoppingcart.png" alt="Basket Icon" />
            </a>
        </div>
    </header>

    <!-- Cart Section -->
    <main class="cart">
        <div class="container">
            <!-- Cart Title -->
            <div class="cart-title">
                <h1>Giỏ hàng của bạn</h1>
            </div>

            <!-- Cart Items -->
            <div class="cart-body">
                <!-- Empty Cart Message -->
                <div class="gio-hang-trong">
                    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    <p>Giỏ hàng của bạn trống</p>
                </div>
                <div class="actions">
                    <label class="select-all">
                        <input type="checkbox" id="selectAll" /> Chọn tất cả
                    </label>

                    <!-- Nút xóa tất cả sản phẩm -->
                    <button class="btn-remove-all">
                        <i class="fas fa-trash"></i> Xóa tất cả
                    </button>
                </div>
            </div>

                <!-- List of Cart Items -->
                <ul class="cart-list">

                    <li class="item">
                        <input type="checkbox" class="productCheckbox"  />
                        <img src="image/img-pro/gaost25.jpg" alt="Gạo Thơm Hữu Cơ ST25" class="item-image">
                        <h4>Gạo Thơm Hữu Cơ ST25</h4>
                        <p class="item-price">130.000&nbsp;₫</p>
                        <div class="quantity-controls">
                            <button class="btn-quantity minus">-</button>
                            <input type="number" class="quantity_field" value="1" data-price="130000" min="1">
                            <button class="btn-quantity plus">+</button>
                        </div>
                        <button class="btn-remove"><i class="fas fa-trash"></i></button>
                    </li>
                </ul>
                <ul class="cart-list">
                    <li class="item">
                        <input type="checkbox" class="productCheckbox"  />
                        <img src="image/img-luongkho/LUONG-KHO-BAY-4-300x300.jpg" alt="Lương khô bay" class="item-image">
                        <h4>Lương khô bay</h4>
                        <p class="item-price">30.000&nbsp;₫</p>
                        <div class="quantity-controls">
                            <button class="btn-quantity minus">-</button>
                            <input type="number" class="quantity_field" value="1" data-price="30000" min="1">
                            <button class="btn-quantity plus">+</button>
                        </div>
                        <button class="btn-remove"><i class="fas fa-trash"></i></button>
                    </li>
                </ul>

            </div>

            <!-- Delivery & Payment Details -->
            <div class="delivery-payment grid_12">
                <div class="delivery-address grid_6">
                    <h3>Địa chỉ giao hàng</h3>
                    <address>
                        ĐH Nông Lâm<br>
                        TP THỦ ĐỨC
                    </address>
                </div>
                <div class="payment-details grid_6">
                    <h3>Thẻ thanh toán </h3>
                    <p>**** **** **** 8678</p>
                </div>
            </div>

            <!-- Coupon Section -->
            <div class="coupon grid_12">
                <h3>Áp dụng phiếu giảm giá</h3>
                <input class="coupon-input" type="text" placeholder="Nhập mã vào" aria-label="Coupon Code">
            </div>

            <!-- Cart Summary -->
            <div class="summary grid_12">
                <div class="inner_container">
                    <div class="summary-content">
                        <div class="col_1of2 total">
                            <span class="amount">${sessionScope.cart.totalAmount != null ? sessionScope.cart.totalAmount : 0} VNĐ</span>
                        </div>
                    </div>
                        <!-- Summary Buttons -->
                        <div class="btn-summary">
                            <a href="home.jsp" class="btn-checkout btn-reverse" role="button">Tiếp tục mua sắm</a>
                            <a href="checkout.jsp" class="btn-checkout" role="button">Thanh toán</a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </main>

    <!-- External JavaScript -->
    <script src="js/shoppingcart.js"></script>

</body>

</html>