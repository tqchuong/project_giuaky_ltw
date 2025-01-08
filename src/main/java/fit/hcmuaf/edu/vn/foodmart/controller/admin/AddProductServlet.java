package fit.hcmuaf.edu.vn.foodmart.controller.admin;

import fit.hcmuaf.edu.vn.foodmart.dao.admin.ProductAdminDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.*;

@WebServlet("/addProduct")
public class AddProductServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        // Lấy action từ form (add hoặc edit)
        String action = request.getParameter("action");

        // Lấy dữ liệu từ form
        String productName = request.getParameter("productName");
        String categoryParam = request.getParameter("categoryID");
        String priceParam = request.getParameter("price");
        String stockParam = request.getParameter("stockQuantity");
        String shortDescription = request.getParameter("shortDescription");
        String idParam = request.getParameter("id");

        // Xử lý dữ liệu đầu vào
        int id = (idParam != null && !idParam.isEmpty()) ? Integer.parseInt(idParam) : 0;
        int categoryID = (categoryParam != null && !categoryParam.isEmpty()) ? Integer.parseInt(categoryParam) : 0;
        double price = (priceParam != null && !priceParam.isEmpty()) ? Double.parseDouble(priceParam) : 0.0;
        int stockQuantity = (stockParam != null && !stockParam.isEmpty()) ? Integer.parseInt(stockParam) : 0;

        // Xử lý hình ảnh
        String imageURL = null;
        Part filePart = request.getPart("up-hinh-anh");
        if (filePart != null && filePart.getSize() > 0) {
            String fileName = filePart.getSubmittedFileName();
            String uploadPath = getServletContext().getRealPath("/") + "uploads" + File.separator + fileName;
            filePart.write(uploadPath);
            imageURL = "uploads/" + fileName;
        }

        // Gọi DAO để thêm hoặc chỉnh sửa sản phẩm
        ProductAdminDAO productDao = new ProductAdminDAO();
        if ("add".equals(action)) {
            // Thêm sản phẩm mới
            Products newProduct = new Products();
            newProduct.setProductName(productName);
            newProduct.setCategoryID(categoryID);
            newProduct.setPrice(price);
            newProduct.setStockQuantity(stockQuantity);
            newProduct.setShortDescription(shortDescription);
            if (imageURL != null) {
                newProduct.setImageURL(imageURL);
            }

            boolean isAdded = productDao.addProduct(newProduct);
            response.setContentType("application/json");
            response.getWriter().write("{\"success\": " + isAdded + ", \"message\": \"" + (isAdded ? "Thêm sản phẩm thành công!" : "Thêm sản phẩm thất bại!") + "\"}");
        } else if ("edit".equals(action)) {
            // Chỉnh sửa sản phẩm
            Products existingProduct = productDao.getProductById(id); // Lấy thông tin sản phẩm theo ID
            if (existingProduct != null) {
                existingProduct.setProductName(productName);
                existingProduct.setCategoryID(categoryID);
                existingProduct.setPrice(price);
                existingProduct.setStockQuantity(stockQuantity);
                existingProduct.setShortDescription(shortDescription);
                if (imageURL != null) {
                    existingProduct.setImageURL(imageURL);
                }

                boolean isUpdated = productDao.updateProduct(existingProduct);
                response.setContentType("application/json");
                response.getWriter().write("{\"success\": " + isUpdated + ", \"message\": \"" + (isUpdated ? "Cập nhật sản phẩm thành công!" : "Cập nhật sản phẩm thất bại!") + "\"}");
            } else {
                response.setContentType("application/json");
                response.getWriter().write("{\"success\": false, \"message\": \"Không tìm thấy sản phẩm để cập nhật!\"}");
            }
        }
        response.sendRedirect("admin.jsp");
    }
}