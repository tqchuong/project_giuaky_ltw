package fit.hcmuaf.edu.vn.foodmart.model;

import java.sql.Timestamp;

public class Discount {
    private int id;
    private int productId;
    private double discountPercentage;
    private Timestamp startDate;
    private Timestamp endDate;
    private String status;
    private Products product;  // Giữ thuộc tính này trong Discount
    private double discountedPrice;  // Thêm thuộc tính discountedPrice

    // Constructor
    public Discount() {
    }

    public Discount(int id, int productId, double discountPercentage, Timestamp startDate, Timestamp endDate, String status, Products product, double discountedPrice) {
        this.id = id;
        this.productId = productId;
        this.discountPercentage = discountPercentage;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.product = product;
        this.discountedPrice = discountedPrice;  // Khởi tạo discountedPrice
    }

    // Getter và Setter cho discountedPrice
    public double getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(double discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    // Getter và Setter cho các thuộc tính khác
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public double getDiscountPercentage() {
        return discountPercentage;
    }

    public void setDiscountPercentage(double discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

    public Timestamp getStartDate() {
        return startDate;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    public Timestamp getEndDate() {
        return endDate;
    }

    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "Discount{" +
                "id=" + id +
                ", productId=" + productId +
                ", discountPercentage=" + discountPercentage +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", status='" + status + '\'' +
                ", product=" + product + // Thêm thông tin sản phẩm
                ", discountedPrice=" + discountedPrice +  // Thêm giá giảm
                '}';
    }
}
