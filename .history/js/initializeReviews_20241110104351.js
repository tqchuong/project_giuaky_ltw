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
            // Có thể thêm các đánh giá khác vào đây
        ];

        // Lưu đánh giá vào localStorage
        localStorage.setItem('reviews', JSON.stringify(reviews));
        console.log("Reviews have been initialized and saved to localStorage.");
    } else {
        console.log("Reviews are already initialized in localStorage.");
    }
}

// Gọi hàm khởi tạo khi trang được tải
initializeReviews();
