package fit.hcmuaf.edu.vn.foodmart.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import fit.hcmuaf.edu.vn.foodmart.dao.DiscountDAO;
import fit.hcmuaf.edu.vn.foodmart.model.Discount;
import java.io.IOException;
import java.util.List;
@WebServlet(name = "FlashSaleController", value = "/flashsale")
public class FlashSaleController extends HttpServlet {

    private DiscountDAO discountDAO;

    @Override
    public void init() throws ServletException {
        super.init();
        discountDAO = new DiscountDAO();  // Khởi tạo DiscountDAO
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Lấy danh sách các sản phẩm giảm giá
        List<Discount> activeDiscounts = discountDAO.getActiveDiscounts();

        // Gán danh sách sản phẩm vào request
        request.setAttribute("activeDiscounts", activeDiscounts);

        // Chuyển tiếp đến JSP để hiển thị
        RequestDispatcher dispatcher = request.getRequestDispatcher("/flashsale.jsp");
        dispatcher.forward(request, response);
    }

    // doPost nếu cần xử lý thêm (ví dụ: lọc hoặc tìm kiếm sản phẩm)
}
