package fit.hcmuaf.edu.vn.foodmart.controller.admin;

import fit.hcmuaf.edu.vn.foodmart.dao.admin.UserAdminDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Users;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/addCustomer")
public class AddCustomerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Lấy dữ liệu từ form
        String fullname = request.getParameter("fullname");
        String phone = request.getParameter("phone");
        String password = request.getParameter("password");

        // Tạo đối tượng Users
        Users user = new Users();
        user.setUsername(fullname);
        user.setPhone(phone);
        user.setPassword(password); // Bạn nên mã hóa mật khẩu trước khi lưu

        // Thêm user vào DB
        UserAdminDAO userAdminDAO = new UserAdminDAO();
        boolean isAdded = userAdminDAO.addUser(user);

        // Kiểm tra kết quả và chuyển hướng
        if (isAdded) {
            response.sendRedirect("/admin.jsp?success=1");
        } else {
            response.sendRedirect("/admin.jsp?error=1");
        }
    }
}