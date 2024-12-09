package com.example.project.dao;

import com.example.project.database.DBConnect;
import com.example.project.model.Products;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {
    // Lấy toàn bộ danh sách sản phẩm từ CSDL
    public List<Products> getAllProducts() {
        List<Products> productList = new ArrayList<>();
        Connection connection = DBConnect.getConnection();

        String sql = "SELECT * FROM Products"; // Truy vấn toàn bộ bảng Products
        try {
            PreparedStatement ps = connection.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            // Lặp qua kết quả trả về từ CSDL và ánh xạ vào đối tượng Products
            while (rs.next()) {
                Products product = new Products(
                        rs.getInt("ProductID"),
                        rs.getString("ProductName"),
                        rs.getInt("CategoryID"),
                        rs.getDouble("Price"),
                        rs.getString("ImageURL")

                );
                productList.add(product); // Thêm vào danh sách
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return productList;
    }
      public static void main(String[] args) {
        ProductDAO dao = new ProductDAO();
        List<Products> products = dao.getAllProducts();


        for (Products product : products) {
            System.out.println(product);
        }
    }

}
