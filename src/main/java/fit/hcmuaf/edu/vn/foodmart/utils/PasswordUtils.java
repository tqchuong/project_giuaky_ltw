package fit.hcmuaf.edu.vn.foodmart.utils;

import org.mindrot.jbcrypt.BCrypt;

public class PasswordUtils {
    public static String hashPassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt(12));
    }

    public static boolean verifyPassword(String password, String hashedPassword) {
        return BCrypt.checkpw(password, hashedPassword);
    }
    public static void main(String[] args) {
        // Mật khẩu gốc
        String originalPassword = "123456";
        System.out.println("Mật khẩu gốc: " + originalPassword);

        // Mã hóa mật khẩu
        String hashedPassword = PasswordUtils.hashPassword(originalPassword);
        System.out.println("Mật khẩu đã mã hóa: " + hashedPassword);

        // Kiểm tra mật khẩu đúng
        boolean isMatch = PasswordUtils.verifyPassword(originalPassword, hashedPassword);
        System.out.println("Mật khẩu khớp: " + isMatch);

    }
}
