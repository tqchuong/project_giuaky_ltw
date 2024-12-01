// Hàm lấy thông tin chi tiết sản phẩm từ localStorage dựa trên id = 3
function getProductDetails(productId = 3) {
  // Lấy danh sách sản phẩm từ localStorage
  let products = JSON.parse(localStorage.getItem('products')) || [];

  // Tìm sản phẩm có id bằng productId
  let product = products.find(item => item.id === productId);

  // Kiểm tra nếu sản phẩm không tồn tại
  if (!product) {
      console.error(`Sản phẩm với id = ${productId} không tồn tại.`);
      return null;
  }

  // Bổ sung thêm các thuộc tính chi tiết cho sản phẩm nếu chưa có
  return {
      ...product, // giữ nguyên các thuộc tính hiện có
      kho: product.kho || "Kho tổng",
      brand: product.brand || "Thương hiệu ST25",
      weight: product.weight || "5kg",
      shelf_life: product.shelf_life || "6 tháng",
      expiry_date: product.expiry_date || "25-09-2025",
      quantity: product.quantity || "Còn 1000 sản phẩm",
      manufacture_date: product.manufacture_date || "25-04-2025",
      manufacturer: product.manufacturer || "Công ty Gạo ST25 Việt Nam"
  };
}

// Hàm hiển thị chi tiết sản phẩm lên trang
function renderProductDetails(productId = 3) {
  let product = getProductDetails(productId);

  if (!product) {
      document.getElementById('product-detail-content').innerHTML = "<p>Sản phẩm không tồn tại.</p>";
      return;
  }

  // Tạo HTML để hiển thị thông tin chi tiết của sản phẩm
  let productHtml = `
      <div class="product-details">
          <h1 class="product-title">${product.title}</h1>
          <img src="${product.img}" alt="${product.title}" class="product-image">
          <div class="product-price">Giá: ${vnd(product.price)}</div>
          <div class="product-description">${product.des}</div>
          
          <h3>Chi tiết sản phẩm</h3>
          <ul>
              <li><strong>Kho:</strong> ${product.kho}</li>
              <li><strong>Thương hiệu:</strong> ${product.brand}</li>
              <li><strong>Trọng lượng:</strong> ${product.weight}</li>
              <li><strong>Hạn sử dụng:</strong> ${product.shelf_life}</li>
              <li><strong>Ngày hết hạn:</strong> ${product.expiry_date}</li>
              <li><strong>Số lượng:</strong> ${product.quantity}</li>
              <li><strong>Ngày sản xuất:</strong> ${product.manufacture_date}</li>
              <li><strong>Nhà sản xuất:</strong> ${product.manufacturer}</li>
          </ul>
      </div>
  `;

  // Hiển thị chi tiết sản phẩm lên trang
  document.getElementById('product-detail-content').innerHTML = productHtml;
}

// Hàm chuyển đổi giá thành định dạng VND
function vnd(price) {
  return price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
}

// Gọi hàm hiển thị chi tiết sản phẩm khi trang được tải
window.onload = function() {
  renderProductDetails(); // Mặc định hiển thị sản phẩm có id = 3
};
