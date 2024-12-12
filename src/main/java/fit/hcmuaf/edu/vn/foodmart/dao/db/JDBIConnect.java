//package fit.hcmuaf.edu.vn.foodmart.dao.db;
//
//import com.mysql.cj.jdbc.MysqlDataSource;
//import fit.hcmuaf.edu.vn.foodmart.model.Users;
//import org.jdbi.v3.core.Jdbi;
//
//import java.sql.SQLException;
//import java.util.List;
//
//public class JDBIConnect {
//    private static Jdbi jdbi;
//    static String url = "jdbc:mysql://" + DBProperties.host() + ":" + DBProperties.port() + "/" + DBProperties.dbname() + "?" +DBProperties.option();
//
//    public static Jdbi get(){
//        if(jdbi==null) makeConnect();
//        return jdbi;
//    }
//
//    private static void makeConnect() {
//        MysqlDataSource dataSource = new MysqlDataSource();
//        dataSource.setUrl(url);
//        dataSource.setUser(DBProperties.dbname());
//        dataSource.setPassword(DBProperties.password());
//
//        try {
//            dataSource.setUseCompression(true);
//            dataSource.setAutoReconnect(true);
//        }catch (SQLException e){
//            throw new RuntimeException(e);
//        }
//        jdbi = Jdbi.create(dataSource);
//
//    }
//
//    public static void main(String[] args) {
//        Jdbi jdbi1 = get();
////        List<Product> products = jdbi1.withHandle(handle -> handle.createQuery("select * from products")
////                .mapToBean(Product.class)
////                .list());
////        System.out.println(products);
//
//
//        List<Users> users = jdbi1.withHandle(handle -> handle.createQuery("select * from users ")
//                .mapToBean(Users.class)
//                .list());
//        System.out.println(users);
//    }
//
//}
