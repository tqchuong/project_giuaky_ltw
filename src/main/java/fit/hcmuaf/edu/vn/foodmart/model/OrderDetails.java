package fit.hcmuaf.edu.vn.foodmart.model;


import java.math.BigDecimal;
import java.sql.Timestamp;

// Lớp OrderDetails
public class OrderDetails {
    private int id;
    private int orderId;
    private int productId;
    private int quantity;
    private double unitPrice;

    // Constructors
    public OrderDetails() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }
}
