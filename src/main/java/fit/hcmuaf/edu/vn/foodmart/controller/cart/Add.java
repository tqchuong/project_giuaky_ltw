package fit.hcmuaf.edu.vn.foodmart.controller.cart;

import fit.hcmuaf.edu.vn.foodmart.Cart.Cart;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import fit.hcmuaf.edu.vn.foodmart.service.ProductService;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet(name = "Add", value = "/add-cart")
public class Add extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ProductService ps = new ProductService();
        Products pid = ps.getProductDetailsById(Integer.parseInt(request.getParameter("pid")));

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        if (pid == null) {
            response.getWriter().write("{\"status\": \"error\", \"message\": \"Product not found\"}");
        } else {
            HttpSession session = request.getSession(true);
            Cart cart = (Cart) session.getAttribute("cart");
            if (cart == null) {
                cart = new Cart();
            }

            cart.add(pid);
            session.setAttribute("cart", cart);

            response.getWriter().write("{\"status\": \"success\", \"message\": \"Product added to cart\"}");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}


