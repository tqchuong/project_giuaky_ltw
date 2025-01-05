package fit.hcmuaf.edu.vn.foodmart.controller.admin;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import fit.hcmuaf.edu.vn.foodmart.dao.admin.UserAdminDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Users;
import fit.hcmuaf.edu.vn.foodmart.utils.PasswordUtils;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/deleteUser")
public class DeleteUserServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Đọc ID từ request
        int id = Integer.parseInt(request.getParameter("id"));

        // Gọi DAO để xóa người dùng
        UserAdminDAO userDao = new UserAdminDAO();
        boolean success = userDao.deleteUser(id);

        // Trả về kết quả dưới dạng JSON
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        if (success) {
            out.print("{\"success\": true, \"message\": \"Xóa thành công!\"}");
        } else {
            out.print("{\"success\": false, \"message\": \"Xóa thất bại!\"}");
        }
        out.flush();
    }
}

