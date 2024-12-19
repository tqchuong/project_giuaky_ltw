package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Discount;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class DiscountDAO {

    private static Jdbi jdbi = DBConnect.getJdbi(); // Lấy Jdbi từ DBConnect

    // Phương thức lấy danh sách các sản phẩm giảm giá và tính giá giảm
    public List<Discount> getActiveDiscounts() {
        // Câu truy vấn SQL để lấy sản phẩm với thông tin giảm giá và tính giá sau giảm
        String sql = "SELECT " +
                "p.Id AS productID, " +
                "p.ProductName AS productName, " +
                "p.CategoryID AS categoryID, " +
                "p.Price AS price, " +
                "p.ImageURL AS imageURL, " +
                "p.UploadDate AS uploadDate, " +
                "p.StockQuantity AS stockQuantity, " +
                "d.DiscountPercentage AS discountPercentage, " +
                "d.StartDate, " +
                "d.EndDate, " +
                "p.Price * (1 - d.DiscountPercentage / 100) AS DiscountedPrice " +
                "FROM Products p " +
                "JOIN Discounts d ON p.Id = d.ProductID " +
                "WHERE d.StartDate <= CURRENT_TIMESTAMP " +
                "AND d.EndDate >= CURRENT_TIMESTAMP " +
                "ORDER BY d.StartDate DESC"; // Lọc các sản phẩm giảm giá còn hiệu lực

        try (Handle handle = jdbi.open()) {
            // Thực thi câu truy vấn và ánh xạ kết quả
            return handle.createQuery(sql)
                    .map((rs, ctx) -> {
                        Discount discount = new Discount();
                        discount.setProductId(rs.getInt("productID"));
                        discount.setDiscountPercentage(rs.getDouble("discountPercentage"));
                        discount.setStartDate(rs.getTimestamp("StartDate"));
                        discount.setEndDate(rs.getTimestamp("EndDate"));
                        discount.setDiscountedPrice(rs.getDouble("DiscountedPrice"));  // Lấy giá sau giảm

                        // Tạo đối tượng sản phẩm và gán thông tin sản phẩm
                        Products product = new Products();
                        product.setProductID(rs.getInt("productID"));
                        product.setProductName(rs.getString("productName"));
                        product.setCategoryID(rs.getInt("categoryID"));
                        product.setPrice(rs.getDouble("price"));
                        product.setImageURL(rs.getString("imageURL"));
                        product.setStockQuantity(rs.getInt("stockQuantity"));
                        product.setUploadDate(rs.getTimestamp("uploadDate"));

                        // Gán thông tin sản phẩm vào đối tượng Discount
                        discount.setProduct(product);

                        return discount;
                    })
                    .list(); // Trả về danh sách các sản phẩm có giảm giá
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn các sản phẩm giảm giá: " + e.getMessage());
            return null;
        }
    }

    // Test phương thức
    public static void main(String[] args) {
        DiscountDAO dao = new DiscountDAO();

        // Lấy danh sách các sản phẩm giảm giá còn hiệu lực
        List<Discount> activeDiscounts = dao.getActiveDiscounts();

        if (activeDiscounts != null && !activeDiscounts.isEmpty()) {
            System.out.println("Danh sách giảm giá còn hiệu lực:");
            for (Discount discount : activeDiscounts) {
                // In thông tin sản phẩm và giá giảm
                System.out.println("Sản phẩm: " + discount.getProduct().getProductName() +
                        ", Giá gốc: " + discount.getProduct().getPrice() +
                        ", Phần trăm giảm: " + discount.getDiscountPercentage() + "%" +
                        ", Giá sau giảm: " + discount.getDiscountedPrice() +
                        ", Số lượng tồn: " + discount.getProduct().getStockQuantity() +
                        ", Thời gian áp dụng: Từ " + discount.getStartDate() + " đến " + discount.getEndDate());
            }
        } else {
            System.out.println("Không có sản phẩm nào trong Flash Sale hoặc có lỗi khi truy vấn.");
        }
    }
}
