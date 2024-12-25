package fit.hcmuaf.edu.vn.foodmart.controller.cart;

import fit.hcmuaf.edu.vn.foodmart.Cart.Cart;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "Update", value = "/update-cart")
public class Update extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            int productId = Integer.parseInt(request.getParameter("pid"));
            int quantity = Integer.parseInt(request.getParameter("quantity"));

            HttpSession session = request.getSession(true);
            Cart cart = (Cart) session.getAttribute("cart");

            if (cart != null) {
                boolean updated = cart.update(productId, quantity);
                if (!updated) {
                    response.getWriter().write("{\"status\": \"error\", \"message\": \"Invalid quantity\"}");
                    return;
                }
            }

            session.setAttribute("cart", cart);
            response.getWriter().write("{\"status\": \"success\", \"message\": \"Cart updated successfully\"}");
        } catch (NumberFormatException e) {
            e.printStackTrace();
            response.getWriter().write("{\"status\": \"error\", \"message\": \"Invalid input\"}");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}


