package fit.hcmuaf.edu.vn.foodmart.controller.cart;

import fit.hcmuaf.edu.vn.foodmart.Cart.Cart;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import fit.hcmuaf.edu.vn.foodmart.service.ProductService;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "Add", value = "/add-cart")
public class Add extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ProductService ps = new ProductService();
        int productId = Integer.parseInt(request.getParameter("pid"));
        int quantity = Integer.parseInt(request.getParameter("quantity"));
        String redirectUrl = request.getParameter("redirectUrl"); // Lấy số lượng từ request
        Products product = ps.getProductDetailsById(productId);

        HttpSession session = request.getSession(true);
        Cart cart = (Cart) session.getAttribute("cart");
        if (cart == null) {
            cart = new Cart();
        }

        if (product != null) {
            cart.add(product, quantity); // Thêm sản phẩm với số lượng chỉ định
            session.setAttribute("cart", cart);
            session.setAttribute("productTypesCount", cart.getProductTypesCount());
            session.setAttribute("totalAmount", cart.getTotalAmount());
        }
        response.sendRedirect(redirectUrl);
// Không trả về bất kỳ thông báo nào.
    }


        @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}


