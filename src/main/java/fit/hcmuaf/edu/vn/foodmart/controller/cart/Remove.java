package fit.hcmuaf.edu.vn.foodmart.controller.cart;

import fit.hcmuaf.edu.vn.foodmart.Cart.Cart;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet(name = "Remove", value = "/remove-cart")
public class Remove extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            int productId = Integer.parseInt(request.getParameter("pid"));

            HttpSession session = request.getSession(true);
            Cart cart = (Cart) session.getAttribute("cart");

            if (cart != null) {
                cart.remove(productId);
            }

            session.setAttribute("cart", cart);
            response.getWriter().write("{\"status\": \"success\", \"message\": \"Product removed from cart\"}");
        } catch (NumberFormatException e) {
            e.printStackTrace();
            response.getWriter().write("{\"status\": \"error\", \"message\": \"Invalid product ID\"}");
        }    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}


