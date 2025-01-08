package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Order;
import fit.hcmuaf.edu.vn.foodmart.model.OrderDetail;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class OrderDAO {
    private static final Jdbi jdbi = DBConnect.getJdbi();

    // Hàm lấy danh sách đơn hàng và chi tiết của từng đơn hàng
    public List<Order> getOrdersByUserIdWithDetails(int userId) {
        // Câu truy vấn SQL để lấy danh sách đơn hàng và chi tiết sản phẩm
        String sql = """
                SELECT
                    o.Id AS orderId,
                    o.UsersID AS userId,
                    o.OrderDate AS orderDate,
                    o.ShippingMethod AS shippingMethod,
                    o.OrderNote AS orderNote,
                    o.ReceiverName AS receiverName,
                    o.ReceiverPhone AS receiverPhone,
                    o.ShippingAddress AS shippingAddress,
                    o.OrderStatus AS orderStatus,
                    p.ProductName AS productName,  -- Lấy tên sản phẩm
                    p.ImageURL AS imageURL,
                    od.ProductID AS productID,
                    od.Quantity AS quantity,
                    od.UnitPrice AS unitPrice,
                    od.TotalAmount AS totalAmount
                FROM Orders o
                JOIN OrderDetails od ON o.Id = od.OrderID
                JOIN Products p ON od.ProductID = p.Id  -- JOIN với bảng Products để lấy tên sản phẩm
                WHERE o.UsersID = :userId
                ORDER BY o.OrderDate DESC;
                 """;

        try (Handle handle = jdbi.open()) {
            // Thực thi câu truy vấn và ánh xạ kết quả
            return handle.createQuery(sql)
                    .bind("userId", userId)
                    .map((rs, ctx) -> {
                        // Tạo đối tượng Order
                        Order order = new Order();
                        order.setId(rs.getInt("orderId"));
                        order.setUsersID(rs.getInt("userId"));
                        order.setOrderDate(rs.getTimestamp("orderDate"));
                        order.setShippingMethod(rs.getString("shippingMethod"));
                        order.setOrderNote(rs.getString("orderNote"));
                        order.setReceiverName(rs.getString("receiverName"));
                        order.setReceiverPhone(rs.getString("receiverPhone"));
                        order.setShippingAddress(rs.getString("shippingAddress"));
                        order.setOrderStatus(rs.getString("orderStatus"));

                        // Tạo đối tượng OrderDetail
                        OrderDetail orderDetail = new OrderDetail();
                        orderDetail.setProductID(rs.getInt("productID"));
                        orderDetail.setProductName(rs.getString("productName"));  // Thêm tên sản phẩm vào chi tiết
                        orderDetail.setImg(rs.getString("imageURL"));
                        orderDetail.setQuantity(rs.getInt("quantity"));
                        orderDetail.setUnitPrice(rs.getDouble("unitPrice"));
                        orderDetail.setTotalAmount(rs.getDouble("totalAmount"));

                        // Thêm OrderDetail vào Order (sửa phương thức addProduct trong class Order nếu cần)
                        order.addProduct(orderDetail);

                        return order;
                    })
                    .list(); // Trả về danh sách các đơn hàng
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn danh sách đơn hàng: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    // Hàm main để kiểm tra
    public static void main(String[] args) {
        OrderDAO dao = new OrderDAO();

        // Thay đổi userId theo nhu cầu
        int userId = 2;
        List<Order> orders = dao.getOrdersByUserIdWithDetails(userId);

        if (orders != null && !orders.isEmpty()) {
            System.out.println("Danh sách đơn hàng của user ID " + userId + ":");
            for (Order order : orders) {
                System.out.println("Mã đơn hàng: " + order.getId() +
                        ", Ngày đặt: " + order.getOrderDate() +
                        ", Người nhận: " + order.getReceiverName() +
                        ", Địa chỉ: " + order.getShippingAddress() +
                        ", Trạng thái: " + order.getOrderStatus());

                // In thông tin chi tiết sản phẩm
                for (OrderDetail detail : order.getOrderDetails()) {
                    System.out.println("Sản phẩm: " + detail.getProductName() +
                            ", Số lượng: " + detail.getQuantity() +
                            ", Đơn giá: " + detail.getUnitPrice() +
                            ", Tổng tiền: " + detail.getTotalAmount()
                    );
                }
            }
        } else {
            System.out.println("Không có đơn hàng nào cho user ID " + userId + " hoặc có lỗi khi truy vấn.");
        }
    }
}
