<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.Users" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.Order" %>
<%@ page import="java.util.List" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.dao.OrderDAO" %>
<%@ page import="fit.hcmuaf.edu.vn.foodmart.model.OrderDetail" %>
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
  <%
    // Lấy đối tượng "auth" (User) từ session
    Users auth = (Users) session.getAttribute("auth");

    List<Order> orders = null;
    if (auth != null) {
      int userId = auth.getId();  // Lấy userId từ đối tượng User
      OrderDAO orderDAO = new OrderDAO();
      orders = orderDAO.getOrdersByUserIdWithDetails(userId);
    }
  %>
  <div class="container" id="order-history" >
    <div class="main-account">
      <div class="main-account-header">
        <h3>Quản lý đơn hàng của bạn</h3>
        <p>Xem chi tiết, trạng thái của những đơn hàng đã đặt.</p>
      </div>
      <div class="main-account-body">
        <div class="order-history-section">
          <%
            // Kiểm tra nếu có đơn hàng
            if (orders.isEmpty()) {
          %>
          <p>Không có đơn hàng nào.</p>
          <%
          } else {
            // Duyệt qua từng đơn hàng
            for (Order order : orders) {
              List<OrderDetail> orderDetails = order.getOrderDetails(); // Lấy danh sách chi tiết sản phẩm trong đơn hàng
              double totalAmount = 0; // Biến tính tổng tiền cho từng đơn hàng

              // Tính tổng tiền của các sản phẩm trong đơn hàng
              for (OrderDetail detail : orderDetails) {
                totalAmount += detail.getTotalAmount();
              }
          %>
          <!-- Hiển thị thông tin của đơn hàng -->
          <div class="order-history-group">
            <!-- Hiển thị các sản phẩm trong đơn hàng -->
            <div class="order-history">
              <% for (OrderDetail detail : orderDetails) { %>
              <div class="order-history-left">
                <img src="<%= detail.getImg() %>" alt="Product Image">
                <div class="order-history-info">
                  <h4><%= detail.getProductName() %></h4>
                  <p class="order-history-note"><i class="fa-light fa-pen"></i>
                    <%= (order.getOrderNote() != null && !order.getOrderNote().isEmpty()) ? order.getOrderNote() : "Không có ghi chú" %>
                  </p>
                  <p class="order-history-quantity">x<%= detail.getQuantity() %></p>
                </div>
              </div>
              <div class="order-history-right">
                <div class="order-history-price">
                  <span class="order-history-current-price"><%= detail.getTotalAmount() %>&nbsp;₫</span>
                </div>
              </div>
              <% } %>

              <!-- Hiển thị tổng tiền cho đơn hàng -->
              <div class="order-history-control">
                <div class="order-history-status">
                                <span class="order-history-status-sp <%= order.getOrderStatus().equals("Đã xử lý") ? "complete" : "no-complete" %>">
                                    <%= order.getOrderStatus() %>
                                </span>
                  <button id="order-history-detail"><i class="fa-regular fa-eye"></i> Xem chi tiết</button>
                </div>
                <div class="order-history-total">
                  <span class="order-history-total-desc">Tổng tiền: </span>
                  <span class="order-history-toltal-price"><%= totalAmount %>&nbsp;₫</span>
                </div>
              </div>
            </div>
          </div>
          <%
              }
            }
            }
          %>



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

</main>

<jsp:include page="footer.jsp"/>

</body>

</html>