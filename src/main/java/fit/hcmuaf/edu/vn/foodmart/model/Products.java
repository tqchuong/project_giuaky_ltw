package fit.hcmuaf.edu.vn.foodmart.model;

public class Products {
    private int ProductID;
    private String ProductName;
    private int CategoryID;
    private double Price;
    private String ImageURL;

    // Constructor
    public Products(int ProductID, String ProductName, int CategoryID, double Price, String ImageURL) {
        this.ProductID = ProductID;
        this.ProductName = ProductName;
        this.CategoryID = CategoryID;
        this.Price = Price;
        this.ImageURL = ImageURL;
    }

    public Products() {

    }

    // Getters and setters
    public int getProductID() {
        return ProductID;
    }

    public void setProductID(int ProductID) {
        this.ProductID = ProductID;
    }

    public String getProductName() {
        return ProductName;
    }

    public void setProductName(String ProductName) {
        this.ProductName = ProductName;
    }

    public int getCategoryID() {
        return CategoryID;
    }

    public void setCategoryID(int CategoryID) {
        this.CategoryID = CategoryID;
    }

    public double getPrice() {
        return Price;
    }

    public void setPrice(double Price) {
        this.Price = Price;
    }

    public String getImageURL() {
        return ImageURL;
    }

    public void setImageURL(String ImageURL) {
        this.ImageURL = ImageURL;
    }

    @Override
    public String toString() {
        return "Products{" +
                "ProductID=" + ProductID +
                ", ProductName='" + ProductName + '\'' +
                ", CategoryID=" + CategoryID +
                ", Price=" + Price +
                ", ImageURL='" + ImageURL + '\'' +
                '}';
    }
}

