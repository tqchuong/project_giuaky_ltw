<%@ page import="com.example.project.dao.ProductDAO" %>
<%@ page import="com.example.project.model.Products" %>
<%@ page import="java.util.List" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>FoodMart Store</title>
    <link href="../css/products.css" rel="stylesheet">
    <link rel="stylesheet" href="../font/font-awesome-pro-v6-6.2.0/css/all.min.css" />
    <link rel="stylesheet" href="../css/home.css">
</head>

<body>


    <header>
    <div class="header-top">
        <div class="container">
            <div class="header-top-left">
                <ul class="header-top-list">
                    <li><a href=""><i class="fa-regular fa-phone"></i> 0123 456 789 (miễn phí)</a></li>
                    <li><a href=""><i class="fa-light fa-location-dot"></i> Xem vị trí cửa hàng</a></li>
                </ul>
            </div>
            <div class="header-top-right">
                <ul class="header-top-list">
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Cửa hàng</a></li>
                    <li><a href="">Chính sách</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="header-middle">
        <div class="container">
            <div class="header-middle-left">

                <div class="logo">
                    <a href="home.jsp">
                        <img alt="FoodMart Logo" src="../image/shoppingcart/6.png"
                             style="width: 250px; height: auto;">
                    </a>

                </div>
            </div>
            <div class="header-middle-center">
                <form action="" class="form-search">
                    <span class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input class="form-search-input" oninput="searchProducts()" placeholder="Tìm kiếm món ăn..."
                           type="text">
                    <button class="filter-btn"><i class="fa-solid fa-filter"></i><span>Lọc</span></button>
                </form>
            </div>

            <a href="coupon.jsp" class="discount-code-button">
                <div class="icon">
                    <span class="vn">VND</span>
                </div>
                <span class="text">Mã Giảm Giá</span>
            </a>
            
            <div class="header-middle-right">
                <ul class="header-middle-right-list">
                    <li class="header-middle-right-item dropdown open">
                        <i class="fa-solid fa-user"></i>
                        <div class="auth-container">
                            <span class="text-dndk">Đăng nhập / Đăng ký</span>
                            <span class="text-tk" id="user-fullname">Tài khoản <i class="fa-sharp fa-solid fa-caret-down"></i></span>
                        </div>


                        <!-- Menu sẽ được cập nhật bằng JavaScript -->
                        <ul class="header-middle-right-menu" id="user-menu" style="display: none;"></ul>

                        <!-- Các mục đăng nhập và đăng ký sẽ ẩn đi nếu người dùng đã đăng nhập -->
                        <ul class="header-middle-right-menu" id="auth-options">
                            <li><a href="login.jsp?loginForm" id="login"><i
                                    class="fa-solid fa-right-to-bracket"></i> Đăng nhập</a></li>
                            <li><a href="login.jsp?registerForm" id="signup"><i class="fa-solid fa-user-plus"></i>
                                Đăng ký</a></li>
                        </ul>
                    </li>
                    <li class="header-middle-right-item open">
                        <a href="shoppingcart.jsp">
                            <div class="cart-icon-menu">
                                <i class="fa-solid fa-basket-shopping"></i>
                                <span class="count-product-cart">0</span>
                            </div>
                            <span>Giỏ hàng</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</header>
