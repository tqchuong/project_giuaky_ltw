package fit.hcmuaf.edu.vn.foodmart.model;

public class Sale {
    private int id;
    private Products products;
    private double discountPercentage;
    private String dataSaleSlot;
    private java.sql.Timestamp createdAt;

    // Constructor mặc định
    public Sale() {}

    // Constructor đầy đủ
    public Sale(int id, Products products, double discountPercentage, String dataSaleSlot, java.sql.Timestamp createdAt) {
        this.id = id;
        this.products = products;
        this.discountPercentage = discountPercentage;
        this.dataSaleSlot = dataSaleSlot;
        this.createdAt = createdAt;
    }

    // Getters và Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public double getDiscountPercentage() {
        return discountPercentage;
    }

    public void setDiscountPercentage(double discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

    public String getDataSaleSlot() {
        return dataSaleSlot;
    }

    public void setDataSaleSlot(String dataSaleSlot) {
        this.dataSaleSlot = dataSaleSlot;
    }

    public java.sql.Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(java.sql.Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Sale{" +
                "id=" + id +
                ", product=" + products +
                ", discountPercentage=" + discountPercentage +
                ", dataSaleSlot='" + dataSaleSlot + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}