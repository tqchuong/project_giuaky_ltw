const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.children);

// Nhân đôi các mục trong carousel để tạo hiệu ứng vô tận
items.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
});

let scrollPosition = 0;

function autoScroll() {
    scrollPosition += 1; // Tăng vị trí cuộn
    if (scrollPosition >= carousel.scrollWidth / 2) {
        // Khi đến hết nửa đầu, quay lại vị trí đầu
        scrollPosition = 0;
    }
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

// Bắt đầu cuộn tự động
setInterval(autoScroll, 30);
