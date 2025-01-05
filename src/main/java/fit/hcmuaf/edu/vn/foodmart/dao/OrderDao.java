package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.Cart.CartProduct;
import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.*;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Timestamp;
import java.util.List;

import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.statement.Update;

import java.util.List;

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
            VALUES (:userId, NOW(), :totalAmount, :shippingMethod, :deliveryDate, :deliveryTime, :paymentMethod, :orderNote, :receiverName, :receiverPhone, :shippingAddress, NOW(), NOW())
            """;
        return handle.createUpdate(sql)
                .bind("userId", user.getUserId())
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