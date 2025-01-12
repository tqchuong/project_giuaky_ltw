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
    private double averageRating; // Thêm thuộc tính averageRating
    private boolean isSale; // Thêm thuộc tính isSale
    private double discountPercentage; // Thêm thuộc tính discountPercentage
    private Sale sales;

    // Constructor mặc định
    public Products() {}

    // Constructor đầy đủ (thêm discountPercentage)
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
                    int productViews,
                    double averageRating,
                    boolean isSale,
                    double discountPercentage,
                    Sale sales) {
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
        this.reviews = reviews;
        this.productViews = productViews;
        this.averageRating = averageRating;
        this.isSale = isSale;
        this.discountPercentage = discountPercentage;
        this.sales = sales;
    }

    // Các getters và setters khác giữ nguyên

    public double getDiscountPercentage() {
        return discountPercentage;
    }

    public void setDiscountPercentage(double discountPercentage) {
        this.discountPercentage = discountPercentage;
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
                ", category=" + (category != null ? "Category[ID=" + category.getCategoryName() + "]" : "null") +
                ", images=" + (images != null ? "List<ProductImages>" : "null") +
                ", productsDetail=" + (productsDetail != null ? productsDetail.toString() : "null") +
                ", reviews=" + (reviews != null ? "List<Reviews>" : "null") +
                ", productViews=" + productViews +
                ", averageRating=" + averageRating +
                ", isSale=" + isSale +
                ", discountPercentage=" + discountPercentage +
                ", sales=" + (sales != null ? "Sale[ID=" + sales.getId() + "]" : "null") +
                '}';
    }
    public double getAverageRating() {
        return averageRating;
    }
    public boolean isSale() {
        return isSale;
    }

    public Sale getSales() {
        return sales;
    }
    public boolean getIsSale() {
        return isSale;
    }
    public void setSales(Sale sales) {
        this.sales = sales;
    }

    public void setSale(boolean sale) {
        isSale = sale;
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
}