package fit.hcmuaf.edu.vn.foodmart.model;

public class OrderDetail {
    private int id;
    private int productID;
    private String productName;
    private String img;
    private int quantity;
    private double unitPrice;
    private double totalAmount;

    public OrderDetail() {
    }

    public OrderDetail(int id, int productID, String productName,String img ,int quantity, double unitPrice, double totalAmount) {
        this.id = id;
        this.productID = productID;
        this.productName = productName;
        this.img = img;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.totalAmount = totalAmount;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "id=" + id +
                ", productID=" + productID +
                ", productName='" + productName + '\'' +
                ", img='" + img + '\'' +
                ", quantity=" + quantity +
                ", unitPrice=" + unitPrice +
                ", totalAmount=" + totalAmount +
                '}';
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }
}
