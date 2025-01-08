package fit.hcmuaf.edu.vn.foodmart.model;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class Order {
    private int id;
    private int usersID;
    private Timestamp orderDate;
    private String shippingMethod;
    private String orderNote;
    private String receiverName;
    private String receiverPhone;
    private String shippingAddress;
    private String orderStatus;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    // Danh sách chi tiết đơn hàng
    private List<OrderDetail> orderDetails = new ArrayList<>();

    public Order() {
    }

    public Order(int id, int usersID, Timestamp orderDate, String shippingMethod, String orderNote, String receiverName, String receiverPhone, String shippingAddress, String orderStatus, Timestamp createdAt, Timestamp updatedAt, List<OrderDetail> orderDetails) {
        this.id = id;
        this.usersID = usersID;
        this.orderDate = orderDate;
        this.shippingMethod = shippingMethod;
        this.orderNote = orderNote;
        this.receiverName = receiverName;
        this.receiverPhone = receiverPhone;
        this.shippingAddress = shippingAddress;
        this.orderStatus = orderStatus;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.orderDetails = orderDetails;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", usersID=" + usersID +
                ", orderDate=" + orderDate +
                ", shippingMethod='" + shippingMethod + '\'' +
                ", orderNote='" + orderNote + '\'' +
                ", receiverName='" + receiverName + '\'' +
                ", receiverPhone='" + receiverPhone + '\'' +
                ", shippingAddress='" + shippingAddress + '\'' +
                ", orderStatus='" + orderStatus + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", orderDetails=" + orderDetails +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUsersID() {
        return usersID;
    }

    public void setUsersID(int usersID) {
        this.usersID = usersID;
    }

    public Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
    }

    public String getShippingMethod() {
        return shippingMethod;
    }

    public void setShippingMethod(String shippingMethod) {
        this.shippingMethod = shippingMethod;
    }

    public String getOrderNote() {
        return orderNote;
    }

    public void setOrderNote(String orderNote) {
        this.orderNote = orderNote;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public String getReceiverPhone() {
        return receiverPhone;
    }

    public void setReceiverPhone(String receiverPhone) {
        this.receiverPhone = receiverPhone;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
    }


    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }



    public void addProduct(OrderDetail detail) {
        this.orderDetails.add(detail);
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

}
