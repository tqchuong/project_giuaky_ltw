package fit.hcmuaf.edu.vn.foodmart.service;


import fit.hcmuaf.edu.vn.foodmart.dao.ProductDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Products;

public class ProductService {
        private final ProductDAO productDAO = new ProductDAO();

        public Products getProductDetailsById(int productId) {
            return productDAO.getProductDetailsById(productId);
        }
    }


