package fit.hcmuaf.edu.vn.foodmart.dao;

import fit.hcmuaf.edu.vn.foodmart.dao.db.DBConnect;
import fit.hcmuaf.edu.vn.foodmart.model.*;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ProductDAO {

    private static Jdbi jdbi = DBConnect.getJdbi();  // Lấy jdbi từ DBConnect

    // Lấy toàn bộ danh sách sản phẩm từ CSDL
   public List<Products> getAllProducts() {
        String sql = """
             SELECT p.Id AS id, p.ProductName AS productName,
                    p.CategoryID AS categoryId, p.Price AS price,
                 p.ImageURL AS imageUrl,  c.CategoryName AS categoryName, p.StockQuantity ,c.CategoryName, p.ShortDescription
                                   FROM products p
                                   INNER JOIN  categories c
                                   ON p.CategoryID = c.Id;
            """;

        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .map((rs, ctx) -> {
                        Category category = new Category();
                        category.setCategoryID(rs.getInt("categoryId"));
                        category.setCategoryName(rs.getString("categoryName"));

                        Products product = new Products();
                        product.setId(rs.getInt("id"));
                        product.setProductName(rs.getString("productName"));
                        product.setCategoryID(rs.getInt("categoryId"));
                        product.setPrice(rs.getDouble("price"));
                        product.setImageURL(rs.getString("imageUrl"));
                        product.setStockQuantity(rs.getInt("StockQuantity"));
                        product.setShortDescription(rs.getString("shortDescription"));


                        return product;
                    })
                    .list();
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn dữ liệu: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
    // Lấy danh sách sản phẩm theo danh mục
    public List<Products> getProductsByCategory(String categoryName) {
        String sql = """
        SELECT p.ID AS id, p.ProductName AS productName, 
               p.CategoryID AS categoryId, p.Price AS price, 
               p.ImageURL AS imageUrl, c.CategoryName AS categoryName
        FROM products p
        INNER JOIN categories c ON p.CategoryID = c.CategoryID
        WHERE c.CategoryName = :categoryName
    """;

        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind("categoryName", categoryName) // Gán tham số cho câu truy vấn
                    .map((rs, ctx) -> {
                        Category category = new Category();
                        category.setCategoryID(rs.getInt("categoryId"));
                        category.setCategoryName(rs.getString("categoryName"));

                        Products product = new Products();
                        product.setId(rs.getInt("id"));
                        product.setProductName(rs.getString("productName"));
                        product.setCategoryID(rs.getInt("categoryId"));
                        product.setPrice(rs.getDouble("price"));
                        product.setImageURL(rs.getString("imageUrl"));
                        product.setCategory(category);

                        return product;
                    })
                    .list();
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn dữ liệu theo danh mục: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }


    // Lấy chi tiết sản phẩm theo ID
    public Products getProductDetailsById(int productId) {
        String productSql = """
        SELECT 
            p.ID AS id,
            p.ProductName AS productName,
            p.CategoryID AS categoryId,
            p.Price AS price,
            p.ImageURL AS imageUrl,
            p.ShortDescription AS shortDescription,
            p.StockQuantity AS stockQuantity,
            c.CategoryName AS categoryName,
            pd.DetailedDescription AS detailedDescription,
            pd.ProductStatus AS productStatus,
            pd.ExpiryDate AS expiryDate,
            pv.View AS productViews
        FROM 
            products p
        INNER JOIN 
            categories c ON p.CategoryID = c.CategoryID
        LEFT JOIN 
            productsdetail pd ON p.ID = pd.ProductID
        LEFT JOIN 
            products_view pv ON p.ID = pv.ProductID
        WHERE 
            p.ID = :productId
        """;

        String reviewsSql = """
        SELECT 
            r.Id AS reviewId,
            r.Rating AS rating,
            r.ReviewText AS reviewText,
            r.Created_At AS createdAt,
            u.Username AS username,
            u.ImageURLUser AS imageURLUser
        FROM 
            reviews r
        INNER JOIN 
            users u ON r.UsersID = u.Id
        WHERE 
            r.ProductID = :productId
        """;

        try (Handle handle = jdbi.open()) {
            // Truy vấn thông tin sản phẩm
            Products product = handle.createQuery(productSql)
                    .bind("productId", productId)
                    .map((rs, ctx) -> {
                        // Ánh xạ thông tin danh mục
                        Category category = new Category();
                        category.setCategoryID(rs.getInt("categoryId"));
                        category.setCategoryName(rs.getString("categoryName"));

                        // Ánh xạ thông tin sản phẩm
                        Products prod = new Products();
                        prod.setId(rs.getInt("id"));
                        prod.setProductName(rs.getString("productName"));
                        prod.setCategoryID(rs.getInt("categoryId"));
                        prod.setPrice(rs.getDouble("price"));
                        prod.setImageURL(rs.getString("imageUrl"));
                        prod.setShortDescription(rs.getString("shortDescription"));
                        prod.setStockQuantity(rs.getInt("stockQuantity"));
                        prod.setCategory(category);
                        prod.setProductViews(rs.getInt("productViews"));

                        // Ánh xạ thông tin chi tiết sản phẩm
                        ProductsDetail detail = new ProductsDetail();
                        detail.setProductID(prod.getId());
                        detail.setDetailedDescription(rs.getString("detailedDescription"));
                        detail.setProductStatus(rs.getString("productStatus"));
                        detail.setExpiryDate(rs.getDate("expiryDate"));

                        prod.setProductsDetail(detail);

                        return prod;
                    })
                    .one();

            // Truy vấn các đánh giá liên quan đến sản phẩm
            List<Reviews> reviews = handle.createQuery(reviewsSql)
                    .bind("productId", productId)
                    .map((rs, ctx) -> {
                        Reviews review = new Reviews();
                        review.setId(rs.getInt("reviewId"));
                        review.setRating(rs.getInt("rating"));
                        review.setReviewText(rs.getString("reviewText"));
                        review.setCreatedAt(rs.getTimestamp("createdAt"));

                        // Thông tin người dùng đánh giá
                        Users user = new Users();
                        user.setUsername(rs.getString("username"));


                        review.setUser(user); // Gắn thông tin người dùng vào review
                        return review;
                    })
                    .list();

            product.setReviews(reviews); // Gắn danh sách đánh giá vào sản phẩm

            // Truy vấn các ảnh liên quan đến sản phẩm
            String imageSql = "SELECT id, productID, imagePath FROM productimages WHERE productID = :productId";
            List<ProductImages> images = handle.createQuery(imageSql)
                    .bind("productId", productId)
                    .map((rs, ctx) -> new ProductImages(
                            rs.getInt("id"),
                            rs.getInt("productID"),
                            rs.getString("imagePath")
                    ))
                    .list();

            product.setImages(images); // Gắn danh sách ảnh vào sản phẩm

            return product;
        } catch (Exception e) {
            System.out.println("Lỗi khi lấy chi tiết sản phẩm: " + e.getMessage());
            e.printStackTrace();
            return null;
        }

    }
    public double getAverageRating(int productId) {
        String sql = "SELECT AVG(Rating) AS AverageRating FROM reviews WHERE ProductID = :productId";

        try (Handle handle = jdbi.open()) {
            Double averageRating = handle.createQuery(sql)
                    .bind("productId", productId)
                    .mapTo(Double.class)
                    .one();

            return averageRating != null ? averageRating : 0.0;
        } catch (Exception e) {
            System.out.println("Lỗi khi tính trung bình rating: " + e.getMessage());
            e.printStackTrace();
            return 0.0;
        }

    }

    public List<Products> getHotProducts(int limit) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT ");
        sql.append("p.Id AS ProductID, ");
        sql.append("p.ProductName, ");
        sql.append("p.CategoryID, ");
        sql.append("p.Price, ");
        sql.append("p.ImageURL, ");
        sql.append("p.UploadDate, ");
        sql.append("p.ShortDescription, ");
        sql.append("p.StockQuantity, ");
        sql.append("SUM(pv.View) AS TotalViews ");
        sql.append("FROM Products p ");
        sql.append("JOIN Products_View pv ");
        sql.append("ON p.Id = pv.ProductID ");
        sql.append("GROUP BY p.Id, p.ProductName, p.Price, p.ImageURL, p.ShortDescription ");
        sql.append("ORDER BY TotalViews DESC ");
        sql.append("LIMIT :limit");

        try (Handle handle = jdbi.open()) {
            return handle.createQuery(sql)
                    .bind("limit",limit)
                    .mapToBean(Products.class)
                    .list();
        } catch (Exception e) {
            System.out.println("Lỗi khi truy vấn dữ liệu: " + e.getMessage());
            e.printStackTrace();
            return Collections.emptyList();  // Trả về danh sách rỗng thay vì null
        }
    }

    // Test phương thức getLatestProducts()



    // Test phương thức getAllProducts() và getProductDetailsById()
    public static void main(String[] args) {
        ProductDAO dao = new ProductDAO();
//        // Lấy danh sách các sản phẩm mới nhất (2 sản phẩm gần nhất)
//        List<Products> latestProducts = dao.getLatestProducts(6);
//
//        // In danh sách sản phẩm mới nhất
//        if (latestProducts != null && !latestProducts.isEmpty()) {
//            System.out.println("Danh sách sản phẩm mới nhất:");
//            for (Products product : latestProducts) {
//                System.out.println("Product: " + product.getProductName());
//                System.out.println("Image URL: " + product.getImageURL());
//            }
//
//        } else {
//            System.out.println("Không có sản phẩm mới hoặc có lỗi khi truy vấn.");
//        }

        // Test getAllProducts()
        System.out.println("===== Tất cả sản phẩm =====");
        List<Products> products = dao.getAllProducts();
        if (products != null) {
            for (Products product : products) {
                System.out.println(product);
            }
        } else {
            System.out.println("Không có sản phẩm hoặc có lỗi khi truy vấn.");
        }

//        // Test getHotProducts
//        System.out.println("\n===== Sản phẩm hot =====");
//        List<Products> hotProducts = dao.getHotProducts(5);
//        if (hotProducts != null && !hotProducts.isEmpty()) {
//            for (Products product : hotProducts) {
//                System.out.println(product);
//            }
//        } else {
//            System.out.println("Không có sản phẩm hot hoặc có lỗi khi truy vấn.");
//        }
//
//        // Test getProductDetailsById
//        int productId = 3; // Thay ID bằng sản phẩm thực tế có trong DB
//        Products productDetails = dao.getProductDetailsById(productId);
//        double averageRating = dao.getAverageRating(productId);
//
//        if (productDetails != null) {
//            System.out.println("\n===== Chi tiết sản phẩm =====");
//            System.out.println("ID: " + productDetails.getId());
//            System.out.println("Tên sản phẩm: " + productDetails.getProductName());
//            System.out.println("Giá: " + productDetails.getPrice());
//            System.out.println("Mô tả ngắn: " + productDetails.getShortDescription());
//            System.out.println("Danh mục: " + (productDetails.getCategory() != null
//                    ? productDetails.getCategory().getCategoryName() : "Không có"));
//
//            System.out.println("\n===== Danh sách ảnh =====");
//            if (productDetails.getImages() != null && !productDetails.getImages().isEmpty()) {
//                for (ProductImages image : productDetails.getImages()) {
//                    System.out.println("- " + image.getImagePath());
//                }
//            } else {
//                System.out.println("Không có ảnh nào.");
//            }
//
//            System.out.println("\n===== Đánh giá =====");
//            if (productDetails.getReviews() != null && !productDetails.getReviews().isEmpty()) {
//                for (Reviews review : productDetails.getReviews()) {
//                    System.out.println("  Xếp hạng: " + review.getRating());
//                    System.out.println("  Nội dung: " + review.getReviewText());
//                }
//            } else {
//                System.out.println("Không có đánh giá nào.");
//            }
//
//            System.out.println("\n===== Trung bình Rating =====");
//            System.out.println("Trung bình rating: " + averageRating);
//
//            System.out.println("\n===== Lượt xem =====");
//            System.out.println("Số lượt xem: " + productDetails.getProductViews());
//        } else {
//            System.out.println("Không tìm thấy chi tiết sản phẩm hoặc có lỗi.");
//        }
    }
}