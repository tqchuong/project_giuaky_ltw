package fit.hcmuaf.edu.vn.foodmart.database;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DBProperties {
    private static Properties prop = new Properties();

    static {
        try {
            prop.load(DBProperties.class.getClassLoader().getResourceAsStream("database.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String host() {
        String host = prop.getProperty("database.host");
        if (host == null) {
            System.err.println("Host not found in properties file.");
            return "localhost"; // Giá trị mặc định
        }
        return host;
    }

    public static int port() {
        String portStr = prop.getProperty("database.port");
        if (portStr == null) {
            System.err.println("Port not found in properties file. Using default port 3306.");
            return 3306; // Giá trị mặc định
        }
        try {
            return Integer.parseInt(portStr);
        } catch (NumberFormatException e) {
            System.err.println("Invalid port number in properties file. Using default port 3306.");
            return 3306; // Giá trị mặc định
        }
    }

    public static String username() {
        String username = prop.getProperty("database.username");
        if (username == null) {
            System.err.println("Username not found in properties file.");
            return "root"; // Giá trị mặc định
        }
        return username;
    }

    public static String password() {
        String password = prop.getProperty("database.password");
        if (password == null) {
            System.err.println("Password not found in properties file.");
            return ""; // Giá trị mặc định
        }
        return password;
    }

    public static String dbname() {
        String dbname = prop.getProperty("database.dbname");
        if (dbname == null) {
            System.err.println("Database name not found in properties file.");
            return "test1"; // Giá trị mặc định
        }
        return dbname;
    }

    public static String option() {
        String option = prop.getProperty("database.option");
        if (option == null) {
            System.err.println("Option not found in properties file.");
            return "useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC"; // Giá trị mặc định
        }
        return option;
    }
    public static void main(String[] args) {
        String url = "jdbc:mysql://" + DBProperties.host() + ":" + DBProperties.port() + "/" + DBProperties.dbname() + "?" + DBProperties.option();
        String username = DBProperties.username();
        String password = DBProperties.password();

        try (Connection conn = DriverManager.getConnection(url, username, password)) {
            System.out.println("Connection successful!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
