package fit.hcmuaf.edu.vn.foodmart.model;


import java.sql.Timestamp;

public class Products {
    private int productID;
    private String productName;
    private int categoryID;
    private double price;
    private String imageURL;
    private Timestamp uploadDate;
    private int StockQuantity;
    private String Description;

    // Constructor
    public Products(int productID, String productName, int categoryID, double price, String imageURL, Timestamp uploadDate, int stockQuantity) {
        this.productID = productID;
        this.productName = productName;
        this.categoryID = categoryID;
        this.price = price;
        this.imageURL = imageURL;
        this.uploadDate = uploadDate;
        this.StockQuantity = stockQuantity;
    }

    public Products() {
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
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

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Timestamp getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Timestamp uploadDate) {
        this.uploadDate = uploadDate;
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
                "productID=" + productID +
                ", productName='" + productName + '\'' +
                ", categoryID=" + categoryID +
                ", price=" + price +
                ", imageURL='" + imageURL + '\'' +
                ", uploadDate=" + uploadDate +
                ", StockQuantity=" + StockQuantity +
                '}';
    }
}