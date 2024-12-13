<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.Users" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "f" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% Users user = (Users) session.getAttribute("userlogin"); %>
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
            <img alt="FoodMart Logo" src="image/shoppingcart/6.png"
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
            <i class="fa-solid fa-user"></i>
            <div class="auth-container">
              <span class="text-dndk">Đăng nhập / Đăng ký</span>
              <span class="text-tk" id="user-fullname">Tài khoản <i
                      class="fa-sharp fa-solid fa-caret-down"></i></span>
            </div>

<%--            <li><a href="">Xin chào,--%>
<%--                    <% if(user != null ){--%>
<%--                      out.print(user.getName());  --%>
<%--                    }%>--%>
<%--                </a>--%>
<%--            </li>--%>
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

