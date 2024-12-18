package fit.hcmuaf.edu.vn.foodmart.controller;

import fit.hcmuaf.edu.vn.foodmart.model.Products;
import fit.hcmuaf.edu.vn.foodmart.service.ProductService;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "ProductController", urlPatterns = {"/product-details"})
public class ProductController extends HttpServlet {

    private final ProductService productService = new ProductService(); // Tầng service xử lý logic

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            // Lấy ID sản phẩm từ query parameter
            String productIdParam = req.getParameter("id");
            if (productIdParam == null || productIdParam.isEmpty()) {
                resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Product ID is required");
                return;
            }
            int productId = Integer.parseInt(productIdParam);

            // Lấy thông tin chi tiết sản phẩm
            Products product = productService.getProductDetailsById(productId);
            if (product == null) {
                resp.sendError(HttpServletResponse.SC_NOT_FOUND, "Product not found");
                return;
            }

            // Gửi sản phẩm tới trang JSP
            req.setAttribute("product", product);

            // Chuyển hướng tới productdetails.jsp
            req.getRequestDispatcher("productdetail.jsp").forward(req, resp);

        } catch (NumberFormatException e) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid Product ID");
        } catch (Exception e) {
            resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "An error occurred while processing the request");
            e.printStackTrace();
        }
    }
}
