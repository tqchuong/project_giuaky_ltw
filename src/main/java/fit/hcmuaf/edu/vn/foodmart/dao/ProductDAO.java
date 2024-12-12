package fit.hcmuaf.edu.vn.foodmart.dao;


import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Products;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {
    // Lấy toàn bộ danh sách sản phẩm từ CSDL
    public List<Products> getAllProducts() {
        List<Products> productList = new ArrayList<>();
        String sql = "SELECT * FROM Products"; // Truy vấn toàn bộ bảng Products

        try (Connection connection = DBConnect.getConnection();
             PreparedStatement ps = connection.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

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
            System.out.println("Lỗi khi truy vấn dữ liệu: " + e.getMessage());
            e.printStackTrace();
        }
        return productList;
    }

    public static void main(String[] args) {
        ProductDAO dao = new ProductDAO();
        List<Products> products = dao.getAllProducts();

        // In danh sách sản phẩm
        for (Products product : products) {
            System.out.println(product);
        }
    }
}