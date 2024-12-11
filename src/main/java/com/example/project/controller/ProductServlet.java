package com.example.project.controller;

import com.example.project.dao.ProductDAO;
import com.example.project.model.Products;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
@WebServlet(name ="products",value ="/products")
public class ProductServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ProductDAO productDAO = new ProductDAO();
        List<Products> products = productDAO.getAllProducts();

        // Đặt danh sách sản phẩm vào request scope
        request.setAttribute("products", products);

        // Chuyển tiếp đến trang JSP
        request.getRequestDispatcher("products.jsp").forward(request, response);
    }
}
