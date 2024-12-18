<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.dao.ProductDAO" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.Products" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.ProductImages" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.Reviews" %>
<%@ page import="java.util.List" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoodMart Store</title>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="css/productdetails.css">
    <link rel="stylesheet" href="css/products.css">
    <link rel="stylesheet" href="css/home.css">



</head>
<body>
    <jsp:include page="header.jsp"/>
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

    <!--<div class="breadcrumb-container">-->
    <!--    <nav aria-label="breadcrumb">-->
    <!--        <ol class="breadcrumb-links">-->
    <!--            <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>-->
    <!--            <li class="breadcrumb-item"><a href="#">Gạo</a></li>-->
    <!--            <li class="breadcrumb-item active" aria-current="page">Gạo Ông Cua ST25 Organic chuẩn USDA Mỹ (hộp 2kg)</li>-->
    <!--        </ol>-->
    <!--    </nav>-->
    <!--</div>--><%
        // Lấy thông tin sản phẩm theo ID = 3
        ProductDAO productDAO = new ProductDAO();
        Products productDetails = productDAO.getProductDetailsById(3);  // Lấy sản phẩm với ID = 3
        List<ProductImages> images = null;
        double averageRating = 0.0;
        int reviewCount = 0;
        int viewCount = 0;

        if (productDetails != null) {
            images = productDetails.getImages();  // Lấy danh sách ảnh sản phẩm
            averageRating = productDAO.getAverageRating(3); // Lấy trung bình rating
            reviewCount = productDetails.getReviews() != null ? productDetails.getReviews().size() : 0;
            viewCount = productDetails.getProductViews();
        }
    %>

    <section id="selling-product" class="single-product mt-0 mt-md-5  ">
        <div class="container-fluid">
            <div class="product-details">
                <div class="row">
                    <div class="product-images col-md-6 d-flex flex-column align-items-center">
                        <div class="row flex-column-reverse flex-lg-row">
                            <div class="col-md-12 col-lg-2">
                                <div class="product-thumbnails">
                                    <%
                                        // Kiểm tra xem danh sách ảnh có tồn tại và lặp qua để hiển thị ảnh
                                        if (images != null && !images.isEmpty()) {
                                            for (int i = 0; i < images.size(); i++) {
                                                String imagePath = images.get(i).getImagePath();  // Lấy đường dẫn ảnh
                                    %>
                                    <img src="<%= imagePath %>" alt="Thumbnail <%= i+1 %>"
                                         class="thumb-image img-fluid"
                                         onclick="changeImage('<%= imagePath %>')"
                                         data-large-img="<%= imagePath %>">
                                    <%
                                            }
                                        }
                                    %>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-10">
                                <div class="product-main-image">
                                    <%
                                        if (images != null && !images.isEmpty()) {
                                            String mainImage = images.get(0).getImagePath();  // Lấy ảnh đầu tiên làm ảnh chính
                                    %>
                                    <img id="mainImage" src="<%= mainImage %>" alt="Main Product"
                                         class="img-fluid" data-large-img="<%= mainImage %>">
                                    <%
                                        }
                                    %>
                                    <div class="zoom-lens"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-info col-md-5">
                        <div class="product-info-content">
                            <div class="recommendation pt-3">
                                <span class="tag-likes">Yêu Thích</span>
                                <div class="recommended-product">
                                    <div class="element-header">
                                        <%-- Tên sản phẩm --%>
                                        <h2 itemprop="name" class="display-6"><%= productDetails != null ? productDetails.getProductName() : "" %></h2>
                                        <div class="rating-container d-flex align-items-center">
                                            <%-- Trung bình rating --%>
                                            <span class="rating-score"><%= String.format("%.1f", averageRating) %></span>
                                            <div class="rating">
                                                <%-- Hiển thị sao dựa trên trung bình rating (làm tròn đến 0.5) --%>
                                                <% for (int i = 1; i <= 5; i++) {
                                                    if (averageRating >= i) { %>
                                                <span class="text-primary">&#9733;</span> <%-- Sao đầy --%>
                                                <% } else if (averageRating >= i - 0.5) { %>
                                                <span class="text-half-primary">&#9733;</span> <%-- Nửa sao (Unicode không có nửa sao, bạn có thể dùng icon khác) --%>
                                                <% } else { %>
                                                <span class="text-muted">&#9734;</span> <%-- Sao trống --%>
                                                <% }
                                                } %>
                                            </div>
                                            <div class="separator"></div>
                                            <%-- Số lượt đánh giá --%>
                                            <span class="review-count"><%= reviewCount %> Đánh Giá</span>
                                            <div class="separator"></div>
                                            <%-- Số lượt xem --%>
                                            <span class="sales-count ms-3"><%= viewCount %> Lượt Xem</span>
                                        </div>

                                        <div class="product-price-container">
                                            <div class="product-price">
                                                <%-- Giá sản phẩm --%>
                                                <strong class="current-price">đ<%= productDetails != null ? String.format("%,.0f", productDetails.getPrice()) : "" %></strong>
                                                <%-- <del class="old-price">đ140.000</del>
                                                <span class="discount">-4%</span> --%>
                                            </div>
                                        </div>
                                        <%-- Mô tả ngắn --%>
                                        <p><%= productDetails != null ? productDetails.getShortDescription() : "" %></p>
                                        <div class="purchase-options">
                                            <div class="quantity-group">
                                                <label for="quantity">Số Lượng:</label>
                                                <div class="quantity-control">
                                                    <button type="button" class="quantity-left-minus btn">-</button>
                                                    <input type="text" id="quantity" name="quantity"
                                                           class="quantity-input" value="1" min="1" max="100" readonly>
                                                    <button type="button" class="quantity-right-plus btn">+</button>
                                                </div>
                                                <div class="stock-number">Còn <%= productDetails.getStockQuantity() %> sản phẩm</div>
                                            </div>

                                            <div class="button-group">
                                                <button type="button" class="btn btn-secondary add-to-cart"
                                                        onclick="window.location.href='shoppingcart.jsp'">
                                                    <i class="fas fa-shopping-cart"></i> Thêm Vào Giỏ Hàng
                                                </button>

                                                <button type="button" class="btn btn-primary buy-now"
                                                        onclick="window.location.href='checkout.jsp'">Mua Ngay</button>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="product-info-tabs py-5">
        <div class="container-fluid">
            <div class="row">
                <div class="d-flex flex-column flex-md-row align-items-start gap-5">
                    <div class="nav flex-row flex-wrap flex-md-column nav-pills me-3 col-lg-3" id="v-pills-tab"
                         role="tablist" aria-orientation="vertical">
                        <button class="nav-link text-start active" id="v-pills-description-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-description" type="button" role="tab"
                                aria-controls="v-pills-description" aria-selected="true">Mô tả sản phẩm
                        </button>
                        <button class="nav-link text-start" id="v-pills-additional-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-additional" type="button" role="tab"
                                aria-controls="v-pills-additional" aria-selected="false">Thông tin bổ sung
                        </button>
                        <button class="nav-link text-start" id="v-pills-reviews-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-reviews" type="button" role="tab" aria-controls="v-pills-reviews"
                                aria-selected="false">Đánh giá
                        </button>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-description" role="tabpanel"
                             aria-labelledby="v-pills-description-tab" tabindex="0">
                            <h5>Chi tiết sản phẩm</h5>
                            <%-- chỗ này là shortDescription của Products--%>
                            <p>Tên sản phẩm: <%= productDetails.getShortDescription() %></p>
