package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class ProductDAO {

    private static Jdbi jdbi = DBConnect.getJdbi();  // Lấy jdbi từ DBConnect

    // Lấy toàn bộ danh sách sản phẩm từ CSDL
    public List<Products> getAllProducts() {
        String sql = "SELECT * FROM products";  // Truy vấn toàn bộ bảng Products

        try (Handle handle = jdbi.open()) {  // Mở Handle để truy vấn
            return handle.select(sql)
                    .mapToBean(Products.class)  // Ánh xạ kết quả vào đối tượng Products
                    .list();  // Trả về danh sách sản phẩm
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn dữ liệu: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    // Test phương thức getAllProducts()
    public static void main(String[] args) {
        ProductDAO dao = new ProductDAO();
        List<Products> products = dao.getAllProducts();

        // In danh sách sản phẩm
        if (products != null) {
            for (Products product : products) {
                System.out.println(product);  // In ra thông tin của sản phẩm
            }
        } else {
            System.out.println("Không có sản phẩm hoặc có lỗi khi truy vấn.");
        }
    }
}
