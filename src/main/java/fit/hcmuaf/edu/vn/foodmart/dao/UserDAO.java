package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Users;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.HashMap;
import java.util.Map;

public class UserDAO {

    private static Jdbi jdbi;

    static {
        // Khởi tạo đối tượng Jdbi từ DBConnect
        jdbi = DBConnect.getJdbi();
    }

    // Lấy danh sách người dùng từ cơ sở dữ liệu và lưu vào bộ nhớ
    public static Map<String, Users> loadData() {
        Map<String, Users> userListTemp = new HashMap<>();
        String sql = "SELECT * FROM users";

        try (Handle handle = jdbi.open()) {
            // Sử dụng JDBI để thực hiện truy vấn và ánh xạ kết quả vào danh sách người dùng
            handle.select(sql)
                    .mapToBean(Users.class)  // Ánh xạ kết quả vào đối tượng Users
                    .forEach(user -> userListTemp.put(user.getUsername(), user));  // Thêm vào Map với key là username
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn dữ liệu: " + e.getMessage());
            e.printStackTrace();
        }

        return userListTemp;
    }

    // Kiểm tra thông tin đăng nhập của người dùng
    public boolean checkLogin(String username, String password) {
        // Kiểm tra người dùng trong cơ sở dữ liệu
        String sql = "SELECT * FROM users WHERE username = ? AND password = ?";

        try (Handle handle = jdbi.open()) {
            // Truy vấn để kiểm tra đăng nhập
            Users user = handle.createQuery(sql)
                    .bind(0, username)
                    .bind(1, password)
                    .mapToBean(Users.class)
                    .findOnly();  // Trả về đối tượng người dùng nếu tìm thấy

            return user != null;  // Trả về true nếu tìm thấy người dùng, false nếu không
        } catch (Exception e) {
            System.out.println("Lỗi khi kiểm tra đăng nhập: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }
    // Lấy thông tin người dùng theo tên người dùng
    public Users getUserByUsername(String username) {
        String sql = "SELECT * FROM users WHERE username = ?";

        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind(0, username)
                    .mapToBean(Users.class)
                    .findOnly();  // Trả về đối tượng người dùng nếu tìm thấy
        } catch (Exception e) {
            System.out.println("Lỗi khi lấy thông tin người dùng: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    // Phương thức main để kiểm tra và truy vấn dữ liệu
    public static void main(String[] args) {
        // Lấy danh sách người dùng từ cơ sở dữ liệu
        Map<String, Users> userList = loadData();

        // In danh sách người dùng
        for (Users user : userList.values()) {
            System.out.println(user);
        }

        // Kiểm tra đăng nhập
        UserDAO dao = new UserDAO();
        System.out.println(dao.checkLogin("tqc", "123"));  // True nếu thành công
        System.out.println(dao.checkLogin("tqc", "1234"));  // False nếu sai mật khẩu
        System.out.println(dao.checkLogin("tqcc", "123"));  // False nếu không có người dùng
    }
}