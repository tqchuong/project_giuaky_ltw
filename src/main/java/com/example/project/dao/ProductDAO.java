package com.example.project.dao;

import com.example.project.database.DBConnect;
import com.example.project.model.Category;
import com.example.project.model.Products;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {
    // Lấy toàn bộ danh sách sản phẩm cùng với thông tin danh mục
    public List<Products> getAllProducts() {
        List<Products> productList = new ArrayList<>();
        String sql = "SELECT p.ProductID, p.ProductName, p.CategoryID, p.Price, p.ImageURL, c.CategoryName " +
                "FROM Products p " +
                "INNER JOIN Categories c ON p.CategoryID = c.CategoryID";

        try (Connection connection = DBConnect.getConnection();
             PreparedStatement ps = connection.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            // Lặp qua kết quả trả về từ CSDL và ánh xạ vào đối tượng Products
            while (rs.next()) {
                // Tạo đối tượng Category
                Category category = new Category();
                category.setCategoryID(rs.getInt("CategoryID"));
                category.setCategoryName(rs.getString("CategoryName"));

                // Tạo đối tượng Product
                Products product = new Products(
                        rs.getInt("ProductID"),
                        rs.getString("ProductName"),
                        rs.getInt("CategoryID"),
                        rs.getDouble("Price"),
                        rs.getString("ImageURL"),
                        category  // Truyền đối tượng Category
                );

                productList.add(product); // Thêm vào danh sách
            }
        } catch (SQLException e) {
            System.out.println("Lỗi khi truy vấn dữ liệu: " + e.getMessage());
            e.printStackTrace();
        }
        return productList;
    }

    public static void main(String[] args) {
        ProductDAO dao = new ProductDAO();
        List<Products> products = dao.getAllProducts();

        // In danh sách sản phẩm kèm thông tin danh mục
        for (Products product : products) {
            System.out.println("Product: " + product.getProductName() +
                    ", Price: " + product.getPrice() +
                    ", Category: " + product.getCategory().getCategoryName());
        }
    }
}
