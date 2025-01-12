package fit.hcmuaf.edu.vn.foodmart.dao.admin;


import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Order;
import fit.hcmuaf.edu.vn.foodmart.model.Users;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import fit.hcmuaf.edu.vn.foodmart.model.OrderDetails;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;
import java.util.ArrayList;

import java.util.List;

public class OrderAdminDAO {
    private static Jdbi jdbi;

    static {
        jdbi = DBConnect.getJdbi(); // Kết nối với DB thông qua DBConnect
    }

    // 1. Lấy tất cả người dùng
    public List<Order> getAllOrders() {
        String sql = "SELECT * FROM orders";
        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .mapToBean(Order.class) // Đổi sang ánh xạ với lớp Order
                    .list(); // Trả về danh sách tất cả đơn hàng
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Order getOrderById(int orderId) {
        String sql = "SELECT * FROM orders WHERE Id = ?";
        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind(0, orderId)
                    .mapToBean(Order.class)
                    .findOne()
                    .orElse(null);
        }
    }

    public List<OrderDetails> getOrderDetailsByOrderId(int orderId) {
        System.out.println("Lấy chi tiết đơn hàng cho OrderId: " + orderId); // Log orderId
        String sql = "SELECT od.*, p.ProductName, p.ImageURL " +
                "FROM orderdetails od " +
                "JOIN products p ON od.ProductID = p.Id " +
                "WHERE od.OrderId = :orderId";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("orderId", orderId)
                        .map((rs, ctx) -> {
                            System.out.println("Chi tiết đơn hàng: " + rs.getInt("Id")); // Log từng chi tiết đơn hàng
                            OrderDetails detail = new OrderDetails();
                            detail.setId(rs.getInt("Id"));
                            detail.setOrderId(rs.getInt("OrderId"));
                            detail.setProductID(rs.getInt("ProductId"));
                            detail.setQuantity(rs.getInt("Quantity"));
                            detail.setUnitPrice(rs.getDouble("UnitPrice"));

                            Products product = new Products();
                            product.setProductName(rs.getString("ProductName"));
                            product.setImageURL(rs.getString("ImageURL"));
                            detail.setProduct(product);

                            return detail;
                        }).list()
        );
    }


    public int getSoldProducts() {
        String sql = "SELECT SUM(od.Quantity) AS TotalQuantity " +
                "FROM orderdetails od " +
                "JOIN orders o ON od.OrderID = o.Id " +
                "WHERE o.OrderStatus = 'Đã xử lý'";

        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .mapTo(Integer.class)
                    .findOnly();
        } catch (Exception e) {
            e.printStackTrace();
            return 0; // Trả về 0 nếu xảy ra lỗi
        }
    }
    public int getSoldQuantity() {
        String sql = "SELECT SUM(od.Quantity) AS TotalQuantity " +
                "FROM orderdetails od " +
                "JOIN orders o ON od.OrderID = o.Id " +
                "WHERE o.OrderStatus = 'Chưa xử lý'";

        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .mapTo(Integer.class)
                    .findOnly();
        } catch (Exception e) {
            e.printStackTrace();
            return 0; // Trả về 0 nếu xảy ra lỗi
        }
    }
    public boolean updateOrderStatus(int orderId, String newStatus) {
        String sql = "UPDATE orders SET OrderStatus = :newStatus WHERE Id = :orderId";

        try (Handle handle = jdbi.open()) {
            System.out.println("Order ID: " + orderId + ", New Status: " + newStatus);

            int rowsUpdated = handle.createUpdate(sql)
                    .bind("newStatus", newStatus)
                    .bind("orderId", orderId)
                    .execute();
            return rowsUpdated > 0; // Trả về true nếu có ít nhất một dòng được cập nhật
        } catch (Exception e) {
            e.printStackTrace();
            return false; // Trả về false nếu có lỗi
        }
    }

    public double calculateTotalPrice(int orderId) {
        String sql = "SELECT SUM(od.Quantity * od.UnitPrice) AS TotalPrice " +
                "FROM orderdetails od WHERE od.OrderId = :orderId";
        try {
            return jdbi.withHandle(handle ->
                    handle.createQuery(sql)
                            .bind("orderId", orderId)
                            .mapTo(Double.class)
                            .findOne()
                            .orElse(0.0) // Nếu không có chi tiết, trả về 0
            );
        } catch (Exception e) {
            e.printStackTrace();
            return 0.0; // Trả về 0 nếu có lỗi
        }
    }





    public static void main(String[] args) {
        OrderAdminDAO dao = new OrderAdminDAO();

        System.out.println("====== LẤY TẤT CẢ THONG TIN ======");
        List<Order> Orders = dao.getAllOrders();
        Orders.forEach(System.out::println);
    }
}
