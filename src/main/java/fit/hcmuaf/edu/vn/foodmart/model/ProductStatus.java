//package fit.hcmuaf.edu.vn.foodmart.model;
//
//public enum ProductStatus {
//    AVAILABLE("Còn hàng"),
//    OUT_OF_STOCK("Hết hàng");
//
//    private final String status;
//
//    // Constructor
//    ProductStatus(String status) {
//        this.status = status;
//    }
//
//    // Getter for the status
//    public String getStatus() {
//        return status;
//    }
//
//    @Override
//    public String toString() {
//        return status;
//    }
//
//    // Tạo phương thức để chuyển từ String sang enum
//    public static ProductStatus fromString(String status) {
//        if (status == null) {
//            return null;
//        }
//
//        // So sánh mà không phân biệt chữ hoa chữ thường
//        for (ProductStatus productStatus : ProductStatus.values()) {
//            if (productStatus.status.equalsIgnoreCase(status.trim())) {
//                return productStatus;
//            }
//        }
//
//        // Nếu không tìm thấy, trả về null hoặc ném ngoại lệ (tùy theo yêu cầu)
//        throw new IllegalArgumentException("Invalid status: " + status);
//    }
//}
