//package fit.hcmuaf.edu.vn.foodmart.controller;
//import fit.hcmuaf.edu.vn.foodmart.model.Products;
//import jakarta.servlet.*;
//import jakarta.servlet.http.*;
//import jakarta.servlet.annotation.*;
//import fit.hcmuaf.edu.vn.foodmart.dao.ProductDAO;
//import java.io.IOException;
//import java.util.List;
//@WebServlet(name = "HomeServlet", value = "/home")
//public class HomeServlet extends HttpServlet {
//
//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        ProductDAO productDAO = new ProductDAO();
//
//        // Lấy danh sách các sản phẩm mới nhất (ví dụ lấy 6 sản phẩm mới nhất)
//        List<Products> latestProducts = productDAO.getLatestProducts(6); // Giới hạn số lượng sản phẩm hiển thị
//
//        // Gửi danh sách sản phẩm tới JSP
//        request.setAttribute("latestProducts", latestProducts);
//
//        // Forward tới trang home.jsp
//        RequestDispatcher dispatcher = request.getRequestDispatcher("home.jsp");
//        dispatcher.forward(request, response);
//    }
//
//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//    }
//}
