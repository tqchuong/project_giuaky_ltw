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
        // Xử lý các yêu cầu GET (nếu có)
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
            UserDAO userDAO = new UserDAO();
            if (userDAO.checkLogin(username, password)) {
                // Nếu đăng nhập thành công, lấy thông tin người dùng từ cơ sở dữ liệu
                Users user = userDAO.getUserByUsername(username);

                // Tạo session và lưu thông tin người dùng
                HttpSession session = request.getSession();
                session.setAttribute("userlogin", user);

                // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
                response.sendRedirect("home.jsp");
            } else {
                // Nếu đăng nhập không thành công, thông báo lỗi
                request.setAttribute("loginError", "Tên đăng nhập hoặc mật khẩu không đúng!");
                request.getRequestDispatcher("login.jsp").forward(request, response);
            }
        } else if (action.equals("res")) {
            // Xử lý hành động đăng ký (nếu có)
        } else if (action.equals("logout")) {
            // Xử lý hành động đăng xuất
            HttpSession session = request.getSession();
            session.invalidate();  // Hủy session khi đăng xuất
            response.sendRedirect("login.jsp");  // Chuyển hướng người dùng về trang login
        }
    }
}
