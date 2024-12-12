package fit.hcmuaf.edu.vn.foodmart.model;

import java.io.Serializable;

public class Users implements Serializable {

    private String username;
    private String password;
    private String name;



    public Users() {
    }

    public Users( String username, String password, String name) {

        this.username = username;
        this.password = password;
        this.name = name;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Users{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
