package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Users;
import fit.hcmuaf.edu.vn.foodmart.utils.PasswordUtils;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;


import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class UserDAO implements ObjectDAO {

    private static Jdbi jdbi;
    public static Map<String, Users> userList ;

    static {
        // Khởi tạo đối tượng Jdbi từ DBConnect
        jdbi = DBConnect.getJdbi();
        userList = loadData();
    }

    // Lấy danh sách người dùng từ cơ sở dữ liệu và lưu vào bộ nhớ
    private static Map<String, Users> loadData() {
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

    public boolean checkLogin(String username, String password) {
        Users user = userList.get(username); // Lấy thông tin người dùng từ danh sách
        if (user != null) {
            String hashedPassword = user.getPassword(); // Lấy mật khẩu đã mã hóa
            if (hashedPassword != null && PasswordUtils.verifyPassword(password, hashedPassword)) {
                user.setPassword(null); // Xóa mật khẩu để bảo mật
                return true; // Đăng nhập thành công
            } else {
                return false; // Sai mật khẩu
            }
        } else {
            return false; // Người dùng không tồn tại
        }
    }

    // Lấy thông tin người dùng theo tên người dùng
    public Users getUserByUsername(String username) {
        String sql = "SELECT * FROM users WHERE username = ?";

        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind(0, username)
                    .mapToBean(Users.class)
                    .findOne().orElse(null);  // Trả về đối tượng người dùng nếu tìm thấy
        } catch (Exception e) {
            System.out.println("Lỗi khi lấy thông tin người dùng: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean add(Object obj) {
        Users user = (Users) obj;

        // Thêm vào danh sách trong bộ nhớ
        userList.put(user.getUsername(), user);

        // Câu lệnh SQL để thêm người dùng vào cơ sở dữ liệu
        String sql = "INSERT INTO `users` (`Username`, `Password`, `Email`, `Phone`) \n" +
                        "VALUES (?, ?, ?, ?)";

        try (Handle handle = jdbi.open()) {
            handle.createUpdate(sql)
                    .bind(0, user.getUsername())
                    .bind(1, user.getPassword())
                    .bind(2, user.getEmail())
                    .bind(3, user.getPhone())
                    .execute();
            return true;
        } catch (Exception e) {
            // Ghi lỗi vào log thay vì in ra console
            System.err.println("Lỗi khi thêm người dùng: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean del(String id) {
        if (!userList.containsKey(id)) {
            System.out.println("Không tìm thấy user với id: " + id);
            return false;
        }
        userList.remove(id);
        String sql ="DELETE FROM users WHERE username = ?";
        try (Handle handle = jdbi.open()) {
            int rowsAffected = handle.createUpdate(sql)
                    .bind(0, id)
                    .execute();
            // Kiểm tra số hàng bị ảnh hưởng
            if (rowsAffected > 0) {
                System.out.println("Xóa thành công user với id: " + id);
                return true;
            } else {
                System.out.println("Không xóa được user với id: " + id);
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean edit(String id, Object obj) {
        Users user = (Users) obj;
        userList.replace(id, (Users) obj);
        String sql ="UPDATE users SET password = ? WHERE username = ?";
        try (Handle handle = jdbi.open()) {
            handle.createUpdate(sql)
                    .bind(0, user.getPassword())
                    .bind(1, user.getUsername())
                    .execute();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean changePassword(String username, String oldPassword, String newPassword) {
        // Lấy thông tin user từ userList
        Users user = userList.get(username);

//        // Kiểm tra xem user có tồn tại không
//        if (user == null) {
//            System.out.println("User không tồn tại: " + username);
//            return false;
//        }
//
//        // Kiểm tra mật khẩu cũ
//        if (!user.getPassword().equals(oldPassword)) {
//            System.out.println("Mật khẩu cũ không đúng cho user: " + username);
//            return false;
//        }


        // Cập nhật mật khẩu mới
        user.setPassword(newPassword);
        userList.replace(user.getUsername(), user);

        // Cập nhật vào cơ sở dữ liệu
        String sql = "UPDATE users SET password = ? WHERE username = ?";
        try (Handle handle = jdbi.open()) {
            int rowsAffected = handle.createUpdate(sql)
                    .bind(0, newPassword)  // Gắn mật khẩu mới
                    .bind(1, username)     // Gắn tên người dùng
                    .execute();

            if (rowsAffected > 0) {
                System.out.println("Đổi mật khẩu thành công cho user: " + username);
                return true;
            } else {
                System.out.println("Không đổi được mật khẩu trong cơ sở dữ liệu cho user: " + username);
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    public boolean userExists(String username) {
        String sql = "SELECT COUNT(*) FROM users WHERE username = ?";
        try (Handle handle = jdbi.open()) {
            int count = handle.createQuery(sql)
                    .bind(0, username)
                    .mapTo(int.class)
                    .first();
            return count > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false; // Nếu không có dòng dữ liệu, trả về false
        }
    }
    public static boolean sendMail(String to, String subject, String text) {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "465");
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("pl748664@gmail.com", "esov qzwb iohk uzsl");
            }
        });
        try {
            Message message = new MimeMessage(session);
            message.setHeader("Content-Type", "text/plain; charset=UTF-8");
            message.setFrom(new InternetAddress("pl748664@gmail.com"));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject(subject);
            message.setText(text);
            Transport.send(message);
        } catch (MessagingException e) {
            return false;
        }
        return true;
    }

    public boolean passwordRecorvery(String username, String email) {

        Users user = userList.get(username);
        if (user != null) {
            sendMail(email,"Khôi phục mật khẩu",user.getPassword());
            return true;
        } else {
            System.out.println("không có tài khoản");
        }
        return false;
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
//        Users user = new Users("hcm","123","hmc","22130029@st.hcmuaf.edu.vn");
//        System.out.println(dao.checkLogin("tqc", "123"));
//        System.out.println(dao.checkLogin("tqc", "1234"));
//        System.out.println(dao.checkLogin("tqcc", "123"));
//        System.out.println(dao.add(user));
        //System.out.println(dao.userExists("hmc2"));
//        System.out.println(dao.passwordRecorvery("tqc","gatrong015@gmail.com"));

    }
}
