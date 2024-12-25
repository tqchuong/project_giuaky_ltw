package fit.hcmuaf.edu.vn.foodmart.model;

<<<<<<< HEAD

import java.sql.Timestamp;

public class Products {
    private int productID;
=======
import java.util.List;

public class Products {
    private int ID;
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
    private String productName;
    private int categoryID;
    private double price;
    private String imageURL;
<<<<<<< HEAD
    private Timestamp uploadDate;
    private int StockQuantity;
    private String Description;

    // Constructor
    public Products(int productID, String productName, int categoryID, double price, String imageURL, Timestamp uploadDate, int stockQuantity) {
        this.productID = productID;
=======
    private String shortDescription; // Mô tả ngắn
    private int stockQuantity;       // Số lượng tồn kho
    private Category category;       // Đối tượng danh mục
    private List<ProductImages> images; // Danh sách hình ảnh
    private ProductsDetail productsDetail;
    private List<Reviews> reviews; // Danh sách đánh giá
    private int productViews;
    private double averageRating; // Thêm thuộc tính averageRating

    // Constructor mặc định
    public Products() {}

    // Constructor đầy đủ
    public Products(int ID,
                    String productName,
                    int categoryID,
                    double price,
                    String imageURL,
                    String shortDescription,
                    int stockQuantity,
                    Category category,
                    List<ProductImages> images,
                    ProductsDetail productsDetail,
                    List<Reviews> reviews,
                    int productViews,double averageRating) {
        this.ID = ID;
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
        this.productName = productName;
        this.categoryID = categoryID;
        this.price = price;
        this.imageURL = imageURL;
<<<<<<< HEAD
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
=======
        this.shortDescription = shortDescription;
        this.stockQuantity = stockQuantity;
        this.category = category;
        this.images = images;
        this.productsDetail = productsDetail;
        this.reviews = reviews;       // Gán danh sách đánh giá
        this.productViews = productViews; // Gán số lượt xem
        this.averageRating = averageRating;
    }
    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public ProductsDetail getProductsDetail() {
        return productsDetail;
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

    public void setProductsDetail(ProductsDetail productsDetail) {
        this.productsDetail = productsDetail;
    }
    // Getters và Setters
    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
    }

    @Override
    public String toString() {
        return "Products{" +
<<<<<<< HEAD
                "productID=" + productID +
=======
                "ID=" + ID +
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
                ", productName='" + productName + '\'' +
                ", categoryID=" + categoryID +
                ", price=" + price +
                ", imageURL='" + imageURL + '\'' +
<<<<<<< HEAD
                ", uploadDate=" + uploadDate +
                ", StockQuantity=" + StockQuantity +
                '}';
    }
}
=======
                ", shortDescription='" + shortDescription + '\'' +
                ", stockQuantity=" + stockQuantity +
                ", ProductsDetail=" + (productsDetail != null ? productsDetail : "Không có chi tiết sản phẩm") +
                '}';
    }

}
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
