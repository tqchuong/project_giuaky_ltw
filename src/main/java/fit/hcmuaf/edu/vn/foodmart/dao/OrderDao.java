package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.model.*;
import org.jdbi.v3.core.Handle;

import java.sql.Date;

public class OrderDao {
    private final Handle handle;

    public OrderDao(Handle handle) {
        this.handle = handle;
    }

    public int createOrder(Users user, double totalAmount, String shippingMethod,
                           Date deliveryDate, String deliveryTime, String paymentMethod, String orderNote,
                           String receiverName, String receiverPhone, String shippingAddress) {

        String sql = """
            INSERT INTO orders (UserId, OrderDate, TotalAmount, ShippingMethod, DeliveryDate, DeliveryTime, PaymentMethod, OrderNote, ReceiverName, ReceiverPhone, ShippingAddress, created_at, updated_at)
            VALUES (:id, NOW(), :totalAmount, :shippingMethod, :deliveryDate, :deliveryTime, :paymentMethod, :orderNote, :receiverName, :receiverPhone, :shippingAddress, NOW(), NOW())
            """;
        return handle.createUpdate(sql)
                .bind("id", user.getId())
                .bind("totalAmount", totalAmount)
                .bind("shippingMethod", shippingMethod)
                .bind("deliveryDate", deliveryDate)
                .bind("deliveryTime", deliveryTime)
                .bind("paymentMethod", paymentMethod)
                .bind("orderNote", orderNote)
                .bind("receiverName", receiverName)
                .bind("receiverPhone", receiverPhone)
                .bind("shippingAddress", shippingAddress)
                .executeAndReturnGeneratedKeys("orderId")
                .mapTo(Integer.class)
                .one();
    }
}