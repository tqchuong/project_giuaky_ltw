package fit.hcmuaf.edu.vn.foodmart.dao;



import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.Products;
import fit.hcmuaf.edu.vn.foodmart.model.Users;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class UserDAO {

    public static Map<String, Users> userList = loadData();

    public UserDAO(){

    };

    private static Map<String, Users> loadData() {
        Map<String, Users> userListTemp = new HashMap<>();
        String sql = "SELECT * FROM users";
        try (Connection connection = DBConnect.getConnection();
             PreparedStatement ps = connection.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()){
            while (rs.next()) {
                String username = rs.getString("username");
                String password = rs.getString("password");
                String name = rs.getString("name");

                Users users = new Users(username, password,name);
                userListTemp.put(users.getUsername(), users);
            }

        } catch (SQLException e) {
            System.out.println("Lỗi khi truy vấn dữ liệu: " + e.getMessage());
            e.printStackTrace();
        }
        return userListTemp;
    }

    public boolean checkLogin(String username, String password) {
        Users user = userList.get(username);
        if (user != null) {
            if(user.getPassword().equals(password)) {
                return true;
            } else {
                return false;
            }
        } else{
            return false;
        }
    }

    public static void main(String[] args) {
        UserDAO dao = new UserDAO();
        Map<String, Users> userList = loadData();

        // In danh sách
        for (Users user : userList.values()) {
            System.out.println(user);
        }

        System.out.println(dao.userList);
        System.out.println(dao.checkLogin("tqc","123"));
        System.out.println(dao.checkLogin("tqc","1234"));
        System.out.println(dao.checkLogin("tqcc","123"));

    }
}
