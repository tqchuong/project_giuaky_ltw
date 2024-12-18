package fit.hcmuaf.edu.vn.foodmart.model;

import java.util.List;

public class Products {
    private int ID;
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
                    int productViews) {
        this.ID = ID;
        this.productName = productName;
        this.categoryID = categoryID;
        this.price = price;
        this.imageURL = imageURL;
        this.shortDescription = shortDescription;
        this.stockQuantity = stockQuantity;
        this.category = category;
        this.images = images;
        this.productsDetail = productsDetail;
        this.reviews = reviews;       // Gán danh sách đánh giá
        this.productViews = productViews; // Gán số lượt xem
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

    @Override
    public String toString() {
        return "Products{" +
                "ID=" + ID +
                ", productName='" + productName + '\'' +
                ", categoryID=" + categoryID +
                ", price=" + price +
                ", imageURL='" + imageURL + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", stockQuantity=" + stockQuantity +
                ", ProductsDetail=" + (productsDetail != null ? productsDetail : "Không có chi tiết sản phẩm") +
                '}';
    }

}
