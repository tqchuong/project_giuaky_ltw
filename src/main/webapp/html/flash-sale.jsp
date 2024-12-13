<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>FoodMart Store</title>
    <link href="../css/products.css" rel="stylesheet">
    <link rel="stylesheet" href="../font/font-awesome-pro-v6-6.2.0/css/all.min.css" />
    <link rel="stylesheet" href="../css/flash-sale.css">
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
                            <li><a href="login.jsp" id="login"><i
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
                hot</a>
            </li>

            <li class="menu-list-item"><a class="flashsale-link" href="flash-sale.html">
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

<main>

    <!-- Flash Sale Section -->
    <div class="flash-sale-container">
        <!-- Countdown Timer -->
        <div class="countdown-timer">
            <h1><i class="lightning-icon"></i> Flash Sale <i class="lightning-icon"></i></h1>
            <p id="timer-message">Đang cập nhật...</p>
            <div id="timer">00:00:00</div>
        </div>

        <!-- Banner -->
        <div class="banner">
            <img src="../image/banner/banner7.png" alt="Flash Sale Banner">
        </div>

        <!-- Time Slots -->
        <div class="flash-sale-timer">
            <div class="time-slots">
                <button class="slot-button" data-slot="slot9">
                    9:00<br><span class="slot-description">Đã kết thúc</span>
                </button>
                <button class="slot-button" data-slot="slot12">
                    12:00<br><span class="slot-description">Đang diễn ra</span>
                </button>
                <button class="slot-button" data-slot="slot16">
                    16:00<br><span class="slot-description">Sắp diễn ra</span>
                </button>
                <button class="slot-button" data-slot="slot23">
                    23:00<br><span class="slot-description">Sắp diễn ra</span>
                </button>
            </div>
        </div>

        <!-- Category Filter -->
        <div class="categories">
            <button class="category-button" data-loai="all">Tất cả</button>
            <button class="category-button" data-loai="Gạo">Gạo</button>
            <button class="category-button" data-loai="Bắp">Bắp</button>
            <button class="category-button" data-loai="Khoai">Khoai</button>
            <button class="category-button" data-loai="Khác">Khác</button>
        </div>

        <!-- Product List -->
        <div class="product-list">
            <!-- Product for slot 9 -->
            <div class="col-product" data-id="80" data-loai="Khác" data-slot="slot9">
                <article class="card-product">
                    <div class="card-header">
                        <a href="#" class="card-image-link">
                            <img class="card-image" src="../image/dong-goi/mi-gau-do-tom-va-ga-goi-63g-202407061656540859.jpg" alt="Mì gấu đỏ tôm và gà">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a href="#" class="card-title-link">Mì gấu đỏ tôm và gà 9h</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">18.500&nbsp;₫</span>
                                <span class="discount-price">16.000&nbsp;₫</span>
                                <span class="discount-message">-15%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-product" data-id="60" data-loai="Khác" data-slot="slot9" data-href="#id1">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/bot-ngu-coc-dinh-duong-damtuh-han-quoc-50-goi-5(1).jpg" alt="Bột ngũ cốc dinh dưỡng">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Bột ngũ cốc dinh dưỡng</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">25.000&nbsp;₫</span>
                                <span class="discount-price">18.000&nbsp;₫</span>
                                <span class="discount-message">-28%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="61" data-loai="Khác" data-slot="slot9" data-href="#id2">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/Bot-ngu-coc-minmin-29-hat-8.jpg" alt="Bột ngũ cốc minmin">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Bột ngũ cốc minmin</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">30.000&nbsp;₫</span>
                                <span class="discount-price">25.000&nbsp;₫</span>
                                <span class="discount-message">-17%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="62" data-loai="Khác" data-slot="slot9" data-href="#id3">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/ngu-coc-abalanca.jpg" alt="Ngũ cốc abalanca">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc abalanca</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">19.000&nbsp;₫</span>
                                <span class="discount-price">15.000&nbsp;₫</span>
                                <span class="discount-message">-21%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="63" data-loai="Khác" data-slot="slot9" data-href="#id4">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/ngu-coc-an-chay.jpg" alt="Ngũ cốc ăn chay">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc ăn chay</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">20.000&nbsp;₫</span>
                                <span class="discount-price">16.000&nbsp;₫</span>
                                <span class="discount-message">-20%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>



            <!-- Product for slot 12 -->
            <div class="col-product" data-id="86" data-loai="Gạo" data-slot="slot12" data-href="productdetail.html">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/productdetails/gaost25.jpg" alt="Gạo ST25">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Gạo ST25</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">100.000&nbsp;₫</span>
                                <span class="discount-price">80.000&nbsp;₫</span>
                                <span class="discount-message">-20%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <!-- Product Bắp 1 -->
            <div class="col-product" data-id="201" data-loai="Khoai" data-slot="slot12" data-href="productdetail.html">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/img-khoai1/ Khoai tây McCain Bít Tết 34 (~19mm) - McCain Steak Cut (Steak House) Fries 34 (~19mm) - 5kgbao.jpg" >
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Khoai tây McCain Bít Tết 34</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">50.000&nbsp;₫</span>
                                <span class="discount-price">40.000&nbsp;₫</span>
                                <span class="discount-message">-20%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Product Bắp 2 -->
            <div class="col-product" data-id="202" data-loai="Khoai" data-slot="slot12" data-href="productdetail.html">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/img-khoai1/ Khoai tây McCain Cắt múi tẩm tỏi  – McCain Country Potato Wedges -2.5kgbao .jpg" >
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Khoai tây McCain Cắt múi</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">45.000&nbsp;₫</span>
                                <span class="discount-price">36.000&nbsp;₫</span>
                                <span class="discount-message">-20%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <!-- Product Gạo 1 -->
            <div class="col-product" data-id="101" data-loai="Gạo" data-slot="slot12" data-href="productdetail.html">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/riceproducts/gao-dai-loan-300x300.jpg" alt="Gạo Tám Thơm">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Gạo Đài Loan</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">120.000&nbsp;₫</span>
                                <span class="discount-price">95.000&nbsp;₫</span>
                                <span class="discount-message">-21%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Product Gạo 2 -->
            <div class="col-product" data-id="102" data-loai="Gạo" data-slot="slot12" data-href="productdetail.html">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/riceproducts/gao japan4.jpg">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Gạo Japan</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">100.000&nbsp;₫</span>
                                <span class="discount-price">80.000&nbsp;₫</span>
                                <span class="discount-message">-20%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-product" data-id="60" data-loai="Khác" data-slot="slot12" data-href="#id1">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/bot-ngu-coc-dinh-duong-damtuh-han-quoc-50-goi-5(1).jpg" alt="Bột ngũ cốc dinh dưỡng">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Bột ngũ cốc dinh dưỡng</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">25.000&nbsp;₫</span>
                                <span class="discount-price">18.000&nbsp;₫</span>
                                <span class="discount-message">-28%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="61" data-loai="Khác" data-slot="slot12" data-href="#id2">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/Bot-ngu-coc-minmin-29-hat-8.jpg" alt="Bột ngũ cốc minmin">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Bột ngũ cốc minmin</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">30.000&nbsp;₫</span>
                                <span class="discount-price">25.000&nbsp;₫</span>
                                <span class="discount-message">-17%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="62" data-loai="Khác" data-slot="slot12" data-href="#id3">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/ngu-coc-abalanca.jpg" alt="Ngũ cốc abalanca">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc abalanca</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">19.000&nbsp;₫</span>
                                <span class="discount-price">15.000&nbsp;₫</span>
                                <span class="discount-message">-21%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="63" data-loai="Khác" data-slot="slot12" data-href="#id4">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/ngu-coc-an-chay.jpg" alt="Ngũ cốc ăn chay">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc ăn chay</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">20.000&nbsp;₫</span>
                                <span class="discount-price">16.000&nbsp;₫</span>
                                <span class="discount-message">-20%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="64" data-loai="Khác" data-slot="slot12" data-href="#id5">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/ngu-coc-an-chay2.jpg" alt="Ngũ cốc ăn chay">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc ăn chay</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">21.500&nbsp;₫</span>
                                <span class="discount-price">17.000&nbsp;₫</span>
                                <span class="discount-message">-21%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="65" data-loai="Khác" data-slot="slot12" data-href="#id6">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/Ngu-coc-an-kieng-EURO-DIET-CEREAL-20-goi-600x600.jpg" alt="Ngũ cốc ăn kiêng">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc ăn kiêng</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">22.000&nbsp;₫</span>
                                <span class="discount-price">18.000&nbsp;₫</span>
                                <span class="discount-message">-18%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="66" data-loai="Khác" data-slot="slot12" data-href="#id7">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/ngu-coc-calbe.jpg" alt="Ngũ cốc Calbe">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc Calbe</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">23.500&nbsp;₫</span>
                                <span class="discount-price">20.000&nbsp;₫</span>
                                <span class="discount-message">-15%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>



            <!-- Product for slot 16 -->
            <div class="col-product" data-id="85" data-loai="Bắp" data-slot="slot16">
                <article class="card-product">
                    <div class="card-header">
                        <a href="#" class="card-image-link">
                            <img class="card-image" src="../image/dong-goi/mi-gau-do-tom-va-ga-goi-63g-202407061656540859.jpg" alt="Mì gấu đỏ tôm và gà">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a href="#" class="card-title-link">Mì gấu đỏ tôm và  16h</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">100.000&nbsp;₫</span>
                                <span class="discount-price">80.000&nbsp;₫</span>
                                <span class="discount-message">-20%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>

                </article>

            </div>

            <!-- Product for slot 23 -->
            <div class="col-product" data-id="87" data-loai="Gạo" data-slot="slot23">
                <article class="card-product">
                    <div class="card-header">
                        <a href="#" class="card-image-link">
                            <img class="card-image" src="../image/dong-goi/mi-gau-do-tom-va-ga-goi-63g-202407061656540859.jpg" alt="Gạo ST25">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a href="#" class="card-title-link">Gạo ST25 23</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">50.000&nbsp;₫</span>
                                <span class="discount-price">45.000&nbsp;₫</span>
                                <span class="discount-message">-10%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-product" data-id="60" data-loai="Khác" data-slot="slot16" data-href="#id1">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/bot-ngu-coc-dinh-duong-damtuh-han-quoc-50-goi-5(1).jpg" alt="Bột ngũ cốc dinh dưỡng">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Bột ngũ cốc dinh dưỡng</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">25.000&nbsp;₫</span>
                                <span class="discount-price">18.000&nbsp;₫</span>
                                <span class="discount-message">-28%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="61" data-loai="Khác" data-slot="slot16" data-href="#id2">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/Bot-ngu-coc-minmin-29-hat-8.jpg" alt="Bột ngũ cốc minmin">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Bột ngũ cốc minmin</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">30.000&nbsp;₫</span>
                                <span class="discount-price">25.000&nbsp;₫</span>
                                <span class="discount-message">-17%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="62" data-loai="Khác" data-slot="slot16" data-href="#id3">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/ngu-coc-abalanca.jpg" alt="Ngũ cốc abalanca">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc abalanca</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">19.000&nbsp;₫</span>
                                <span class="discount-price">15.000&nbsp;₫</span>
                                <span class="discount-message">-21%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-product" data-id="63" data-loai="Khác" data-slot="slot16" data-href="#id4">
                <article class="card-product">
                    <div class="card-header">
                        <a class="card-image-link">
                            <img class="card-image" src="../image/cereal/ngu-coc-an-chay.jpg" alt="Ngũ cốc ăn chay">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a class="card-title-link">Ngũ cốc ăn chay</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="original-price">20.000&nbsp;₫</span>
                                <span class="discount-price">16.000&nbsp;₫</span>
                                <span class="discount-message">-20%</span>
                            </div>
                            <div class="product-buy">
                                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        </div>

    </div>


    <div class="page-nav" id="page-nav">
        <ul class="page-nav-list">
        </ul>
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
    <script src="../js/flash-sale.js"></script>
<!--<script src="../js/home.js"></script>-->




</body>

</html>