<nav class="header-bottom">
    <div class="container">
        <ul class="menu-list">
            <li class="menu-list-item">
                <a class="menu-link" href="home.jsp">
                    <i class="fa-sharp fa-regular fa-house " style="color: #B5292F;"></i>
                    Trang chủ
                </a>
            </li>


            <li class="menu-list-item">
                <a class="menu-Category" href="products.html">
                    <i class="fa-solid fa-shop" style="padding-right: 5px;color: #B5292F;"></i>
                    Sản phẩm
                    <i class="fa-solid fa-caret-down"></i>
                </a>
                    <ul class="dropdown-menu">
                        <li class="menu-list-item" onclick="showCategory('Tất cả')"><a class="menu-link" href="javascript:">Tất cả</a></li>
                        <li class="menu-list-item" onclick="showCategory('Gạo')"><a class="menu-link" href="javascript:">Gạo</a></li>
                        <li class="menu-list-item" onclick="showCategory('Khoai')"><a class="menu-link" href="javascript:">Khoai</a></li>
                        <li class="menu-list-item" onclick="showCategory('Bắp')"><a class="menu-link" href="javascript:">Bắp</a></li>
                        <li class="menu-list-item" onclick="showCategory('Khác')"><a class="menu-link" href="javascript:">Khác</a></li>

                    </ul>
            </li>
            <li class="menu-list-item"><a class="hotpro-link" href="hotproducts.jsp">
                <i class="fa-solid fa-fire fa-shake" style="color: #f00505;"></i>
                hot</a>
            </li>

            <li class="menu-list-item"><a class="flashsale-link" href="flash-sale.jsp">
                <i class="fa-solid fa-bolt fa-shake" style="color: #FFD700;"></i> Flashsale
            </a>
            </li>



        </ul>

    </div>
</nav>
<div class="advanced-search">
    <div class="container">
        <div class="advanced-search-category">
            <span>Phân loại </span>
            <select id="advanced-search-category-select" name="" onchange="searchProducts()">
                <option>Tất cả</option>
                <option>Gạo</option>
                <option>Khoai</option>
                <option>Bắp</option>
                <option>Khác</option>
            </select>
        </div>
        <div class="advanced-search-price">
            <span>Giá từ</span>
            <input id="min-price" onchange="searchProducts()" placeholder="tối thiểu" type="number">
            <span>đến</span>
            <input id="max-price" onchange="searchProducts()" placeholder="tối đa" type="number">
            <button id="advanced-search-price-btn"><i class="fa-solid fa-magnifying-glass-dollar"></i></button>
        </div>
        <div class="advanced-search-control">
            <button id="sort-ascending" onclick="searchProducts(1)"><i class="fa-solid fa-arrow-up-short-wide"></i>
            </button>
            <button id="sort-descending" onclick="searchProducts(2)"><i
                    class="fa-solid fa-arrow-down-wide-short"></i>
            </button>
            <button id="reset-search" onclick="searchProducts(0)"><i class="fa-solid fa-arrow-rotate-right"></i>
            </button>
            <button onclick="closeSearchAdvanced()"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </div>
</div>
<main class="main-wrapper">
    <div class="container" id="trangchu">
        <div class="home-slider">
            <div class="slides">
                <img alt="" src="../image/banner/Banner.png">
                <img alt="" src="../image/banner/baner2.png">

            </div>
            <div class="controls">
                <button class="prev">❮</button>
                <button class="next">❯</button>
            </div>
        </div>
        <div class="home-service" id="home-service">
            <div class="home-service-item">
                <div class="home-service-item-icon">
                    <i class="fa-solid fa-truck-fast"></i>
                </div>
                <div class="home-service-item-content">
                    <h4 class="home-service-item-content-h">GIAO HÀNG NHANH</h4>
                    <p class="home-service-item-content-desc">Cho tất cả đơn hàng</p>
                </div>
            </div>
            <div class="home-service-item">
                <div class="home-service-item-icon">
                    <i class="fa-solid fa-shield-check"></i>
                </div>
                <div class="home-service-item-content">
                    <h4 class="home-service-item-content-h">SẢN PHẨM AN TOÀN</h4>
                    <p class="home-service-item-content-desc">Cam kết chất lượng</p>
                </div>
            </div>
            <div class="home-service-item">
                <div class="home-service-item-icon">
                    <i class="fa-duotone fa-solid fa-user-headset"></i>
                </div>
                <div class="home-service-item-content">
                    <h4 class="home-service-item-content-h">HỖ TRỢ 24/7</h4>
                    <p class="home-service-item-content-desc">Tất cả ngày trong tuần</p>
                </div>
            </div>
            <div class="home-service-item">
                <div class="home-service-item-icon">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <div class="home-service-item-content">
                    <h4 class="home-service-item-content-h">HOÀN LẠI TIỀN</h4>
                    <p class="home-service-item-content-desc">Nếu không hài lòng</p>
                </div>
            </div>
        </div>
        <div class="home-title-block" id="home-title">
            <h2 class="home-title">Khám phá sản phẩm của chúng tôi</h2>
        </div>
        <%
            ProductDAO productDAO = new ProductDAO();
            List<Products> products = productDAO.getAllProducts();
        %>
        <div class="home-products" id="home-products">
            <% for (Products product : products) { %>
            <div class="col-product" data-id="<%= product.getProductID() %>" data-loai="<%= product.getCategory().getCategoryName() %>">
                <article class="card-product">
                    <div class="card-header">
                        <a href="#" class="card-image-link">
                            <img class="card-image" src="<%= product.getImageURL() %>" alt="<%= product.getProductName() %>">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a href="#" class="card-title-link"><%= product.getProductName() %></a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="current-price" style="text-decoration: line-through; color: #999;"><%= product.getPrice() %>₫</span>&nbsp;
                                <span class="current-price"><%= product.getPrice() %>₫</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item">
                                    <i class="fa-solid fa-cart-plus"></i> Đặt hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <% } %>
        </div>
        <div class="page-nav" id="page-nav">
            <ul class="page-nav-list">
            </ul>
        </div>


    </div>


