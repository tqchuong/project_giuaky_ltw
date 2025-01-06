
function changeImage(imageSrc) {
  document.getElementById('mainImage').src = imageSrc;
}

function updateQuantity(change) {
  const quantityInput = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityInput.value);
  const maxQuantity = parseInt(quantityInput.max);
  if ((currentQuantity + change) >= 1 && (currentQuantity + change) <= maxQuantity) {
    quantityInput.value = currentQuantity + change;
  }
}

function addToCart(productId) {
  const currentUrl = window.location.href; // Lấy URL hiện tại
  const quantity = document.getElementById("quantity").value; // Lấy số lượng
  const addCartUrl = `add-cart?pid=${productId}&quantity=${quantity}&redirectUrl=${encodeURIComponent(currentUrl)}`;
  window.location.href = addCartUrl; // Điều hướng đến servlet
}

  const mainImage = document.getElementById('mainImage');
  const zoomLens = document.querySelector('.zoom-lens');
  const imageContainer = document.querySelector('.product-main-image');
  const thumbnails = document.querySelectorAll('.thumb-image');

  // Tính toán kích thước khung zoom dựa trên tỉ lệ zoom
  const zoomLevel = 2.5; // Mức độ zoom
  const lensWidth = imageContainer.offsetWidth / zoomLevel;
  const lensHeight = imageContainer.offsetHeight / zoomLevel;
  zoomLens.style.width = lensWidth + 'px';
  zoomLens.style.height = lensHeight + 'px';

  // Khởi tạo biến lưu kích thước ảnh gốc
  let imgWidth, imgHeight;

  // Hàm cập nhật kích thước ảnh gốc
  function updateImageSize() {
    const imgRect = mainImage.getBoundingClientRect();
    imgWidth = imgRect.width;
    imgHeight = imgRect.height;
  }

  // Gọi hàm cập nhật kích thước ảnh ban đầu
  updateImageSize();
  mainImage.addEventListener('mousemove', (e) => {
    // Tính toán vị trí chuột so với ảnh chính
    const { left, top } = imageContainer.getBoundingClientRect();
    let x = e.clientX - left - lensWidth / 2;
    let y = e.clientY - top - lensHeight / 2;

    // Giới hạn vị trí khung zoom trong phạm vi ảnh
    x = Math.max(0, Math.min(x, imgWidth - lensWidth));
    y = Math.max(0, Math.min(y, imgHeight - lensHeight));

    // Cập nhật vị trí khung zoom
    zoomLens.style.left = x + 'px';
    zoomLens.style.top = y + 'px';

    // Tính toán vị trí tương ứng trên ảnh lớn (nếu có)
    const largeImg = mainImage.dataset.largeImg; // Lấy đường dẫn ảnh lớn từ thuộc tính data-large-img
    if (largeImg) {
      // Tính toán tỉ lệ vị trí chuột so với ảnh gốc
      const ratioX = imgWidth / lensWidth;
      const ratioY = imgHeight / lensHeight;
      const bgX = -x * ratioX;
      const bgY = -y * ratioY;

      // Cập nhật background của khung zoom
      zoomLens.style.backgroundImage = `url(${largeImg})`;
      zoomLens.style.backgroundPosition = `${bgX}px ${bgY}px`;
      zoomLens.style.backgroundSize = `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`;
    }
  });
  // Ẩn khung zoom khi chuột ra khỏi ảnh
  imageContainer.addEventListener('mouseleave', () => {
    zoomLens.style.display = 'none';
  });

  // Hiển thị khung zoom khi chuột vào ảnh
  imageContainer.addEventListener('mouseenter', () => {
    zoomLens.style.display = 'block';
  });
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      mainImage.src = thumbnail.src;
      mainImage.dataset.largeImg = thumbnail.dataset.largeImg; // Lấy đường dẫn ảnh lớn từ thumbnail
      updateImageSize(); // Cập nhật kích thước ảnh gốc
    });
  });

  // Lấy tất cả các ngôi sao và phần hiển thị số sao được chọn
  const stars = document.querySelectorAll("#starRating span");
  const ratingValue = document.getElementById("ratingValue");

  // Thêm sự kiện click cho từng ngôi sao
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const value = star.getAttribute("data-value"); // Lấy giá trị sao được chọn
      ratingValue.textContent = value; // Hiển thị số sao được chọn

      // Xóa trạng thái selected khỏi tất cả các ngôi sao
      stars.forEach((s) => s.classList.remove("selected"));

      // Thêm trạng thái selected cho các ngôi sao từ đầu đến ngôi sao được chọn
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("selected");
      }
    });
  });

  // Thêm hiệu ứng hover qua từng ngôi sao
  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      // Xóa trạng thái hovered khỏi tất cả các ngôi sao
      stars.forEach((s) => s.classList.remove("hovered"));

      // Thêm trạng thái hovered cho các ngôi sao từ đầu đến ngôi sao được hover
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("hovered");
      }
    });

    star.addEventListener("mouseout", () => {
      // Xóa trạng thái hovered khi chuột rời
      stars.forEach((s) => s.classList.remove("hovered"));
    });
  });

  function goBack() {
    window.history.back(); // Quay lại trang trước đó
  }