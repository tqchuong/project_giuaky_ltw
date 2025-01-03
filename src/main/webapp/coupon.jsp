<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách mã giảm giá</title>
  
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/coupon.css">
    <link rel="stylesheet" href="font/font-awesome-pro-v6-6.2.0/css/all.min.css"/>
   
   
   


</head>
<body>
<!-- Header -->
<header class="header">
    <div class="logo">
        <a href="home.jsp" aria-label="Homepage">
            <img src="image/shoppingcart/6.png" alt="Store Logo"/>
        </a>
    </div>
    <div class="basket">
        <a href="shoppingcart.jsp" aria-label="Cart">
            <img src="image/shoppingcart/shoppingcart.png" alt="Basket Icon"/>
        </a>
    </div>
</header>
<!-- Banner Slider -->
<!-- Banner -->
<main class="main-wrapper">
    <div class="container" id="trangchu">
        <div class="home-slider">
            <div class="slider-images">
                <!-- Các hình ảnh banner -->
                <img alt="Banner 1" src="image/banner/Banner3.PNG" class="slider-image">
                <img alt="Banner 2" src="image/banner/Banner4.png" class="slider-image"
                     style="width: 40%; height: 100%;">
                <img alt="Banner 3" src="image/banner/Banner5.png" class="slider-image">
            </div>

            <!-- Điều khiển chuyển đổi banner -->
            <div class="slider-controls">
                <button class="prev">&lt;</button>
                <button class="next">&gt;</button>
            </div>
        </div>
    </div>
</main>
<div class="voucher-banner">
    <h2>VOUCHER HÔM NAY</h2>
</div>
<div class="voucher-container">
    <!-- Voucher mẫu 1 -->
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>20% Tổng giá trị đơn hàng <br> Đơn hàng có giá trị trên 200k</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">20TONGDON</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Valid Till: 20 Dec, 2021</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>

    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>15% Giảm giá cho đơn hàng đầu tiên <br> Áp dụng cho tất cả sản phẩm</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">DONDAU15</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 31/12/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>Giảm ngay 10% cho đơn hàng từ 500k</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">GIAM10K</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 15/12/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>Ưu đãi 20% khi mua sản phẩm mới</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">MOI20</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 30/11/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>Miễn phí vận chuyển cho đơn hàng trên 300k</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">FREESHIP300</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 20/12/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>Mua 2 tặng 1 áp dụng cho sản phẩm đồng giá</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">MUA2TANG1</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 25/12/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>Giảm giá 5% cho tất cả sản phẩm</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">GIAM5</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 10/12/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>Tặng kèm quà tặng bí mật cho đơn hàng trên 1 triệu</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">QUATANG</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 10/12/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>Freeship cho đơn hàng trên 50k</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">FREESHIP50</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 10/12/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
    <div class="coupon-card">
        <img src="image/shoppingcart/6.png" class="logo-voucher" alt="Voucher Logo"/>
        <h3>Giảm giá 30k</h3>
        <div class="COUPON-ROW">
            <span id="cpnCode">GIAM30</span>
            <span id="cpnBtn">LƯU MÃ</span>
        </div>
        <p>Hạn sử dụng: 10/12/2024</p>
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>

</div>
<footer class="footer">
    <div class="widget-area">
        <div class="container">
            <div class="widget-row">
                <div class="widget-row-col">
                    <div class="logo">
                        <a href="">
                            <img alt="FoodMart Logo" src="image/shoppingcart/6.png"
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


<script src="js/coupon.js"></script>
</body>
</html>
