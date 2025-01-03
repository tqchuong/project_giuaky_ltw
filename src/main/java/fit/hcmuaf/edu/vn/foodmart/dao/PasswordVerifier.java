package fit.hcmuaf.edu.vn.foodmart.dao;

import org.mindrot.jbcrypt.BCrypt;

public class PasswordVerifier {
    public static void main(String[] args) {
        String hashedPassword = "$2a$12$tpvrVmVX62xzM5zyPdCf7uGE4wT2/DIRVQ/M317ZoCrvuMXJJJXxC"; // Chuỗi băm
        String[] testPasswords = {"admin123", "password123", "123456", "admin"}; // Thêm các mật khẩu mà bạn nghi ngờ

        for (String testPassword : testPasswords) {
            if (BCrypt.checkpw(testPassword, hashedPassword)) {
                System.out.println("Mật khẩu gốc là: " + testPassword);
                return;
            }
        }
        System.out.println("Không tìm thấy mật khẩu khớp.");
    }
}
