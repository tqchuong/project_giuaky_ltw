// Lấy các phần tử cần thiết
const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.children);

// Nhân đôi các mục trong carousel để tạo hiệu ứng vòng lặp
items.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
});

// Thiết lập các biến cho việc cuộn
let scrollPosition = 0;
const itemWidth = items[0].offsetWidth + 20; // Chiều rộng mỗi item cộng khoảng cách
const scrollSpeed = 2; // Tốc độ cuộn (px mỗi lần cập nhật)

// Hàm tự động cuộn
function autoScroll() {
    scrollPosition += scrollSpeed;

    // Quay lại đầu khi cuộn hết nửa chiều dài danh sách
    if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
    }

    // Cập nhật vị trí cuộn
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

// Tự động cuộn mỗi 30ms
const autoScrollInterval = setInterval(autoScroll, 30);

// Dừng cuộn khi hover vào carousel
carousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));

// Kích hoạt lại cuộn khi rời chuột khỏi carousel
carousel.addEventListener('mouseleave', () => setInterval(autoScroll, 30));
