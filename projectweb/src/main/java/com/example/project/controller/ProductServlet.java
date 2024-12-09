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


@WebServlet("/products")
public class ProductServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Lấy danh sách sản phẩm từ ProductDAO
        ProductDAO productDAO = new ProductDAO();
        List<Products> productList = productDAO.getAllProducts();


        // Gán danh sách sản phẩm vào request
        request.setAttribute("products", productList);

        // Chuyển tiếp đến JSP
        RequestDispatcher dispatcher = request.getRequestDispatcher("/html/products.jsp");


        dispatcher.forward(request, response);
    }
}
