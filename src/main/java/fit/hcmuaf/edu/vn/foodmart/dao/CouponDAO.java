package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Coupon;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class CouponDAO {

    private static Jdbi jdbi = DBConnect.getJdbi();

    public List<Coupon> getActiveCoupons() {
        // Câu truy vấn SQL để lấy danh sách coupon còn hiệu lực
        String sql = "SELECT " +
                "c.Id AS couponID, " +
                "c.CouponCode AS couponCode, " +
                "c.DiscountAmount AS discountAmount, " +
                "c.Description AS shortDescription, " +
                "c.StartDate AS startDate, " +
                "c.EndDate AS endDate, " +
                "c.MinOrderAmount AS minOrderAmount " +
                "FROM Coupons c " +
                "WHERE c.StartDate <= CURRENT_DATE " + // Ngày bắt đầu phải trước hoặc bằng ngày hiện tại
                "AND c.EndDate >= CURRENT_DATE " +   // Ngày kết thúc phải sau hoặc bằng ngày hiện tại
                "ORDER BY c.StartDate DESC";         // Sắp xếp theo ngày bắt đầu

        try (Handle handle = jdbi.open()) {
            // Thực thi câu truy vấn và ánh xạ kết quả
            return handle.createQuery(sql)
                    .map((rs, ctx) -> {
                        Coupon coupon = new Coupon();
                        coupon.setId(rs.getInt("couponID"));
                        coupon.setCouponCode(rs.getString("couponCode"));
                        coupon.setDiscountAmount(rs.getDouble("discountAmount"));
                        coupon.setDescription(rs.getString("shortDescription"));
                        coupon.setStartDate(rs.getTimestamp("startDate"));
                        coupon.setEndDate(rs.getTimestamp("endDate"));
                        coupon.setMinOrderAmount(rs.getDouble("minOrderAmount"));

                        return coupon;
                    })
                    .list(); // Trả về danh sách các coupon còn hiệu lực
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn danh sách coupon: " + e.getMessage());
            return null;
        }
    }
    public static void main(String[] args) {
        CouponDAO dao = new CouponDAO();

        // Lấy danh sách các coupon còn hiệu lực
        List<Coupon> activeCoupons = dao.getActiveCoupons();

        if (activeCoupons != null && !activeCoupons.isEmpty()) {
            System.out.println("Danh sách coupon còn hiệu lực:");
            for (Coupon coupon : activeCoupons) {
                // In thông tin coupon
                System.out.println("Mã coupon: " + coupon.getCouponCode() +
                        ", Giảm giá: " + coupon.getDiscountAmount() +
                        ", Mô tả: " + coupon.getDescription() +
                        ", Điều kiện tối thiểu: " + coupon.getMinOrderAmount() +
                        ", Thời gian áp dụng: Từ " + coupon.getStartDate() + " đến " + coupon.getEndDate());
            }
        } else {
            System.out.println("Không có coupon nào còn hiệu lực hoặc có lỗi khi truy vấn.");
        }
    }


}
