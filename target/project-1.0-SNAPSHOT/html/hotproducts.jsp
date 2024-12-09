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
          <a href="">
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
      <li class="menu-list-item"><a class="hotpro-link" href="hotproducts.html">
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
      <h2 class="home-title">Khám phá sản phẩm hot của chúng tôi</h2>
    </div>

    <div class="home-products" id="home-products">

      <div class="col-product" data-id="6" data-loai="Khoai">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-pro/khoai%20lang%20tim.jpg" alt="Khoai lang tím">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Khoai lang tím</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">15.000&nbsp;₫</span>&nbsp;
                <span class="current-price">13.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="7" data-loai="Gạo">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-pro/gao%20lut%20dien%20bien.jpg" alt="Gạo lứt đen">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Gạo lứt đen</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">32.000&nbsp;₫</span>&nbsp;
                <span class="current-price">27.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="11" data-loai="Gạo">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-pro/gao-thien-long.jpg" alt="Gạo thiên long">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Gạo thiên long</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">27.000&nbsp;₫</span>&nbsp;
                <span class="current-price">23.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="19" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-luongkho/LUONG-KHO-GOLFMAN-2-300x300.jpg" alt="Lương khô Golf Man">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Lương khô Golf Man</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">34.000&nbsp;₫</span>&nbsp;
                <span class="current-price">29.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="20" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-luongkho/LUONG-KHO-HAPPY-6-300x300.jpg" alt="Lương khô Happy">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Lương khô Happy</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">23.000&nbsp;₫</span>&nbsp;
                <span class="current-price">20.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="21" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-luongkho/LUONG-KHO-HUONG-QUE-6-300x300.jpg" alt="Lương khô Hương Quê">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Lương khô Hương Quê</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">54.000&nbsp;₫</span>&nbsp;
                <span class="current-price">46.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-product" data-id="30" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-luongkho/vn-11134207-7r98o-lkkkcys97f6807-300x300.jpg" alt="Lương khô Ruốc Thịt">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Lương khô Ruốc Thịt</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">23.000&nbsp;₫</span>&nbsp;
                <span class="current-price">20.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="31" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-luongkho/vn-11134207-7r98o-ll2yx5oqggy31a-300x300.jpg" alt="Lương khô Sochola Chip">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Lương khô Sochola Chip</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">50.000&nbsp;₫</span>&nbsp;
                <span class="current-price">43.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="32" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-luongkho/vn-11134207-7r98o-llf5oh10d2uu86-300x300.jpg" alt="Lương khô Mix vị">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Lương khô Mix vị</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">23.000&nbsp;₫</span>&nbsp;
                <span class="current-price">20.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="33" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-luongkho/vn-11134207-7r98o-lmrsss8ocp9bb1-300x300.jpg" alt="Lương khô Ăn Kiêng Gạo Lứt">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Lương khô Ăn Kiêng Gạo Lứt</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">24.000&nbsp;₫</span>&nbsp;
                <span class="current-price">20.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>


      <div class="col-product" data-id="59" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-dokho/mien_dong_symply_food_chay_tot_market_d77a32bfcd604c39826413bac3f60794_large.jpg" alt="Miến dong">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Miến dong</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="60" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/cereal/bot-ngu-coc-dinh-duong-damtuh-han-quoc-50-goi-5(1).jpg" alt="Bột ngũ cốc dinh dưỡng">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Bột ngũ cốc dinh dưỡng</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="61" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/cereal/Bot-ngu-coc-minmin-29-hat-8.jpg" alt="Bột ngũ cốc minmin">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Bột ngũ cốc minmin</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="62" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/cereal/ngu-coc-abalanca.jpg" alt="Ngũ cốc abalanca">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Ngũ cốc abalanca</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="63" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/cereal/ngu-coc-an-chay.jpg" alt="Ngũ cốc ăn chay">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Ngũ cốc ăn chay</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="64" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/cereal/ngu-coc-an-chay2.jpg" alt="Ngũ cốc ăn chay">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Ngũ cốc ăn chay</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="65" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/cereal/Ngu-coc-an-kieng-EURO-DIET-CEREAL-20-goi-600x600.jpg" alt="Ngũ cốc ăn kiêng">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Ngũ cốc ăn kiêng</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="66" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/cereal/ngu-coc-calbe.jpg" alt="Ngũ cốc Calbe">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Ngũ cốc Calbe</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="67" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/cereal/ngu-coc-cho-be-nissin-cisco-vi-bap-truyen-thong-180g.jpg" alt="Ngũ cốc cho bé">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Ngũ cốc cho bé</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">19.500&nbsp;₫</span>&nbsp;
                <span class="current-price">17.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-product" data-id="75" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/dong-goi/chao-tuoi-luon-dau-xanh-cay-thi-goi-260g-202401021618587467.jpg" alt="Cháo tươi lươn đậu xanh">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Cháo tươi lươn đậu xanh</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">17.500&nbsp;₫</span>&nbsp;
                <span class="current-price">15.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="76" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/dong-goi/chao-tuoi-thit-bo-cay-thi-goi-260g-202309032058365692.jpg" alt="Cháo tươi thịt bò cà rốt">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Cháo tươi thịt bò cà rốt</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">16.500&nbsp;₫</span>&nbsp;
                <span class="current-price">14.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-product" data-id="85" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/dong-goi/mi-gau-do-tom-va-ga-goi-63g-202407061656540859.jpg" alt="Mì gấu đỏ tôm và gà">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Mì gấu đỏ tôm và gà</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">18.500&nbsp;₫</span>&nbsp;
                <span class="current-price">16.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="86" data-loai="Khác">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/dong-goi/mi-hao-hao-chua-cay.jpg" alt="Mì hảo hảo chua cay">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">Mì hảo hảo chua cay</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">14.500&nbsp;₫</span>&nbsp;
                <span class="current-price">12.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>


      <div class="col-product" data-id="135" data-loai="Khoai">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-khoai1/KHOAI TÂY CẮT THẲNG FARM FRITES FINEST 7MM.jpg" alt="KHOAI TÂY CẮT THẲNG FARM 7mm ">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">KHOAI TÂY CẮT THẲNG FARM 7mm </a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">73.000&nbsp;₫</span>&nbsp;
                <span class="current-price">62.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="136" data-loai="Khoai">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-khoai1/KHOAI TÂY CẮT THẲNG FARM FRITES FINEST 10MM.jpg" alt="KHOAI TÂY CẮT THẲNG FARM 10mm ">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">KHOAI TÂY CẮT THẲNG FARM 10mm </a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">85.000&nbsp;₫</span>&nbsp;
                <span class="current-price">72.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="137" data-loai="Khoai">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-khoai1/KHOAI TÂY CẮT THẲNG POMMES FRITES JULIENNE 14 - 7MM.jpg" alt="KHOAI TÂY CẮT THẲNG POMMES ">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">KHOAI TÂY CẮT THẲNG POMMES </a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">48.000&nbsp;₫</span>&nbsp;
                <span class="current-price">41.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="138" data-loai="Khoai">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-khoai1/KHOAI TÂY CẮT THẲNG POMMES FRITES  38 - 9.5MM.jpg" alt="KHOAI TÂY CẮT THẲNG POMMES 9.5mm ">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">KHOAI TÂY CẮT THẲNG POMMES 9.5mm </a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">29.000&nbsp;₫</span>&nbsp;
                <span class="current-price">25.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-product" data-id="139" data-loai="Khoai">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-khoai1/KHOAI TÂY CẮT THẲNG SIÊU GIÒN AVIKO SUPERCRUNCH THICK CUT 18MM.jpg" alt="KHOAI TÂY CẮT THẲNG SIÊU GIÒN AVIKO ">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">KHOAI TÂY CẮT THẲNG SIÊU GIÒN AVIKO </a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">56.000&nbsp;₫</span>&nbsp;
                <span class="current-price">48.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-product" data-id="145" data-loai="Khoai">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-khoai1/KHOAI TÂY CẮT THẲNG 11MM SIÊU DÀI AVIKO-11 AVIKO SUPER LONG AAA-2,5KG.jpg" alt="KHOAI TÂY CẮT THẲNG 11MM SIÊU DÀI AVIKO ">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">KHOAI TÂY CẮT THẲNG 11MM SIÊU DÀI AVIKO </a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">45.000&nbsp;₫</span>&nbsp;
                <span class="current-price">38.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-product" data-id="150" data-loai="Khoai">
        <article class="card-product">
          <div class="card-header">
            <a href="#" class="card-image-link">
              <img class="card-image" src="../image/img-khoai1/KHOAI TÂY GRATIN TOMATO &amp; MOZZARELA.jpg" alt="KHOAI TÂY GRATIN TOMATO ">
            </a>
          </div>
          <div class="food-info">
            <div class="card-content">
              <div class="card-title">
                <a href="#" class="card-title-link">KHOAI TÂY GRATIN TOMATO </a>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-price">
                <span class="current-price" style="text-decoration: line-through; color: #999;">48.000&nbsp;₫</span>&nbsp;
                <span class="current-price">41.000&nbsp;₫</span>
              </div>
              <div class="product-buy">
                <button class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
              </div>
            </div>
          </div>
        </article>
      </div></div>

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