<%--                            <ul style="list-style-type:disc;" class="list-unstyled ps-4">--%>
<%--                                &lt;%&ndash; chỗ này là detailedDescription của ProductDetails&ndash;%&gt;--%>
<%--                                <p>Hướng dẫn chế biến</p>--%>
<%--                                <li>- Đong gạo và nước theo tỉ lệ 1:1 (1 lon gạo : 1 lon nước)</li>--%>
<%--                                <li>- Sau khi cơm chín, tiếp tục giữ ấm (keep warm) thêm 10 phút sẽ có bữa cơm tuyệt vời--%>
<%--                                </li>--%>
<%--                                <li>(Thêm/giảm nước cho những lần nấu sau theo sở thích).</li>--%>
<%--                            </ul>--%>
                            <p><%= productDetails.getProductsDetail().getDetailedDescription() %></p>

                        </div>
                        <div class="tab-pane fade" id="v-pills-additional" role="tabpanel"
                             aria-labelledby="v-pills-additional-tab" tabindex="0">

                            <p>Thông tin sản phẩm</p>
                            <%-- chỗ này là detailedDescription của ProductDetails--%>
                            <ul style="list-style-type:disc;" class="list-unstyled ps-4">
                                <li>Tên sản phẩm: <%= productDetails.getProductName() %></li>
                                <li>Danh Mục: <%= productDetails.getCategory().getCategoryName() %></li>
                                <li>Số lượng: <%= productDetails.getStockQuantity() %></li>

                                <li>Ngày hết hạn: <%= (productDetails.getProductsDetail().getExpiryDate() != null) ? new java.text.SimpleDateFormat("dd-MM-yyyy").format(productDetails.getProductsDetail().getExpiryDate()) : "" %></li>

                            </ul>
                        </div>
                        <div class="tab-pane fade" id="v-pills-reviews" role="tabpanel"
                             aria-labelledby="v-pills-reviews-tab" tabindex="0">
                            <div class="review-box d-flex flex-wrap">
                                <% if (productDetails.getReviews() != null && !productDetails.getReviews().isEmpty()) {
                                    for (fit.hcmuaf.edu.vn.foodmart.model.Reviews review : productDetails.getReviews()) { %>
                                <div class="col-lg-6 d-flex flex-wrap gap-3">
                                    <div class="col-md-2">
                                        <div class="image-holder">
                                            <img src="<%= review.getUser().getImageURLUser() %>" alt="review"
                                                 class="img-fluid rounded-circle">
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="review-content">
                                            <div class="rating-container d-flex align-items-center">
                                                <%-- Hiển thị rating --%>
                                                <% for (int i = 1; i <= 5; i++) {
                                                    if (review.getRating() >= i) { %>
                                                <span class="text-primary" style="font-size: 22px;">&#9733;</span>
                                                <% } else { %>
                                                <span class="text-muted" style="font-size: 22px;">&#9734;</span>
                                                <% }
                                                } %>
                                                <span class="rating-count">(<%= review.getRating() %>)</span> <%-- Hoặc String.format("%.1f", review.getRating()) nếu là số thập phân --%>
                                            </div>
                                            <div class="review-header">
                                                <span class="author-name"><%= review.getUser().getUsername() %></span>
                                                <%-- Định dạng ngày tháng --%>
                                                <span class="review-date">– <% if (review.getCreatedAt() != null) { %><%= new java.text.SimpleDateFormat("dd/MM/yyyy").format(review.getCreatedAt()) %><% } %></span>
                                            </div>
                                            <p><%= review.getReviewText() %></p>
                                        </div>
                                    </div>
                                </div>
                                <% }
                                } else { %>
                                <p>Không có đánh giá nào.</p>
                                <% } %>
                            </div>

                            <div class="add-review mt-5">
                                <h3>Đánh giá của bạn </h3>
                                <p>Vui lòng điền những dòng *</p>
                                <form id="form" class="form-group" name="form">
                                    <div class="stars" id="starRating">
                                        <span data-value="1">&#9733;</span>
                                        <span data-value="2">&#9733;</span>
                                        <span data-value="3">&#9733;</span>
                                        <span data-value="4">&#9733;</span>
                                        <span data-value="5">&#9733;</span>
                                    </div>
                                    <p>Đánh giá: <span id="ratingValue">0</span> sao</p>

                                    <div class="pb-3">
                                        <label>Thêm nhận xét *</label>
                                        <textarea class="form-control" placeholder="Thêm nhận xét của bạn"></textarea>
                                    </div>
                                    <button type="submit" name="submit"
                                            class="btn btn-dark btn-large text-uppercase w-100">Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section id="related-products" class="py-5">
        <div class="container">
            <h2 class="section-title text-center mb-4">Sản phẩm tương tự</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <a href="productdetails4.jsp" title="Gạo Thiên Long 5kg">
                            <img src="image/productdetails/gaotl1.jpg" class="card-img-top" alt="Gạo nếp">
                            <div class="card-body">
                                <h5 class="card-title">Gạo Thiên Long 5kg</h5>
                                <span class="price">₫ 190.000</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <a href="productdetails7.jsp" title="Gạo Lứt Đen Điện Biên">
                            <img src="image/productdetails/gaolut.jpg" class="card-img-top" alt="gaolut">
                            <div class="card-body">
                                <h5 class="card-title">Gạo Lứt Đen Điện Biên</h5>
                                <span class="price">₫ 190.000</span>
                            </div>
                        </a>
                    </div>
                </div>
                <!-- Thêm các sản phẩm khác tương tự ở đây -->
            </div>
        </div>
    </section>
    <jsp:include page="footer.jsp"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/home.js"></script>
    <script src="js/productdetails.js"></script>


</body>

</html>