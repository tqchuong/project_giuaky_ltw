//package fit.hcmuaf.edu.vn.foodmart.controller.admin;
//
//import jakarta.servlet.*;
//import jakarta.servlet.http.*;
//import jakarta.servlet.annotation.*;
//import fit.hcmuaf.edu.vn.foodmart.dao.admin.UserAdminDAO;
//import fit.hcmuaf.edu.vn.foodmart.model.Users;
//import fit.hcmuaf.edu.vn.foodmart.utils.PasswordUtils;
//import java.io.PrintWriter;
//
//import jakarta.servlet.ServletException;
//import jakarta.servlet.annotation.WebServlet;
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@WebServlet("/deleteUser")
//public class DeleteUserServlet extends HttpServlet {
//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
//        response.setContentType("application/json");
//        PrintWriter out = response.getWriter();
//
//        try {
//            String idStr = request.getParameter("id");
//            if (idStr != null) {
//                int userId = Integer.parseInt(idStr);
//                UserAdminDAO userDAO = new UserAdminDAO(); // DAO để xử lý logic DB
//                boolean result = userDAO.deleteUser(userId);
//
//                if (result) {
//                    out.write("{\"success\": true, \"message\": \"Xóa người dùng thành công!\"}");
//                } else {
//                    out.write("{\"success\": false, \"message\": \"Không tìm thấy người dùng để xóa!\"}");
//                }
//            } else {
//                out.write("{\"success\": false, \"message\": \"ID người dùng không hợp lệ!\"}");
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            out.write("{\"success\": false, \"message\": \"Có lỗi xảy ra trên server!\"}");
//        }
//    }
//}
//
//
