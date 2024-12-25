package fit.hcmuaf.edu.vn.foodmart.controller;

import fit.hcmuaf.edu.vn.foodmart.dao.UserDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Users;
import fit.hcmuaf.edu.vn.foodmart.utils.PasswordUtils;
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
<<<<<<< HEAD
                HttpSession session = request.getSession(true);
                session.setAttribute("auth", user);

=======
                HttpSession session = request.getSession();
                session.setAttribute("userlogin", user);
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f

                // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
                response.sendRedirect("home.jsp");
            } else {
                // Nếu đăng nhập không thành công, thông báo lỗi
                request.setAttribute("loginError", "Tên đăng nhập hoặc mật khẩu không đúng!");
                request.getRequestDispatcher("login.jsp").forward(request, response);
            }
        } else if (action.equals("res")) {
            // Xử lý hành động đăng ký
            String username = request.getParameter("username");
            String phone = request.getParameter("phone");
            String email = request.getParameter("email");
            String password = request.getParameter("password");

            // Kiểm tra mật khẩu tối thiểu 6 ký tự
            if (password == null || password.length() < 6) {
                request.setAttribute("error", "Mật khẩu phải có ít nhất 6 ký tự.");
                request.setAttribute("showRegisterForm", true);
                request.getRequestDispatcher("login.jsp").forward(request, response);
                return;
            }
            String hashedPassword = PasswordUtils.hashPassword(password);

            UserDAO userDAO = new UserDAO();
            Users user = new Users(username, hashedPassword,email,phone);

            // Kiểm tra nếu tên người dùng đã tồn tại
            if (userDAO.userExists(username)) {
                request.setAttribute("error", "Tên người dùng đã tồn tại.");
                request.setAttribute("showRegisterForm", true);
                request.getRequestDispatcher("login.jsp").forward(request, response);
                return;
            }
            // Thêm người dùng vào cơ sở dữ liệu
            if (userDAO.add(user)) {
                // Tạo session và chuyển hướng tới trang đăng nhập
                HttpSession session = request.getSession(true);
                session.setAttribute("auth", user);  // Lưu thông tin người dùng vào session
                response.sendRedirect("home.jsp");
            } else {
                request.setAttribute("error", "Có lỗi xảy ra trong quá trình đăng ký.");
                request.getRequestDispatcher("login.jsp").forward(request, response);
            }

        } else if (action.equals("logout")) {
            // Xử lý hành động đăng xuất
            HttpSession session = request.getSession();
            session.invalidate();  // Hủy session khi đăng xuất
<<<<<<< HEAD
            response.sendRedirect("home.jsp");  // Chuyển hướng người dùng về trang login
        } else if(action.equals("forgetPass")){
            String username = request.getParameter("username");
            String email = request.getParameter("email");
            UserDAO userDAO = new UserDAO();
            if(userDAO.passwordRecorvery(username,email)){

                request.getRequestDispatcher("login.jsp").forward(request, response);
            }
=======
            response.sendRedirect("login.jsp");  // Chuyển hướng người dùng về trang login
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
        }
    }
}