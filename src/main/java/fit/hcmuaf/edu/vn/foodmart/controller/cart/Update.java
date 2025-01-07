package fit.hcmuaf.edu.vn.foodmart.controller.cart;

import fit.hcmuaf.edu.vn.foodmart.Cart.Cart;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "Update", value = "/update-cart")
public class Update extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        Cart cart = (Cart) session.getAttribute("cart");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            int pid = Integer.parseInt(request.getParameter("pid"));
            int quantity = Integer.parseInt(request.getParameter("quantity"));

            if (cart != null) {
                boolean updated = cart.update(pid, quantity);

                if (updated) {
                    session.setAttribute("cart", cart);
                    session.setAttribute("totalAmount", cart.getTotalAmount());
                    session.setAttribute("totalQuantity", cart.getTotalQuantity());
                    response.sendRedirect("shoppingcart.jsp");

                    // Trả về JSON response
                    PrintWriter out = response.getWriter();
                    out.print("{\"success\": true, \"totalAmount\": " + cart.getTotalAmount() + "}");
                    out.flush();

                } else {
                    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                    response.getWriter().write("{\"success\": false, \"message\": \"Cập nhật thất bại!\"}");
                }
            } else {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                response.getWriter().write("{\"success\": false, \"message\": \"Giỏ hàng không tồn tại!\"}");
            }
        } catch (NumberFormatException e) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("{\"success\": false, \"message\": \"Tham số không hợp lệ!\"}");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}