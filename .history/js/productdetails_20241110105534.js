// Hàm khởi tạo các đánh giá và lưu vào localStorage
function initializeReviews() {
  if (localStorage.getItem('reviews') == null) {
      let reviews = [
          {
              productId: 1,
              userId: 1,  // id người dùng đã đánh giá
              rating: 4,
              reviewText: 'Bắp nữ hoàng rất ngọt và thơm, phù hợp cho món nướng.'
          },
          {
              productId: 2,
              userId: 2,
              rating: 5,
              reviewText: 'Bắp nếp rất dẻo, ăn rất thích hợp với các món truyền thống.'
          },
          {
              productId: 3,
              userId: 3,
              rating: 5,
              reviewText: 'Gạo ST25 thơm ngon, hạt gạo dài và dẻo, nấu cơm rất ngon.'
          }
          // Thêm các đánh giá khác nếu cần
      ];

      // Lưu đánh giá vào localStorage
      localStorage.setItem('reviews', JSON.stringify(reviews));
      console.log("Reviews have been initialized and saved to localStorage.");
  } else {
      console.log("Reviews are already initialized in localStorage.");
  }
}

// Hàm lấy và hiển thị đánh giá của sản phẩm dựa vào productId
function renderProductReviews(productId = 3) {
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  
  // Lọc các đánh giá cho sản phẩm cụ thể
  let productReviews = reviews.filter(review => review.productId === productId);

  // Kiểm tra nếu không có đánh giá cho sản phẩm
  if (productReviews.length === 0) {
      document.querySelector('.product-reviews').innerHTML = "<p>Chưa có đánh giá nào cho sản phẩm này.</p>";
      return;
  }

  // Tạo HTML cho danh sách đánh giá
  let reviewsHtml = productReviews.map(review => `
      <div class="review">
          <strong>Người dùng ${review.userId}:</strong> ${review.reviewText} - <strong>Rating:</strong> ${review.rating} ⭐
      </div>
  `).join('');

  // Hiển thị các đánh giá lên trang
  document.querySelector('.product-reviews').innerHTML = reviewsHtml;
}

// Gọi hàm khởi tạo đánh giá khi trang được tải
window.onload = function () {
  initializeReviews();
  renderProductDetails(); // Hiển thị chi tiết sản phẩm (cần có sẵn từ productDetails.js)
  renderProductReviews(); // Hiển thị đánh giá sản phẩm
};
