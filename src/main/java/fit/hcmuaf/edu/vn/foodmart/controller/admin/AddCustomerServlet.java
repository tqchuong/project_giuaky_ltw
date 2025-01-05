package fit.hcmuaf.edu.vn.foodmart.controller.admin;

import fit.hcmuaf.edu.vn.foodmart.dao.admin.UserAdminDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Users;
import fit.hcmuaf.edu.vn.foodmart.utils.PasswordUtils;

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
        String action = request.getParameter("action"); // "add" hoặc "edit"
        String fullname = request.getParameter("fullname");
        String phone = request.getParameter("phone");
        String password = request.getParameter("password");
        String status = request.getParameter("status") != null ? "Hoạt động" : "Bị khóa";

        // Xử lý giá trị id để tránh lỗi NumberFormatException
        String idParam = request.getParameter("id");
        int id = (idParam != null && !idParam.isEmpty()) ? Integer.parseInt(idParam) : 0;


        UserAdminDAO userDao = new UserAdminDAO();

        if ("add".equals(action)) {
            // Thêm khách hàng mới
            Users newUser = new Users();
            newUser.setUsername(fullname);
            newUser.setPhone(phone);
            newUser.setPassword(PasswordUtils.hashPassword(password)); // Hash password
            newUser.setUserStatus("Hoạt động"); // Mặc định trạng thái
            newUser.setRole("User"); // Vai trò mặc định là User
            userDao.addUser(newUser);
        } else if ("edit".equals(action)) {
            // Chỉnh sửa khách hàng
            Users existingUser = userDao.getUserById(id); // Lấy thông tin user theo ID
            if (existingUser != null) {
                existingUser.setUsername(fullname);
                existingUser.setPhone(phone);
                if (password != null && !password.isEmpty()) {
                    existingUser.setPassword(PasswordUtils.hashPassword(password));
                }
                existingUser.setUserStatus(status); // Cập nhật trạng thái
                userDao.updateUser(existingUser);
            }
        }

        // Điều hướng về trang admin
        response.sendRedirect("admin.jsp");
    }
}
