package fit.hcmuaf.edu.vn.foodmart.service;


import fit.hcmuaf.edu.vn.foodmart.dao.ProductDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Products;

import java.util.List;

public class ProductService {
    private static ProductDAO productDAO = new ProductDAO();

    // Phương thức lấy tất cả sản phẩm
    public List<Products> getAllProducts() {
        return productDAO.getAllProducts();
    }

    // Phương thức lấy sản phẩm theo danh mục
    public List<Products> getProductsByCategory(String categoryName) {
        return productDAO.getProductsByCategory(categoryName);
    }

    // Phương thức lấy chi tiết sản phẩm theo ID
    public Products getProductDetailsById(int productId) {
        // Gọi phương thức trong DAO để lấy chi tiết sản phẩm
        return productDAO.getProductDetailsById(productId);
    }

    // Phương thức lấy trung bình rating của sản phẩm
    public double getAverageRating(int productId) {
        return productDAO.getAverageRating(productId);
    }
}


