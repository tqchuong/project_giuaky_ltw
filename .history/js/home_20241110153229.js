// Chuyển đổi sang định dạng tiền tệ VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

// Tăng và giảm số lượng
function increasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    qty.value = Math.min(parseInt(qty.value) + 1, qty.max);
}

function decreasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    qty.value = Math.max(parseInt(qty.value) - 1, qty.min);
}

// Đóng modal
function closeModal() {
    document.querySelectorAll('.modal').forEach(item => item.classList.remove('open'));
    document.body.style.overflow = "auto";
}

// Hiển thị chi tiết sản phẩm với đánh giá
function detailProduct(productId) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    let selectedProduct = products.find(product => product.id === productId);

    if (!selectedProduct) {
        alert("Không tìm thấy sản phẩm.");
        return;
    }

    let productReviews = reviews.filter(review => review.productId === productId);
    let reviewsHtml = productReviews.map(review => `
        <div class="review">
            <strong>Người dùng ${review.userId}:</strong> ${review.reviewText} - <strong>Rating:</strong> ${review.rating} ⭐
        </div>
    `).join('') || '<p>Chưa có đánh giá nào cho sản phẩm này.</p>';

    let modalHtml = `
        <div class="modal-header">
            <img src="${selectedProduct.img}" alt="${selectedProduct.title}" class="product-image active">
        </div>
        <div class="modal-body">
            <h2 class="product-title">${selectedProduct.title}</h2>
            <div class="product-control">
                <span class="current-price">${vnd(selectedProduct.price)}</span>
                <div class="buttons_added">
                    <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                    <input class="input-qty" max="100" min="1" type="number" value="1">
                    <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
                </div>
            </div>
            <p>${selectedProduct.des}</p>
            <h3>Đánh giá sản phẩm:</h3>
            <div class="product-reviews">${reviewsHtml}</div>
        </div>
        <div class="modal-footer">
            <button onclick="handleOrderNow(${selectedProduct.id})">Đặt hàng ngay</button>
            <button onclick="addToCart(${selectedProduct.id})">Thêm vào giỏ hàng</button>
        </div>
    `;

    document.querySelector('#product-detail-content').innerHTML = modalHtml;
    document.querySelector('.modal.product-detail').classList.add('open');
    document.body.style.overflow = "hidden";
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let product = products.find(sp => sp.id === productId);

    if (!product) return;

    let quantityInput = document.querySelector('.input-qty');
    let quantity = parseInt(quantityInput.value) || 1;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProduct = cart.find(item => item.title === product.title);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            img: product.img,
            title: product.title,
            price: product.price,
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

// Xử lý đặt hàng ngay
function handleOrderNow(productId) {
    addToCart(productId);
    setTimeout(() => window.location.href = "shoppingcart.html", 100);
}

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').innerText = cartCount;
}

// Khởi tạo sản phẩm và đánh giá mẫu
function initializeProducts() {
    let products = JSON.parse(localStorage.getItem('products'));
    if (!products) {
        localStorage.setItem('products', JSON.stringify(products));
    }
}

function initializeReviews() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    if (reviews.length === 0) {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }
}

// Chức năng đăng ký tài khoản với id tự động
function registerAccount() {
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let userId = accounts.length + 1; // Thiết lập ID tự động cho tài khoản mới

    let user = {
        id: userId,
        fullname: document.getElementById('names').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('emailCreate').value,
        password: document.getElementById('passwordCreate').value,
        address: '',
        status: 1,
        join: new Date(),
        cart: [],
        userType: 0 // Đặt loại người dùng là khách hàng
    };

    let accountExists = accounts.some(account => account.phone === user.phone || account.email === user.email);

    if (!accountExists) {
        accounts.push(user);
        localStorage.setItem('accounts', JSON.stringify(accounts));
        localStorage.setItem('currentuser', JSON.stringify(user));
        alert("Tạo tài khoản thành công!");
        closeModal();
    } else {
        alert("Tài khoản đã tồn tại!");
    }
}

// Khởi chạy khi tải trang
window.onload = function() {
    initializeProducts();
    initializeReviews();
    let products = JSON.parse(localStorage.getItem('products')) || [];
    displayList(products, perPage, currentPage);
    updateCartCount();
};

// Hàm kiểm tra đăng nhập
function kiemtradangnhap() {
    const currentUser = localStorage.getItem('currentuser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        const authContainer = document.querySelector('.auth-container');
        if (authContainer) {
            authContainer.innerHTML = `<span class="text-dndk">Tài khoản</span>
                <span class="text-tk">${user.fullname} <i class="fa-sharp fa-solid fa-caret-down"></i></span>`;
        }
        const userMenuElement = document.getElementById('user-menu');
        userMenuElement.innerHTML = generateMenuHtml(user);
    }
}

// Hàm tạo mã HTML menu
function generateMenuHtml(user) {
    let menuHtml = `<li><a href="javascript:void(0);" onclick="showAccountInfo()"><i class="fa-solid fa-user"></i> Tài khoản của tôi</a></li>
        <li><a href="javascript:void(0);" onclick="showOrderHistory()"><i class="fa-solid fa-bag-shopping"></i> Đơn hàng đã mua</a></li>`;

    if (user.userType === 1) {
        menuHtml = `<li><a href="admin.html"><i class="fa-solid fa-gear"></i> Quản lý cửa hàng</a></li>` + menuHtml;
    }

    menuHtml += `<li class="border"><a id="logout" href="javascript:;"><i class="fa-solid fa-right-from-bracket"></i> Thoát tài khoản</a></li>`;
    return menuHtml;
}

// Xử lý sự kiện đăng xuất
function logOut() {
    localStorage.removeItem('currentuser');
    window.location.href = "home.html"; // Quay lại trang chủ sau khi đăng xuất
}

// Thực thi kiểm tra khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', kiemtradangnhap);
