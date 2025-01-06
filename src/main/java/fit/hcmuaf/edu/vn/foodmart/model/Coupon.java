package fit.hcmuaf.edu.vn.foodmart.model;

public class Coupon {
    private int id;
    private String couponCode;
    private double discountAmount;
    private String startDate;
    private String endDate;
    private double minOrderAmount;
    private Order order;  // Liên kết tới đối tượng Order thay vì chỉ lưu orderId

    // Constructor
    public Coupon(int id, String couponCode, double discountAmount, String startDate, String endDate, double minOrderAmount, Order order) {
        this.id = id;
        this.couponCode = couponCode;
        this.discountAmount = discountAmount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.minOrderAmount = minOrderAmount;
        this.order = order;  // Liên kết với đối tượng Order
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    public double getDiscountAmount() {
        return discountAmount;
    }

    public void setDiscountAmount(double discountAmount) {
        this.discountAmount = discountAmount;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public double getMinOrderAmount() {
        return minOrderAmount;
    }

    public void setMinOrderAmount(double minOrderAmount) {
        this.minOrderAmount = minOrderAmount;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
