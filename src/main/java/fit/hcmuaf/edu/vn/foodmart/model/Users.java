package fit.hcmuaf.edu.vn.foodmart.model;

import java.io.Serializable;
import java.sql.Timestamp;

<<<<<<< HEAD
public class Users implements Serializable {

    private int userId;
    private String username;
    private String password;
    private String email;
    private String phone;
    private String address;
    private String fullName;
    private String role;
    private String userStatus;

    public Users() {
    }


    public Users(String username, String password, String email, String phone) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

//    public Users( String phone, String email, String address, String fullName,boolean isActive) {
//
//        this.phone = phone;
//        this.email = email;
//        this.address = address;
//       this.fullName = fullName;
//   }


    public Users(String username, String password, String email, String phone, String role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

=======
public class Users {
    private int id;
    private String username;
    private String passwordHash;
    private String email;
    private String phone;
    private String address;
    private String imageURLUser;
    private int roleId;
    private String userStatus;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    // Getters and Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
<<<<<<< HEAD

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(String userStatus) {
        this.userStatus = userStatus;
    }

    @Override
    public String toString() {
        return "Users{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", fullName='" + fullName + '\'' +
                ", role='" + role + '\'' +
                ", userStatus='" + userStatus + '\'' +
                '}';
=======
    public String getPasswordHash() {
        return passwordHash;
    }
    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getImageURLUser() {
        return imageURLUser;
    }
    public void setImageURLUser(String imageURLUser) {
        this.imageURLUser = imageURLUser;
    }
    public int getRoleId() {
        return roleId;
    }
    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }
    public String getUserStatus() {
        return userStatus;
    }
    public void setUserStatus(String userStatus) {
        this.userStatus = userStatus;
    }
    public Timestamp getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
    public Timestamp getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
>>>>>>> 01ab1c9e44c8b034c5de4939514203e3f436944f
    }
}