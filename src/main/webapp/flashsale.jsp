<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.dao.ProductDAO" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.Products" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.Discount" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.List" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>FoodMart Store</title>
    <link href="<c:url value='/css/products.css' />" rel="stylesheet">
    <link rel="stylesheet" href="<c:url value='/font/font-awesome-pro-v6-6.2.0/css/all.min.css' />" />
    <link rel="stylesheet" href="<c:url value='/css/flash-sale.css' />">
    <link rel="stylesheet" href="<c:url value='/css/home.css' />">
</head>

<body>
<jsp:include page="header.jsp" />

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
                <a class="menu-Category" href="products.jsp">
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
                hot
            </a></li>
            <li class="menu-list-item"><a class="hotpro-link" href="flash-sale.jsp">
                <i class="fa-solid fa-bolt fa-shake" style="color: #FFD700;"></i> Flashsale
            </a></li>
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
            <button id="sort-ascending" onclick="searchProducts(1)"><i class="fa-solid fa-arrow-up-short-wide"></i></button>
            <button id="sort-descending" onclick="searchProducts(2)"><i class="fa-solid fa-arrow-down-wide-short"></i></button>
            <button id="reset-search" onclick="searchProducts(0)"><i class="fa-solid fa-arrow-rotate-right"></i></button>
            <button onclick="closeSearchAdvanced()"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </div>
</div>

<main>
    <div class="flash-sale-container">
        <h1><i class="lightning-icon"></i> Flash Sale <i class="lightning-icon"></i></h1>
        <div class="banner">
            <img src="image/banner/banner7.png" alt="Flash Sale Banner">
        </div>

        <div class="flash-sale-timer">
            <div class="time-slots">
                <button class="slot-button" data-slot="slot9">9:00<br><span class="slot-description">Đã kết thúc</span></button>
                <button class="slot-button" data-slot="slot12">12:00<br><span class="slot-description">Đang diễn ra</span></button>
                <button class="slot-button" data-slot="slot16">16:00<br><span class="slot-description">Sắp diễn ra</span></button>
                <button class="slot-button" data-slot="slot23">23:00<br><span class="slot-description">Sắp diễn ra</span></button>
            </div>
        </div>

        <!-- Lọc sản phẩm -->
        <div class="categories">
            <button class="category-button" data-loai="all">Tất cả</button>
            <button class="category-button" data-loai="Gạo">Gạo</button>
            <button class="category-button" data-loai="Bắp">Bắp</button>
            <button class="category-button" data-loai="Khoai">Khoai</button>
            <button class="category-button" data-loai="Khác">Khác</button>
        </div>


        <div class="product-list">
            <!-- Hiển thị sản phẩm giảm giá -->
            <c:forEach var="discount" items="${activeDiscounts}">
                <div class="col-product" data-id="${discount.product.productID}" data-loai="${discount.product.categoryID}">
                    <article class="card-product">
                        <div class="card-header">
                            <a href="<c:url value='/productdetail.jsp?id=${discount.product.productID}'/>" class="card-image-link">
                                <img class="card-image" src="<c:url value='/${discount.product.imageURL}' />" alt="${discount.product.productName}">
                            </a>
                        </div>
                        <div class="food-info">
                            <div class="card-content">
                                <div class="card-title">
                                    <a href="<c:url value='/productdetail.jsp?id=${discount.product.productID}'/>" class="card-title-link">${discount.product.productName}</a>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="product-price">
                                    <span class="original-price">${discount.product.price} ₫</span>
                                    <span class="discount-price">${discount.discountedPrice} ₫</span>
                                    <span class="discount-message">-${discount.discountPercentage}%</span>
                                </div>
                                <div class="product-buy">
                                    <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </c:forEach>
        </div>
    </div>
</main>

<jsp:include page="footer.jsp" />
<div class="back-to-top">
    <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
</div>
<div class="chat-box">
    <a href="#">💬</a>
</div>
<script src="<c:url value='/js/flash-sale.js' />"></script>
</body>

</html>
