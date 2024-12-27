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
                        <input class="form-search-input" placeholder="Tìm kiếm món ăn..." type="text">
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
                            <img id="avatarIcon" src="../image/productdetails/khach3.jpg" alt="Avatar" class="avatar-icon">
                            <div class="auth-container">

                                <span class="text-tk" id="user-fullname">TQC <i
                                        class="fa-sharp fa-solid fa-caret-down"></i></span>
                            </div>


                            <!-- Menu sẽ được cập nhật bằng JavaScript -->
                            <ul class="header-middle-right-menu" id="user-menu" style="display: none;"></ul>

                            <!-- Các mục đăng nhập và đăng ký sẽ ẩn đi nếu người dùng đã đăng nhập -->
                            <ul class="header-middle-right-menu" id="auth-options">
                                <li><a href="admin.jsp"><i class="fa-solid fa-gear"></i> Quản lý cửa hàng</a></li>
                                <li><a href="javascript:void(0);" onclick="showAccountInfo()"><i
                                            class="fa-solid fa-user"></i> Tài khoản của tôi</a></li>
                                <li><a href="javascript:void(0);" onclick="showOrderHistory()"><i
                                            class="fa-solid fa-bag-shopping"></i> Đơn hàng đã mua</a></li>
                                <li class="border"><a id="logout" href="login.jsp"><i
                                            class="fa-solid fa-right-from-bracket"></i> Thoát tài khoản</a></li>
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
                    <a class="menu-Category" href="products.jsp">
                        <i class="fa-solid fa-shop" style="padding-right: 5px;color: #B5292F;"></i>
                        Sản phẩm

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
        </div>
        <div class="container" id="account-user" style="display: none;">
            <div class="main-account">
                <div class="main-account-header">
                    <h3>Thông tin tài khoản của bạn</h3>
                    <p>Quản lý thông tin để bảo mật tài khoản</p>
                </div>

                <div class="main-account-body">
                    <!-- Cột trái: Thông tin -->
                    <div class="main-account-body-col">

                        <form action="" class="info-user">
                            <!-- Các trường thông tin -->
                            <!-- Ảnh đại diện -->
                            <div class="avatar-upload text-center mt-4">
                                <div class="avatar-preview mb-3">
                                    <div class="rounded-circle border border-2 mx-auto" style="width: 150px; height: 150px; overflow: hidden;">
                                        <img id="avatarPreview" src="placeholder-avatar.png" alt="Ảnh đại diện" class="img-fluid">
                                    </div>
                                </div>
                                <label for="avatarInput" class="btn btn-outline-danger btn-sm mb-2">Chọn Ảnh</label>
                                <input type="file" id="avatarInput" class="d-none" accept="image/*" onchange="previewAvatar(event)">
                                <label for="save-info-user" class="form-label">Dung lượng tối đa 1 MB<br>Định dạng: JPEG, PNG</label>

                            </div>


                            <div class="form-group">
                                <label for="infoname" class="form-label">Họ và tên</label>
                                <input class="form-control" type="text" name="infoname" id="infoname"
                                       placeholder="Thêm họ và tên">
                            </div>
                            <div class="form-group">
                                <label for="infophone" class="form-label">Số điện thoại</label>
                                <input class="form-control" type="text" name="infophone" id="infophone" disabled="true"
                                       placeholder="Thêm số điện thoại">
                            </div>
                            <div class="form-group">
                                <label for="infoemail" class="form-label">Email</label>
                                <input class="form-control" type="email" name="infoemail" id="infoemail"
                                       placeholder="Thêm địa chỉ email của bạn">
                            </div>
                            <div class="form-group">
                                <label for="infoaddress" class="form-label">Địa chỉ</label>
                                <input class="form-control" type="text" name="infoaddress" id="infoaddress"
                                       placeholder="Thêm địa chỉ giao hàng của bạn">
                            </div>
                        </form>
                    </div>

                    <!-- Cột phải: Mật khẩu và Ảnh đại diện -->
                    <div class="main-account-body-col">
                        <!-- Mật khẩu -->
                        <form action="" class="change-password">
                            <div class="form-group">
                                <label for="" class="form-label">Mật khẩu hiện tại</label>
                                <input class="form-control" type="password" name="" id="password-cur-info"
                                       placeholder="Nhập mật khẩu hiện tại">
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Mật khẩu mới</label>
                                <input class="form-control" type="password" name="" id="password-after-info"
                                       placeholder="Nhập mật khẩu mới">
                            </div>
                            <div class="form-group">
                                <label for="" class="form-label">Xác nhận mật khẩu mới</label>
                                <input class="form-control" type="password" name="" id="password-comfirm-info"
                                       placeholder="Nhập lại mật khẩu mới">
                            </div>
                        </form>
                    </div>
                </div>


                <div class="main-account-body-row">
                    <div>
                        <button id="save-info-user" onclick="changeInformation()"><i
                                class="fa-regular fa-floppy-disk"></i> Lưu thay đổi</button>
                    </div>
                    <div>
                        <button id="save-password" onclick="changePassword()"><i class="fa-regular fa-key"></i> Đổi mật khẩu</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container" id="order-history" style="display: none;">
            <div class="main-account">
                <div class="main-account-header">
                    <h3>Quản lý đơn hàng của bạn</h3>
                    <p>Xem chi tiết, trạng thái của những đơn hàng đã đặt.</p>
                </div>
                <div class="main-account-body">
                    <div class="order-history-section">
                        <div class="order-history-group">
                            <div class="order-history">
                                <div class="order-history-left">
                                    <img src="../image/img-pro/gaost25.jpg" alt="">
                                    <div class="order-history-info">
                                        <h4>Gạo Thơm Hữu Cơ ST25</h4>
                                        <p class="order-history-note"><i class="fa-light fa-pen"></i> Không có ghi chú
                                        </p>
                                        <p class="order-history-quantity">x1</p>
                                    </div>
                                </div>
                                <div class="order-history-right">
                                    <div class="order-history-price">
                                        <span class="order-history-current-price">135.000&nbsp;₫</span>
                                    </div>
                                </div>
                            </div>
                            <div class="order-history-control">
                                <div class="order-history-status">
                                    <span class="order-history-status-sp no-complete">Đang xử lý</span>
                                    <span class="order-history-status-sp no-complete">
                                        <i class="fas fa-trash"></i> Hủy đơn hàng
                                      </span>
                                      
                                    <button id="order-history-detail"><i class="fa-regular fa-eye"></i> Xem chi
                                        tiết</button>

                                </div>
                                <div class="order-history-total">
                                    <span class="order-history-total-desc">Tổng tiền: </span>
                                    <span class="order-history-toltal-price">135.000&nbsp;₫</span>
                                </div>
                            </div>
                        </div>


                        <div class="order-history-group">
                            <div class="order-history">
                                <div class="order-history-left">
                                    <img src="../image/img-pro/yen%20mach.jpg" alt="">
                                    <div class="order-history-info">
                                        <h4>Yến Mạch</h4>
                                        <p class="order-history-note"><i class="fa-light fa-pen"></i> Không có ghi chú
                                        </p>
                                        <p class="order-history-quantity">x1</p>
                                    </div>
                                </div>
                                <div class="order-history-right">
                                    <div class="order-history-price">
                                        <span class="order-history-current-price">60.000&nbsp;₫</span>
                                    </div>
                                </div>
                            </div>
                            <div class="order-history-control">
                                <div class="order-history-status">
                                    <span class="order-history-status-sp complete">Đã xử lý</span>
                                    <button id="order-history-detail"><i class="fa-regular fa-eye"></i> Xem chi
                                        tiết</button>
                                </div>
                                <div class="order-history-total">
                                    <span class="order-history-total-desc">Tổng tiền: </span>
                                    <span class="order-history-toltal-price">60.000&nbsp;₫</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="container2">
            <h3>Về chúng tôi</h3>
            <div class="content">
                <p>Chào mừng bạn đến với <strong>FoodMart</strong> – nơi cung cấp những sản phẩm lương thực chất lượng
                    cao, giàu dinh dưỡng và an toàn cho mọi gia đình!
                    Với nguồn gốc rõ ràng và quy trình kiểm soát nghiêm ngặt, chúng tôi cam kết mang đến sự an tâm cho
                    từng bữa ăn.</p>

                <h4>Sứ mệnh của chúng tôi</h4>
                <p>FoodMart hướng tới việc cung cấp các loại lương thực đảm bảo tiêu chí sạch, bền vững và tốt cho sức
                    khỏe, góp phần xây dựng một cộng đồng sống xanh và lành mạnh.</p>

                <h4>Tại sao nên chọn FoodMart?</h4>
                <ul>
                    <li><strong>Chất lượng hàng đầu:</strong> Các sản phẩm lương thực được chọn lọc kỹ càng từ những
                        vùng trồng trọt đạt chuẩn.</li>
                    <li><strong>An toàn thực phẩm:</strong> Đảm bảo không sử dụng chất bảo quản hay hóa chất độc hại.
                    </li>
                    <li><strong>Giàu dinh dưỡng:</strong> Sản phẩm giữ nguyên giá trị dinh dưỡng tự nhiên, phù hợp với
                        mọi đối tượng.</li>
                    <li><strong>Dịch vụ tin cậy:</strong> Đội ngũ hỗ trợ tận tâm và giao hàng nhanh chóng.</li>
                </ul>

                <h4>Hành trình của chúng tôi</h4>
                <p>Khởi đầu với mong muốn nâng cao chất lượng lương thực trong từng bữa ăn, FoodMart đã không ngừng phát
                    triển để trở thành đối tác tin cậy của hàng ngàn gia đình và tổ chức trên khắp cả nước.</p>
            </div>


        </div>


        <div class="carousel-container">
            <h2>SẢN PHẨM MỚI</h2>
            <div class="carousel">
                <div class="carousel-item">
                    <img src="../image/img-khoai1/ĐẬU NÀNH LÔNG ĐÔNG LẠNH.jpg">
                    <p>Đậu nành lông đông lạnh</p>
                    <span style="color: #B5292F;font-weight: bold;">45.000&nbsp;₫</span>
                </div>
                <div class="carousel-item">
                    <img src="../image/riceproducts/gao-ST21_AAN-300x300.jpg">
                    <p>Gạo ST21</p>
                    <span style="color: #B5292F;font-weight: bold;">29.000&nbsp;₫</span>
                </div>
                <div class="carousel-item">
                    <img src="../image/riceproducts/yen mach.jpg">
                    <p>Yến mạch Oatmeal</p>
                    <span style="color: #B5292F;font-weight: bold;">90.000&nbsp;₫</span>
                </div>
                <div class="carousel-item">
                    <img src="../image/dong-goi/mi-3-mien-ga-soi-pho-goi-65g-clone-202406131512410241.jpg">
                    <p>Mì 3 miền gà sợi phở</p>
                    <span style="color: #B5292F;font-weight: bold;">5.000&nbsp;₫</span>
                </div>
                <div class="carousel-item">
                    <img src="../image/dong-goi/mi-hao-hao-chua-cay.jpg">
                    <p>Mì hảo hảo chua cay</p>
                    <span style="color: #B5292F;font-weight: bold;">6.000&nbsp;₫</span>
                </div>
                <div class="carousel-item">
                    <img src="../image/cereal/ngu-coc-cho-be-nissin-cisco-vi-bap-truyen-thong-180g.jpg">
                    <p>Ngũ cốc cho bé</p>
                    <span style="color: #B5292F;font-weight: bold;">60.000&nbsp;₫</span>
                </div>
            </div>
        </div>

        <div class="new-container">
            <div class="news-section">

                <div class="date">
                    <span>09</span>
                    <span>Th11</span>
                </div>
                <h2>TIN MỚI NHẤT</h2>
                <div class="main-news">

                    <div class="news-content">
                        <img src="../image/new/Ngày-Pháp-luật-Việt-Nam.jpg" alt="Tin tức">
                        <h3>
                            FoodMart nhiệt liệt hưởng ứng Ngày Pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam
                        </h3>
                        <p>1. Mục đích của Ngày Pháp luật Việt Nam 09/11 hàng năm nhằm tôn vinh...</p>
                    </div>
                </div>
                <ul class="sub-news">
                    <li>
                        <a href="#">Giá lúa gạo hôm nay 19/11/2024: Giá lúa tăng 100 – 200 đồng/kg; giá gạo giảm 50-100
                            đồng/kg</a>
                        <span class="label">MỚI</span>
                    </li>
                    <li>
                        <a href="#">Nguồn cung gạo căng thẳng do ảnh hưởng thời tiết...</a>
                        <span class="label">MỚI</span>
                    </li>
                    <li>
                        <a href="#">Xuất khẩu ngũ cốc Việt Nam đạt kỷ lục mới</a>
                        <span class="label">MỚI</span>
                    </li>

                </ul>
            </div>
            <div class="notification-section">
                <div class="date-time">
                    <p>Thứ Ba, ngày 19 tháng 11 năm 2024</p>
                </div>
                <div class="notifications">
                    <h3>THÔNG BÁO</h3>
                    <img src="../image/new/thông-báo-giả-mạo.jpg" alt="Thông báo">
                    <ul>
                        <li><a href="#">Thông báo: Giả mạo website FoodMart</a></li>
                        <li><a href="#">Thông báo: về việc lựa chọn Tổ chức đấu giá tài sản</a></li>
                        <li><a href="#">QĐ phê duyệt kế hoạch lựa chọn nhà thầu tư vấn dự án...</a></li>
                    </ul>
                </div>
            </div>
        </div>
            </div>
            </div>
    </main>

    <section class="google-map">
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="100%" height="500" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2257143843904!2d106.78732442480627!3d10.870429689284114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1698550669366!5m2!1svi!2s" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://getasearch.com/fmovies"></a>
                <br>
                <style>
                    .mapouter {
                        position: relative;
                        text-align: right;
                        height: 500px;
                        width: 100%;
                    }
                </style>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                <style>
                    .gmap_canvas {
                        overflow: hidden;
                        background: none !important;
                        height: 500px;
                        width: 100%;
                    }
                </style>
            </div>
        </div>
    </section>

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
                        <p><b>Fax:</b> 1234 567 890</p>
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