package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.Collections;
import java.util.List;

public class ProductDAO {

    private static Jdbi jdbi = DBConnect.getJdbi();  // Lấy jdbi từ DBConnect

    // Lấy toàn bộ danh sách sản phẩm từ CSDL, không phân biệt trạng thái sản phẩm
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

    public List<Products> getLatestProducts(int limit) {
        String sql = "SELECT p.Id AS ProductID, p.ProductName, p.CategoryID, p.Price, p.UploadDate, " +
                "p.ImageURL, p.ShortDescription, p.StockQuantity " +
                "FROM Products p " +
                "ORDER BY p.UploadDate DESC " + // Sắp xếp theo thời gian tải lên mới nhất
                "LIMIT :limit";  // Lấy số sản phẩm theo tham số limit

        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind("limit", limit)  // Gán giá trị cho tham số limit
                    .mapToBean(Products.class)  // Ánh xạ kết quả vào đối tượng Products
                    .list();  // Trả về danh sách sản phẩm mới nhất
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn dữ liệu: " + e.getMessage());
            e.printStackTrace();
            return Collections.emptyList();  // Trả về danh sách rỗng thay vì null
        }
    }

    // Test phương thức getLatestProducts()
    public static void main(String[] args) {
        ProductDAO dao = new ProductDAO();
        // Lấy danh sách các sản phẩm mới nhất (2 sản phẩm gần nhất)
        List<Products> latestProducts = dao.getLatestProducts(6);

        // In danh sách sản phẩm mới nhất
        if (latestProducts != null && !latestProducts.isEmpty()) {
            System.out.println("Danh sách sản phẩm mới nhất:");
            for (Products product : latestProducts) {
                System.out.println("Product: " + product.getProductName());
                System.out.println("Image URL: " + product.getImageURL());
            }

        } else {
            System.out.println("Không có sản phẩm mới hoặc có lỗi khi truy vấn.");
        }
    }
}
