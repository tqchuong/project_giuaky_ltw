package fit.hcmuaf.edu.vn.foodmart.controller;

import fit.hcmuaf.edu.vn.foodmart.dao.UserDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Users;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;


import java.io.IOException;

@WebServlet(name = "LoginController", value = "/login")
public class LoginController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        String action = request.getParameter("action");

        if (action == null) {
            System.out.println("Không thực hiện gì hết!");
        } else if (action.equals("login")) {
            String username = request.getParameter("username");
            String password = request.getParameter("password");

            // Kiểm tra đăng nhập
            if (new UserDAO().checkLogin(username, password)) {
                // Nếu đăng nhập thành công
                HttpSession session = request.getSession();
                Users user = UserDAO.userList.get(username);
                session.setAttribute("userlogin", user);
                // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
                response.sendRedirect("home.jsp");
            } else {
                // Nếu đăng nhập không thành công
                request.setAttribute("loginError", "Tên đăng nhập hoặc mật khẩu không đúng!");
                // Chuyển hướng người dùng quay lại trang đăng nhập
                request.getRequestDispatcher("login.jsp").forward(request, response);
            }
        } else if (action.equals("res")) {
            // Xử lý hành động đăng ký (nếu có)
        } else if (action.equals("logout")) {
            // Xử lý hành động đăng xuất (nếu có)
        }
    }

}
