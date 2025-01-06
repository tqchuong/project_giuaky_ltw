package fit.hcmuaf.edu.vn.foodmart.model;

import org.jdbi.v3.core.mapper.reflect.ColumnName;

import java.sql.Timestamp;
import java.util.List;

public class Products {

    private int id;
    private String productName;
    private int categoryID;
    private double price;
    private String imageURL;
    private String shortDescription; // Mô tả ngắn
    private int stockQuantity;       // Số lượng tồn kho
    private Category category;       // Đối tượng danh mục
    private List<ProductImages> images; // Danh sách hình ảnh
    private ProductsDetail productsDetail;
    private List<Reviews> reviews; // Danh sách đánh giá
    private int productViews;
    private double averageRating; // Thêm thuộc tính averageRating
    private Timestamp uploadDate;

    public Products() {
    }

    public Products(int id, String productName, int categoryID, double price, String imageURL, String shortDescription, int stockQuantity, Category category, List<ProductImages> images, ProductsDetail productsDetail, List<Reviews> reviews, int productViews, double averageRating, Timestamp uploadDate) {
        this.id = id;
        this.productName = productName;
        this.categoryID = categoryID;
        this.price = price;
        this.imageURL = imageURL;
        this.shortDescription = shortDescription;
        this.stockQuantity = stockQuantity;
        this.category = category;
        this.images = images;
        this.productsDetail = productsDetail;
        this.reviews = reviews;
        this.productViews = productViews;
        this.averageRating = averageRating;
        this.uploadDate = uploadDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<ProductImages> getImages() {
        return images;
    }

    public void setImages(List<ProductImages> images) {
        this.images = images;
    }

    public ProductsDetail getProductsDetail() {
        return productsDetail;
    }

    public void setProductsDetail(ProductsDetail productsDetail) {
        this.productsDetail = productsDetail;
    }

    public List<Reviews> getReviews() {
        return reviews;
    }

    public void setReviews(List<Reviews> reviews) {
        this.reviews = reviews;
    }

    public int getProductViews() {
        return productViews;
    }

    public void setProductViews(int productViews) {
        this.productViews = productViews;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public Timestamp getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Timestamp uploadDate) {
        this.uploadDate = uploadDate;
    }

    @Override
    public String toString() {
        return "Products{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", categoryID=" + categoryID +
                ", price=" + price +
                ", imageURL='" + imageURL + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", stockQuantity=" + stockQuantity +
                ", category=" + category +
                ", images=" + images +
                ", productsDetail=" + productsDetail +
                ", reviews=" + reviews +
                ", productViews=" + productViews +
                ", averageRating=" + averageRating +
                ", uploadDate=" + uploadDate +
                '}';
    }
}
