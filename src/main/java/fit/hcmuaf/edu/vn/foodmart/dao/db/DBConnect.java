package fit.hcmuaf.edu.vn.foodmart.dao.db;

import java.sql.*;

public class DBConnect {
    static Connection conn;

    static String url = "jdbc:mysql://" + DBProperties.host() + ":" + DBProperties.port() + "/" + DBProperties.dbname() + "?" + DBProperties.option();

    // Trả về một đối tượng Connection
    public static Connection getConnection() {
        try {
            if (conn == null || conn.isClosed()) {
                Class.forName("com.mysql.cj.jdbc.Driver");
                conn = DriverManager.getConnection(url, DBProperties.username(), DBProperties.password());
                System.out.println("Kết nối đến CSDL thành công!");
            }
            return conn;
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
            System.out.println("Không thể kết nối đến CSDL. Vui lòng kiểm tra cấu hình!");
            return null;
        }
    }

    // Trả về một đối tượng Statement
    public static Statement getStatement() {
        try {
            if (conn == null || conn.isClosed()) {
                conn = getConnection();
            }
            return conn.createStatement();
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    // Test kết nối
    public static void main(String[] args) throws SQLException {
        Statement statement = getStatement();
        if (statement != null) {
            ResultSet rs = statement.executeQuery("SELECT * FROM products");
            while (rs.next()) {
                System.out.println(rs.getInt("ProductID") + " " +
                        rs.getString("ProductName") + " " +
                        rs.getInt("CategoryID") + " " +
                        rs.getDouble("Price") + " " +
                        rs.getString("ImageURL") + " " +
                        rs.getString("Description"));
            }
            ResultSet rsUsers = statement.executeQuery("SELECT * FROM users");

            while (rsUsers.next()) {
                System.out.println(
                        rsUsers.getString("username") + " " +
                        rsUsers.getString("password") + " " +
                        rsUsers.getString("name"));
            }
        } else {
            System.out.println("Không thể tạo Statement. Vui lòng kiểm tra cấu hình!");
        }
    }

}
