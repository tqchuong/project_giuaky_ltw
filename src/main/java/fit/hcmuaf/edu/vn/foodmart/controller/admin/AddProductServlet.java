package fit.hcmuaf.edu.vn.foodmart.controller.admin;

import fit.hcmuaf.edu.vn.foodmart.dao.admin.ProductAdminDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.File;
import java.io.IOException;

@WebServlet("/addProduct")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024 * 2, // 2MB
        maxFileSize = 1024 * 1024 * 10,      // 10MB
        maxRequestSize = 1024 * 1024 * 50    // 50MB
)
public class AddProductServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        // Lấy dữ liệu từ request
        String action = request.getParameter("action");
        String productName = request.getParameter("productName");
        String category = request.getParameter("categoryID");
        String priceParam = request.getParameter("price");
        String stock = request.getParameter("stockQuantity");
        String shortDescription = request.getParameter("shortDescription");
        String idParam = request.getParameter("id");

        // Xử lý dữ liệu
        int id = (idParam != null && !idParam.isEmpty()) ? Integer.parseInt(idParam) : 0;
        int categoryID = (category != null && !category.isEmpty()) ? Integer.parseInt(category) : 0;
        double price = (priceParam != null && !priceParam.isEmpty()) ? Double.parseDouble(priceParam) : 0.0;
        int stockQuantity = (stock != null && !stock.isEmpty()) ? Integer.parseInt(stock) : 0;

        // Đường dẫn lưu file vào thư mục image/products
        String uploadPath = getServletContext().getRealPath("/") + "image/img-khoai1"; // Lưu vào thư mục đúng
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs(); // Tạo thư mục nếu chưa tồn tại
        }

        String imageURL = null;
        Part filePart = request.getPart("up-hinh-anh");
        if (filePart != null && filePart.getSize() > 0) {
            String fileName = filePart.getSubmittedFileName();
            String filePath = uploadPath + File.separator + fileName;
            filePart.write(filePath); // Lưu file vào server
            imageURL = "image/img-khoai1/" + fileName; // URL để lưu vào database
        }


        // Gọi DAO để thêm hoặc chỉnh sửa sản phẩm
        ProductAdminDAO productDao = new ProductAdminDAO();
        boolean isSuccess = false;

        if ("add".equals(action)) {
            Products newProduct = new Products();
            newProduct.setProductName(productName);
            newProduct.setCategoryID(categoryID);
            newProduct.setPrice(price);
            newProduct.setStockQuantity(stockQuantity);
            newProduct.setShortDescription(shortDescription);
            if (imageURL != null) {
                newProduct.setImageURL(imageURL);
            }

            isSuccess = productDao.addProduct(newProduct);
            response.sendRedirect("admin.jsp?message=" + (isSuccess ? "Thêm sản phẩm thành công!" : "Thêm sản phẩm thất bại!"));
        } else if ("edit".equals(action)) {
            Products existingProduct = productDao.getProductById(id);
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
                response.sendRedirect("admin.jsp?message=" + (isUpdated ? "Cập nhật sản phẩm thành công!" : "Đã xảy ra lỗi khi cập nhật sản phẩm."));
            } else {
                response.sendRedirect("admin.jsp?message=Không tìm thấy sản phẩm để chỉnh sửa.");
            }
        }
    }
}