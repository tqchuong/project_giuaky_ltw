<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
    <!--</div>-->
    <section id="selling-product" class="single-product mt-0 mt-md-5  ">

        <div class="container-fluid">

            <div class="product-details">

                <div class="row">
                    <!-- Product Images -->
                    <div class="product-images col-md-6 d-flex flex-column align-items-center">

                        <div class="row flex-column-reverse flex-lg-row">
                            <div class="col-md-12 col-lg-2">
                                <div class="product-thumbnails">
                                    <img src="image/productdetails/gaost25.jpg" alt="Thumbnail 1"
                                        class="thumb-image img-fluid"
                                        onclick="changeImage('image/productdetails/gaost25.jpg')"
                                        data-large-img="image/productdetails/gaost25.jpg">
                                    <img src="image/productdetails/gaost25-1.jpg" alt="Thumbnail 2"
                                        class="thumb-image img-fluid"
                                        onclick="changeImage('image/productdetails/gaost25-1.jpg')"
                                        data-large-img="image/productdetails/gaost25-1.jpg">
                                    <img src="image/productdetails/gaost25-2.png" alt="Thumbnail 3"
                                        class="thumb-image img-fluid"
                                        onclick="changeImage('image/productdetails/gaost25-2.png')"
                                        data-large-img="image/productdetails/gaost25-2.png">
                                    <img src="image/productdetails/gaost25-3.png" alt="Thumbnail 4"
                                        class="thumb-image img-fluid"
                                        onclick="changeImage('image/productdetails/gaost25-3.png')"
                                        data-large-img="image/productdetails/gaost25-3.png">
                                    <img src="image/productdetails/gaost25-4.png" alt="Thumbnail 5"
                                        class="thumb-image img-fluid"
                                        onclick="changeImage('image/productdetails/gaost25-4.png')"
                                        data-large-img="image/productdetails/gaost25-4.png">
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-10">
                                <div class="product-main-image">
                                    <img id="mainImage" src="image/productdetails/gaost25.jpg" alt="Main Product"
                                        class="img-fluid" data-large-img="image/productdetails/gaost25.jpg">
                                    <div class="zoom-lens"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- Product Info -->
                    <div class="product-info col-md-5">
                        <div class="product-info-content">
                            <div class="recommendation pt-3">
                                <span class="tag-likes">Yêu Thích</span>
                                <div class="recommended-product">
                                    <div class="element-header">
                                        <h2 itemprop="name" class="display-6">Gạo Ông Cua ST25 Organic chuẩn USDA Mỹ
                                            (hộp 2kg)</h2>
                                        <div class="rating-container d-flex align-items-center">
                                            <span class="rating-score">4.9</span>
                                            <div class="rating">
                                                <span class="text-primary">&#9733;</span>
                                                <span class="text-primary">&#9733;</span>
                                                <span class="text-primary">&#9733;</span>
                                                <span class="text-primary">&#9733;</span>
                                                <span class="text-primary">&#9733;</span>
                                            </div>
                                            <div class="separator"></div>
                                            <span class="review-count">5k Đánh Giá</span>
                                            <div class="separator"></div>
                                            <span class="sales-count ms-3">22.5k Đã Bán</span>
                                        </div>

                                        <div class="product-price-container">
                                            <div class="product-price">
                                                <strong class="current-price">đ135.000</strong>
                                                <del class="old-price">đ140.000</del>
                                                <span class="discount">-4%</span>
                                            </div>
                                        </div>

                                        <p>Gạo Ông Cua ST25 Organic (Hữu Cơ) đạt chuẩn gạo hữu cơ của Mỹ (Organic USDA),
                                            gạo không biến đổi gen. Gạo ST25 là gạo đạt danh hiệu GẠO NGON NHẤT THẾ GIỚI
                                        </p>

                                        <div class="purchase-options">
                                            <div class="quantity-group">
                                                <label for="quantity">Số Lượng:</label>
                                                <div class="quantity-control">
                                                    <button type="button" class="quantity-left-minus btn">-</button>
                                                    <input type="text" id="quantity" name="quantity"
                                                        class="quantity-input" value="1" min="1" max="100" readonly>
                                                    <button type="button" class="quantity-right-plus btn">+</button>
                                                </div>
                                                <div class="stock-number">Còn 4 sản phẩm</div>
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
                            <p>Gạo Ông Cua ST25 Organic (Hữu Cơ) đạt chuẩn gạo hữu cơ của Mỹ (Organic USDA), gạo không
                                biến
                                đổi gen.Gạo ST25 là gạo đạt danh hiệu GẠO NGON NHẤT THẾ GIỚI</p>
                            <ul style="list-style-type:disc;" class="list-unstyled ps-4">
                                <p>Hướng dẫn chế biến</p>
                                <li>- Đong gạo và nước theo tỉ lệ 1:1 (1 lon gạo : 1 lon nước)</li>
                                <li>- Sau khi cơm chín, tiếp tục giữ ấm (keep warm) thêm 10 phút sẽ có bữa cơm tuyệt vời
                                </li>
                                <li>(Thêm/giảm nước cho những lần nấu sau theo sở thích).</li>
                            </ul>
                            <p>Gạo Ông Cua ST25 Organic (Hữu Cơ) đạt chuẩn gạo hữu cơ của Mỹ (Organic USDA), gạo không
                                biến
                                đổi gen.

                                Gạo ST25 là gạo đạt danh hiệu GẠO NGON NHẤT THẾ GIỚI năm 2019 & 2023.

                                Gạo Ông Cua ST25 hữu cơ có hạt thon dài, cho cơm mềm dẻo, giữ nguyên hạt, thơm nhẹ đặc
                                trưng, ăn rất khác biệt.

                                Lúa thơm đặc sản Sóc Trăng ST25 được canh tác theo mô hình LÚA – TÔM (mùa khô nuôi tôm
                                theo
                                vụ – mùa mưa nuôi tôm càng xanh xen canh ruộng lúa).

                                Để đạt được tiêu chuẩn hữu cơ, Gạo Ông Cua ST25 Organic đã vượt qua 255 chỉ tiêu xét
                                nghiệm
                                nghiêm ngặt từ việc kiểm tra mẫu đất, mẫu nước trong quá trình trồng trọt đến lượng phân
                                thuốc bảo vệ thực vật dư thừa.

                                Đây chính là những nổ lực nhằm mang đến chén cơm thật thơm ngon, an toàn đúng nghĩa đáp
                                ứng
                                mong đợi của người tiêu dùng Việt Nam cũng như những thị trường khó tính trên thế giới
                                như
                                Nhật Bản, Mỹ, các nước Châu Âu... góp phần nâng thương hiệu gạo Việt lên tầm thế giới

                                Hướng dẫn bảo quản: Sau khi mở bao bì, gạo cần được trữ kín ở nơi khô ráo và sử dụng
                                trong
                                vòng 30 ngày.

                                Lưu ý: Sản phẩm không sử dụng chất bảo quản nên có thể xuất hiện mọt trong quá trình sử
                                dụng, để đề phòng mọt, sau khi mở bao bì nên để ở nơi khô ráo trong hộp kín, hoặc để
                                ngăn
                                mát tủ lạnh trong 7 ngày. Nếu có mọt xảy ra có thể mở bao để đuổi mọt đi, hoặc lược bỏ
                                mọt
                                khi vo gạo</p>
                        </div>
                        <div class="tab-pane fade" id="v-pills-additional" role="tabpanel"
                            aria-labelledby="v-pills-additional-tab" tabindex="0">
                            <p>Thông tin sản phẩm</p>
                            <ul style="list-style-type:disc;" class="list-unstyled ps-4">
                                <li>Tên sản phẩm: Gạo ST25</li>
                                <li>Khối lượng: 2 kg</li>
                                <li>Đóng gói: Hộp giúp bảo quản gạo tốt hơn và giữ được hương vị thơm ngon.</li>
                                <li>Dinh dưỡng:Giàu tinh bột và các vitamin khoáng chất</li>
                                <li>Danh Mục: Gạo</li>
                                <li>Kho: 81071</li>
                                <li>Thương hiệu: Gạo ST25</li>
                                <li>Chế độ ăn uống: Hữu cơ</li>
                                <li>Loại gạo: Gạo trắng</li>
                                <li>Trọng lượng: 5kg</li>
                                <li>Hạn sử dụng: 6 tháng</li>
                                <li>Xuất xứ: Việt Nam</li>
                                <li>Ngày hết hạn: 25-09-2024</li>
                                <li>Số lượng: 10000</li>
                                <li>Ngày sản xuất: 25-04-2024</li>
                                <li>Tên tổ chức chịu trách nhiệm sản xuất: Việt Nam</li>
                                <li>Gửi từ: TP. Hồ Chí Minh</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="v-pills-reviews" role="tabpanel"
                            aria-labelledby="v-pills-reviews-tab" tabindex="0">
                            <div class="review-box d-flex flex-wrap">
                                <div class="col-lg-6 d-flex flex-wrap gap-3">
                                    <div class="col-md-2">
                                        <div class="image-holder">
                                            <img src="image/productdetails/khach.jpg" alt="review"
                                                class="img-fluid rounded-circle">
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="review-content">
                                            <div class="rating-container d-flex align-items-center">
                                                <span class="text-primary" style="font-size: 24px;">★★★★★</span>
                                                <!-- Ký tự sao -->
                                                <span class="rating-count">(5)</span>
                                            </div>
                                            <div class="review-header">
                                                <span class="author-name">Tan Trung</span>
                                                <span class="review-date">– 03/07/2023</span>
                                            </div>
                                            <p>Sản phấm chất lượng</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 d-flex flex-wrap gap-3">
                                    <div class="col-md-2">
                                        <div class="image-holder">
                                            <img src="image/productdetails/khach2.jpg" alt="review"
                                                class="img-fluid rounded-circle">
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="review-content">
                                            <div class="rating-container d-flex align-items-center">
                                                <span class="text-primary" style="font-size: 24px;">★★★★☆</span>
                                                <span class="rating-count">(4)</span>
                                            </div>
                                            <div class="review-header">
                                                <span class="author-name">Trung Phan</span>
                                                <span class="review-date">– 03/06/2022</span>
                                            </div>
                                            <p>Sản phẩm rất tốt</p>
                                        </div>
                                    </div>
                                </div>
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