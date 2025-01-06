
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="vi">

<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Thông tin tài khoản</title>
  <link href="css/products.css" rel="stylesheet">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="font/font-awesome-pro-v6-6.2.0/css/all.min.css" />
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

      <li class="menu-list-item"><a class="hotpro-link" href="flashsale.jsp">
        <i class="fa-solid fa-bolt fa-shake" style="color: #FFD700;"></i> Flashsale
      </a>
      </li>

    </ul>

  </div>
</nav>

<main class="main-wrapper">

  <div class="container" id="order-history" >
    <div class="main-account">
      <div class="main-account-header">
        <h3>Quản lý đơn hàng của bạn</h3>
        <p>Xem chi tiết, trạng thái của những đơn hàng đã đặt.</p>
      </div>
      <div class="main-account-body">
        <div class="order-history-section">
        </div>
      </div>
    </div>
  </div>

</main>

<jsp:include page="footer.jsp"/>

</body>

</html>