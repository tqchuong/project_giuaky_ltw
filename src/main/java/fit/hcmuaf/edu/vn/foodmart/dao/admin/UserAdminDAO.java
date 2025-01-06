package fit.hcmuaf.edu.vn.foodmart.dao.admin;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Users;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class UserAdminDAO {

    private static Jdbi jdbi;

    static {
        jdbi = DBConnect.getJdbi(); // Kết nối với DB thông qua DBConnect
    }

    // 1. Lấy tất cả người dùng
    public List<Users> getAllUsers() {
        String sql = "SELECT * FROM users";
        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .mapToBean(Users.class)
                    .list(); // Trả về danh sách tất cả user
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // 2. Thêm người dùng mới
    public boolean addUser(Users user) {
        String sql = "INSERT INTO users (username, phone, password, role, user_status) VALUES (?, ?, ?, ?, ?)";
        try (Handle handle = jdbi.open()) {
            handle.createUpdate(sql)
                    .bind(0, user.getUsername())   // Tên đầy đủ
                    .bind(1, user.getPhone())      // Số điện thoại
                    .bind(2, user.getPassword())   // Mật khẩu
                    .bind(3, "User")               // Vai trò mặc định là 'User'
                    .bind(4, "Đang hoạt động")     // Trạng thái mặc định là 'Đang hoạt động'
                    .execute();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean updateUser(Users user) {
        String sql = "UPDATE users SET fullName=?, phone=?, password=?, user_status=? WHERE id=?";
        try (Handle handle = jdbi.open()) {
            handle.createUpdate(sql)
                    .bind(0, user.getFullName())    // Cập nhật tên đầy đủ
                    .bind(1, user.getPhone())       // Cập nhật số điện thoại
                    .bind(2, user.getPassword())    // Cập nhật mật khẩu
                    .bind(3, user.getUserStatus())  // Cập nhật trạng thái (Đang hoạt động / Bị khóa)
                    .bind(4, user.getId())          // Điều kiện tìm kiếm theo ID
                    .execute();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    // 4. Xóa người dùng
    public boolean deleteUser(int id) {
        String sql = "DELETE FROM users WHERE Id=?";
        try (Handle handle = jdbi.open()) {
            int rowsAffected = handle.createUpdate(sql)
                    .bind(0, id)  // Gắn giá trị Id vào câu lệnh SQL
                    .execute();
            return rowsAffected > 0;  // Kiểm tra xem có hàng nào bị xóa không
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    // 5. Tìm kiếm người dùng theo username
    public Users getUserByUsername(String username) {
        String sql = "SELECT * FROM users WHERE username=?";
        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind(0, username)
                    .mapToBean(Users.class)
                    .findOne()
                    .orElse(null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // 6. Tìm kiếm tất cả người dùng theo role
    public List<Users> getUsersByRole(String role) {
        String sql = "SELECT * FROM users WHERE role=?";
        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind(0, role)
                    .mapToBean(Users.class)
                    .list();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // 7. Kiểm tra sự tồn tại của người dùng
    public boolean userExists(String username) {
        String sql = "SELECT COUNT(*) FROM users WHERE username=?";
        try (Handle handle = jdbi.open()) {
            int count = handle.createQuery(sql)
                    .bind(0, username)
                    .mapTo(Integer.class)
                    .findOne()
                    .orElse(0);
            return count > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    // Phương thức main để kiểm thử
    public static void main(String[] args) {
        UserAdminDAO dao = new UserAdminDAO();

        System.out.println("====== LẤY TẤT CẢ NGƯỜI DÙNG ======");
        List<Users> users = dao.getAllUsers();
        users.forEach(System.out::println);

//        System.out.println("\n====== THÊM NGƯỜI DÙNG ======");
//        Users newUser = new Users();
//        newUser.setFullName("Nguyễn Văn A");
//        newUser.setPhone("0987654321");
//        newUser.setPassword("123456");
//        newUser.setUserStatus("Đang hoạt động");
//        System.out.println("Thêm người dùng thành công: " + dao.addUser(newUser));
//
//        System.out.println("\n====== CẬP NHẬT NGƯỜI DÙNG ======");
//        newUser.setUserId(1); // ID của người dùng cần cập nhật
//        newUser.setFullName("Nguyễn Văn B");
//        newUser.setPhone("0123456789");
//        newUser.setPassword("654321");
//        newUser.setUserStatus("Bị khóa");
//        System.out.println("Cập nhật người dùng thành công: " + dao.updateUser(newUser));
//
//        System.out.println("\n====== XÓA NGƯỜI DÙNG ======");
//        System.out.println("Xóa người dùng thành công: " + dao.deleteUser(1));
    }
}