</main>

<footer class="footer">

    <div class="widget-area">
        <div class="container">
            <div class="widget-row">
                <div class="widget-row-col">
                    <div class="logo">
                        <a href="">
                            <img alt="FoodMart Logo" src="../image/shoppingcart/6.png"
                                 style="width: 250px; height: auto;">
                        </a>
                    </div>
                    <h4 style="padding: 5px 0 5px 10px">Kết nối với chúng tôi</h4>
                    <div class="widget-social">
                        <div class="widget-social-item">
                            <a href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div class="widget-social-item">
                            <a href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div class="widget-social-item">
                            <a href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div class="widget-social-item">
                            <a href="">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="widget-row-col">
                    <h3 class="widget-title">Liên hệ</h3>
                    <p><b>Trụ sở chính:</b> VQCR+GP6, khu phố 6, Thủ Đức, Hồ Chí Minh, Việt Nam</p>
                    <p><b>Điện thoại:</b> 0123 456 789 </p>
                    <p><b>Fax:</b>  1234 567 890</p>
                    <p><b>Email:</b> abc@domain.com</p>
                </div>
                <div class="widget-row-col">
                    <h3 class="widget-title">Chính sách</h3>
                    <ul class="widget-contact">
                        <li class="widget-contact-item">
                            <a href="">
                                <i class="fa-solid fa-arrow-right"></i>
                                <span>Chính sách thanh toán</span>
                            </a>
                        </li>
                        <li class="widget-contact-item">
                            <a href="">
                                <i class="fa-solid fa-arrow-right"></i>
                                <span>Chính sách giao hàng</span>
                            </a>
                        </li>
                        <li class="widget-contact-item">
                            <a href="">
                                <i class="fa-solid fa-arrow-right"></i>
                                <span>Chính sách đổi trả</span>
                            </a>
                        </li>
                        <li class="widget-contact-item">
                            <a href="">
                                <i class="fa-solid fa-arrow-right"></i>
                                <span>Chính sách xuất hoá đơn GTGT</span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div class="widget-row-col">
                    <h3 class="widget-title">Chăm sóc khách hàng</h3>
                    <ul class="widget-contact">
                        <li class="widget-contact-item">
                            <a href="">
                                <i class="fa-solid fa-arrow-right"></i>
                                <span>Điều khoản sử dụng</span>
                            </a>
                        </li>
                        <li class="widget-contact-item">
                            <a href="">
                                <i class="fa-solid fa-arrow-right"></i>
                                <span>Hướng dẫn mua hàng</span>
                            </a>
                        </li>

                    </ul>
                </div>


            </div>
        </div>
    </div>
</footer>
<div class="back-to-top">
    <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
</div>

<div class="chat-box">
    <a href="#">💬</a>
</div>

<script src="../js/home.js"></script>


</body>

</html>