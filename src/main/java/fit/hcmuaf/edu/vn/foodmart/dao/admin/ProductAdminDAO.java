package fit.hcmuaf.edu.vn.foodmart.dao.admin;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class ProductAdminDAO {
    private static Jdbi jdbi;

    static {
        jdbi = DBConnect.getJdbi();
    }

    // 1. Lấy tất cả sản phẩm (kèm CategoryName)
    public List<Products> getAllProducts() {
        String sql = """
                SELECT p.ID AS id, p.ProductName AS productName, 
                       p.CategoryID AS categoryId, p.Price AS price, 
                       p.ImageURL AS imageUrl,p.ShortDescription AS shortDescription,p.StockQuantity as stockQuantity, c.CategoryName AS categoryName
                FROM products p
                INNER JOIN categories c ON p.CategoryID = c.CategoryID
                
                """;
        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .mapToBean(Products.class)
                    .list();
        }
    }

    // 2. Thêm sản phẩm mới
    public boolean addProduct(Products product) {
        String sql = "INSERT INTO Products (ProductName, CategoryID, Price, ImageURL, ShortDescription, StockQuantity) " +
                "VALUES (?, ?, ?, ?, ?, ?)";
        try (Handle handle = jdbi.open()) {
            handle.createUpdate(sql)
                    .bind(0, product.getProductName())
                    .bind(1, product.getCategoryID())
                    .bind(2, product.getPrice())
                    .bind(3, product.getImageURL())
                    .bind(4, product.getShortDescription())
                    .bind(5, product.getStockQuantity())
                    .execute();
            return true;
        } catch (Exception e) {
            // Ghi log lỗi
            e.printStackTrace();
            return false; // Trả về false nếu có lỗi
        }
    }

    // 3. Cập nhật sản phẩm
    public boolean updateProduct(Products product) {
        String sql = "UPDATE Products SET ProductName=?, CategoryID=?, Price=?, ImageURL=?, Description=?, StockQuantity=? " +
                "WHERE productID=?";
        try (Handle handle = jdbi.open()) {
            handle.createUpdate(sql)
                    .bind(0, product.getProductName())
                    .bind(1, product.getCategoryID())
                    .bind(2, product.getPrice())
                    .bind(3, product.getImageURL())
                    .bind(4, product.getShortDescription())
                    .bind(5, product.getStockQuantity())
                    .bind(6, product.getId())
                    .execute();
            return true;
        }
    }

    // 4. Xóa sản phẩm
    public boolean deleteProduct(int id) {
        String sql = "DELETE FROM Products WHERE Id=?";
        try (Handle handle = jdbi.open()) {
            return handle.createUpdate(sql)
                    .bind(0, id)
                    .execute() > 0;
        }
    }
    // 5. Lấy thông tin sản phẩm theo ID
    public Products getProductById(int id) {
        String sql = "SELECT p.Id AS id, p.ProductName AS productName, " +
                "p.CategoryID AS categoryId, p.Price AS price, " +
                "p.ImageURL AS imageUrl, c.CategoryName AS categoryName, " +
                "p.StockQuantity AS stockQuantity, p.ShortDescription AS shortDescription " +
                "FROM products p INNER JOIN categories c ON p.CategoryID = c.Id WHERE p.Id = ?";
        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind(0, id)
                    .mapToBean(Products.class)
                    .findOne()
                    .orElse(null); // Trả về null nếu không tìm thấy sản phẩm
        } catch (Exception e) {
            // Ghi log lỗi
            e.printStackTrace();
            return null;
        }
    }


    public static void main(String[] args) {

        ProductAdminDAO dao = new ProductAdminDAO();

//        System.out.println("====== LẤY TẤT CẢ NGƯỜI DÙNG ======");
//        List<Products> product = dao.getAllProducts();
//        product.forEach(System.out::println);


        Products p1 = new Products("abc",2,20000,"image/img-pro/bap1.jpg","abc",50);
        System.out.println(dao.addProduct(p1));
    }
}