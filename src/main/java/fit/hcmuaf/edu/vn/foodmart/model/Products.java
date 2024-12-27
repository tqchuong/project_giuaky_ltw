package fit.hcmuaf.edu.vn.foodmart.model;

import org.jdbi.v3.core.mapper.reflect.ColumnName;

import java.sql.Timestamp;

public class Products {

    private int id;
    private String productName;
    private int categoryID;
    private double price;
    private Timestamp uploadDate;
    private String imageURL;
    private String shortDescription;
    private int StockQuantity;

    public Products() {
    }

    public Products(int id, String productName, int categoryID, double price, Timestamp uploadDate, String imageURL, String shortDescription, int stockQuantity) {
        this.id = id;
        this.productName = productName;
        this.categoryID = categoryID;
        this.price = price;
        this.uploadDate = uploadDate;
        this.imageURL = imageURL;
        this.shortDescription = shortDescription;
        StockQuantity = stockQuantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int productID) {
        this.id = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Timestamp getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Timestamp uploadDate) {
        this.uploadDate = uploadDate;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public int getStockQuantity() {
        return StockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        StockQuantity = stockQuantity;
    }

    @Override
    public String toString() {
        return "Products{" +
                "productID=" + id +
                ", productName='" + productName + '\'' +
                ", categoryID=" + categoryID +
                ", price=" + price +
                ", uploadDate=" + uploadDate +
                ", imageURL='" + imageURL + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", StockQuantity=" + StockQuantity +
                '}';
    }
}
