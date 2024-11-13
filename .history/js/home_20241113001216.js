// Doi sang dinh dang tien VND
function vnd(price) {
    return price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
}


function increasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (parseInt(qty.value) < qty.max) {
        qty.value = parseInt(qty.value) + 1;
    } else {
        qty.value = qty.max;
    }
}

function decreasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (qty.value > qty.min) {
        qty.value = parseInt(qty.value) - 1;
    } else {
        qty.value = qty.min;
    }
}

// Close popup

let modalContainer = document.querySelectorAll('.modal');
let modalBox = document.querySelectorAll('.mdl-cnt');


// Click vùng ngoài sẽ tắt Popup
modalContainer.forEach(item => {
    item.addEventListener('click', closeModal);
});

modalBox.forEach(item => {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
    })
});

function closeModal() {
    modalContainer.forEach(item => {
        item.classList.remove('open');
    });
    console.log(modalContainer)
    body.style.overflow = "auto";
}

function detailProduct(index) {
    let modal = document.querySelector('.modal.product-detail');
    let products = JSON.parse(localStorage.getItem('products'));
    event.preventDefault();

    // Lấy thông tin sản phẩm cơ bản
    let infoProduct = products.find(sp => sp.id === index);
    if (!infoProduct) return;

    // Lấy thông tin chi tiết sản phẩm
    let detailedInfo = getProductDetail(index);

    // Lấy đánh giá sản phẩm
    let productReviews = getProductReviews(index);

    // Tạo các ảnh trong carousel từ mảng `images`
    let carouselImages = '';
    if (infoProduct.images && infoProduct.images.length > 0) {
        infoProduct.images.forEach((imgSrc, i) => {
            carouselImages += `<img src="${imgSrc}" class="carousel-image ${i === 0 ? 'active' : ''}" alt="Product Image ${i + 1}">`;
        });
    } else {
        // Nếu không có nhiều ảnh, chỉ hiển thị một ảnh chính
        carouselImages = `<img src="${infoProduct.img}" class="carousel-image active" alt="Product Image">`;
    }
    // Tính điểm trung bình đánh giá
    let averageRating = 0;
    if (productReviews.length > 0) {
        const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
        averageRating = (totalRating / productReviews.length).toFixed(1); // làm tròn 1 chữ số thập phân
    } else {
        averageRating = 'N/A';
    }
    // Tạo nội dung cho modal với carousel và thông tin chi tiết
    let modalHtml = `
    <div class="modal-header">
        <div class="product-carousel">
            <div class="carousel-images">
                ${carouselImages}
            </div>
            <button class="carousel-prev" onclick="prevImage()">‹</button>
            <button class="carousel-next" onclick="nextImage()">›</button>
        </div>
    </div>
    <div class="modal-body">
        <h2 class="product-title">${infoProduct.title}</h2>
        <div class="product-control">
            <div class="priceBox">
                <span class="current-price">${vnd(infoProduct.price)}</span>
            </div>
            <div class="buttons_added">
                <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                <input class="input-qty" max="100" min="1" name="" type="number" value="1">
                <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
            </div>
        </div>
        <p class="product-description">${infoProduct.desc}</p>
        
        <div class="product-rating">
            <p>
                <span>Đánh giá trung bình: ${averageRating} ⭐</span> |   
                <span>Lượt xem: ${infoProduct.views || 'N/A'} 👁️</span> |   
                <span>${productReviews.length} Đánh Giá</span>
            </p>
        </div>
        
        <h3>Chi tiết sản phẩm</h3>
        <div class="product-details">
            <p class="detail-item"><strong>Danh mục:</strong> ${infoProduct.category}</p>
            <p class="detail-item"><strong>Kho:</strong> ${detailedInfo.kho || 'N/A'}</p>
            <p class="detail-item"><strong>Thương hiệu:</strong> ${detailedInfo.brand || 'N/A'}</p>
            <p class="detail-item"><strong>Loại:</strong> ${detailedInfo.type || 'N/A'}</p>
            <p class="detail-item"><strong>Trọng lượng:</strong> ${detailedInfo.weight || 'N/A'}</p>
            <p class="detail-item"><strong>Hạn sử dụng:</strong> ${detailedInfo.shelf_life || 'N/A'}</p>
            <p class="detail-item"><strong>Xuất xứ:</strong> ${detailedInfo.origin || 'N/A'}</p>
            <p class="detail-item"><strong>Ngày hết hạn:</strong> ${detailedInfo.expiry_date || 'N/A'}</p>
            <p class="detail-item"><strong>Số lượng:</strong> ${detailedInfo.quantity || 'N/A'}</p>
            <p class="detail-item"><strong>Ngày sản xuất:</strong> ${detailedInfo.manufacture_date || 'N/A'}</p>
            <p class="detail-item"><strong>Tên tổ chức chịu trách nhiệm sản xuất:</strong> ${detailedInfo.manufacturer || 'N/A'}</p>
            <p class="detail-item"><strong>Gửi từ:</strong> ${detailedInfo.ship_from || 'N/A'}</p>
        </div>

       <div class="product-reviews">
                <h3>Đánh giá từ khách hàng:</h3>
                ${productReviews.map(review => `<div class="review"><strong>${review.User_id}</strong>: ${review.comment}</div>`).join('')}
                
                <h3>Thêm đánh giá của bạn:</h3>
                <div class="add-review">
             
                    <label for="rating">Điểm đánh giá (1-5):</label>
                    <input type="number" id="rating" min="1" max="5" value="5" />

                    <label for="comment">Nhận xét:</label>
                    <textarea id="comment" placeholder="Nhập nhận xét của bạn..."></textarea>

                    <button onclick="submitReview(${index})">Gửi đánh giá</button>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="price-total">
                <span class="thanhtien">Thành tiền</span>
                <span class="price">${vnd(infoProduct.price)}</span>
            </div>
            <div class="modal-footer-control">
                <button class="button-dathangngay" data-product="${infoProduct.id}" onclick="handleOrderNow(${infoProduct.id})">Đặt hàng ngay</button>  
                <button class="button-dat" id="add-cart" title="Thêm vào giỏ hàng" onclick="addToCart(${infoProduct.id})"><i class="fa-light fa-basket-shopping"></i> Thêm vào giỏ hàng</button>
            </div>
        </div>
    `;
    document.querySelector('#product-detail-content').innerHTML = modalHtml;
    modal.classList.add('open');
    document.body.style.overflow = "hidden";

    let currentImageIndex = 0;

    // Hàm hiển thị ảnh theo chỉ số
    function showImage(index) {
        const images = document.querySelectorAll('.carousel-image');
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    // Hàm chuyển đến ảnh tiếp theo
    function nextImage() {
        const images = document.querySelectorAll('.carousel-image');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    // Hàm chuyển đến ảnh trước đó
    function prevImage() {
        const images = document.querySelectorAll('.carousel-image');
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    // Gắn sự kiện cho các nút điều hướng
    document.querySelector('.carousel-prev').addEventListener('click', prevImage);
    document.querySelector('.carousel-next').addEventListener('click', nextImage);

    // Hiển thị ảnh đầu tiên khi modal mở
    showImage(currentImageIndex);

    function submitReview(index) {
        const currentUser = JSON.parse(localStorage.getItem('currentuser'))
        if (!currentUser) {
            alert("Vui lòng đăng nhập để thêm đánh giá.");
            return;
        }

        // Lấy thông tin người dùng hiện tại
        const user = JSON.parse(currentUser);

        const rating = parseInt(document.getElementById("rating").value);
        const comment = document.getElementById("comment").value;

        if (isNaN(rating) || rating < 1 || rating > 5 || comment.trim() === "") {
            alert("Vui lòng nhập điểm đánh giá hợp lệ (1-5) và nhận xét.");
            return;
        }

        // Lấy đánh giá hiện tại của sản phẩm
        const reviews = getProductReviews(index);

        // Thêm đánh giá mới với `User_id` của người dùng hiện tại
        reviews.push({
            User_id: user.User_id,  // Lấy ID của người dùng hiện tại
            rating,
            comment
        });

        // Lưu lại đánh giá vào `localStorage`
        const allReviews = JSON.parse(localStorage.getItem("reviews")) || {};
        allReviews[index] = reviews;
        localStorage.setItem("reviews", JSON.stringify(allReviews));

        // Cập nhật lại giao diện modal với đánh giá mới
        detailProduct(index);
    }

    // Cập nhật giá tiền khi tăng số lượng sản phẩm
    let tgbtn = document.querySelectorAll('.is-form');
    let qty = document.querySelector('.product-control .input-qty');
    let priceText = document.querySelector('.price');
    tgbtn.forEach(element => {
        element.addEventListener('click', () => {
            let price = infoProduct.price * parseInt(qty.value);
            priceText.innerHTML = vnd(price);
        });
    });

}



// Khởi tạo khi tải trang
document.addEventListener("DOMContentLoaded", () => {
    initializeHomePage();
    updateCartCount();
});

// Khởi tạo trang chủ
function initializeHomePage() {
    renderProductList();
    checkUserStatus();
    setupAdvancedSearch();
}

// Hiển thị danh sách sản phẩm
function renderProductList() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const homeProducts = document.getElementById("home-products");
    homeProducts.innerHTML = ""; // Xóa sản phẩm cũ nếu có

    products.forEach(product => {
        const productHtml = `
            <div class="product-item">
                <img src="${product.img}" alt="${product.title}" class="product-img" onclick="showProductDetail(${product.id})">
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">${formatCurrency(product.price)}</p>
                    <button class="product-add-cart" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
                    <button class="product-buy-now" onclick="buyNow(${product.id})">Mua ngay</button>
                </div>
            </div>`;
        homeProducts.insertAdjacentHTML("beforeend", productHtml);
    });
}

// Kiểm tra trạng thái người dùng (đăng nhập hoặc chưa)
function checkUserStatus() {
    const currentUser = JSON.parse(localStorage.getItem("currentuser"));
    if (currentUser) {
        document.getElementById("user-fullname").innerText = currentUser.fullname;
        document.getElementById("auth-options").style.display = "none";
        document.getElementById("user-menu").style.display = "block";
    } else {
        document.getElementById("auth-options").style.display = "block";
        document.getElementById("user-menu").style.display = "none";
    }
}

// Định dạng tiền tệ Việt Nam Đồng
function formatCurrency(price) {
    return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    let currentUser = JSON.parse(localStorage.getItem("currentuser"));
    if (!currentUser) {
        showToast({ title: "Chú ý", message: "Vui lòng đăng nhập trước khi thêm sản phẩm vào giỏ hàng!", type: "warning" });
        return;
    }

    const cart = currentUser.cart || [];
    const product = findProductById(productId);

    if (!product) return;

    const productInCart = cart.find(item => item.id === productId);
    if (productInCart) {
        productInCart.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    currentUser.cart = cart;
    localStorage.setItem("currentuser", JSON.stringify(currentUser));
    updateCartCount();
    showToast({ title: "Thành công", message: "Sản phẩm đã được thêm vào giỏ hàng.", type: "success" });
}

// Mua ngay sản phẩm (điều hướng đến trang thanh toán)
function buyNow(productId) {
    const product = findProductById(productId);
    if (!product) return;

    localStorage.setItem("buyNowProduct", JSON.stringify(product));
    window.location.href = "checkout.html"; // Chuyển hướng đến trang thanh toán
}

// Tìm sản phẩm theo ID
function findProductById(productId) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    return products.find(product => product.id === productId);
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    const currentUser = JSON.parse(localStorage.getItem("currentuser"));
    const count = currentUser ? currentUser.cart.reduce((acc, item) => acc + item.quantity, 0) : 0;
    document.querySelector(".count-product-cart").innerText = count;
}

// Hiển thị chi tiết sản phẩm trong modal
function showProductDetail(productId) {
    const product = findProductById(productId);
    if (!product) return;

    const modalHtml = `
        <div class="modal-header">
            <h2 class="product-title">${product.title}</h2>
        </div>
        <div class="modal-body">
            <img src="${product.img}" alt="${product.title}" class="product-image">
            <p class="product-price">${formatCurrency(product.price)}</p>
            <p class="product-description">${product.desc}</p>
            <button onclick="buyNow(${product.id})">Mua ngay</button>
            <button onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
        </div>
    `;
    document.querySelector("#product-detail-content").innerHTML = modalHtml;
    document.querySelector(".modal.product-detail").classList.add("open");
    document.body.style.overflow = "hidden";
}

// Đóng modal chi tiết sản phẩm
function closeModal() {
    document.querySelector(".modal.product-detail").classList.remove("open");
    document.body.style.overflow = "auto";
}

// Hiển thị thông báo (toast)
function showToast({ title, message, type, duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${duration / 1000}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon"><i class="fas fa-check-circle"></i></div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close"><i class="fas fa-times"></i></div>
        `;

        main.appendChild(toast);

        setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);
    }
}

// Cài đặt tìm kiếm nâng cao
function setupAdvancedSearch() {
    document.getElementById("advanced-search-price-btn").onclick = searchProducts;
    document.getElementById("sort-ascending").onclick = () => searchProducts(1);
    document.getElementById("sort-descending").onclick = () => searchProducts(2);
    document.getElementById("reset-search").onclick = () => searchProducts(0);
}

// Tìm kiếm sản phẩm
function searchProducts(sortOrder = 0) {
    const category = document.getElementById("advanced-search-category-select").value;
    const minPrice = parseInt(document.getElementById("min-price").value) || 0;
    const maxPrice = parseInt(document.getElementById("max-price").value) || Infinity;
    const searchInput = document.querySelector(".form-search-input").value.toLowerCase();

    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Lọc sản phẩm theo các điều kiện tìm kiếm
    products = products.filter(product => {
        return (
            (category === "Tất cả" || product.category === category) &&
            product.price >= minPrice &&
            product.price <= maxPrice &&
            product.title.toLowerCase().includes(searchInput)
        );
    });

    // Sắp xếp sản phẩm theo giá
    if (sortOrder === 1) {
        products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 2) {
        products.sort((a, b) => b.price - a.price);
    }

    renderProductList(products);
}

// Đóng tìm kiếm nâng cao
function closeSearchAdvanced() {
    document.querySelector(".advanced-search").classList.toggle("open");
}









function addToCart(productId) {
    // Lấy dữ liệu sản phẩm từ localStorage
    let products = JSON.parse(localStorage.getItem('products'));
    let product = products.find(sp => sp.id === productId);

    if (!product) return;

    // Lấy số lượng từ input trong modal
    let quantityInput = document.querySelector('.input-qty');
    let quantity = parseInt(quantityInput.value) || 1;

    // Cập nhật giỏ hàng trong localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProduct = cart.find(item => item.title === product.title);

    if (existingProduct) {
        existingProduct.quantity += quantity; // Tăng số lượng nếu đã có sản phẩm
    } else {
        cart.push({
            img: product.img,
            title: product.title,
            price: product.price,
            quantity: quantity
        });
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Cập nhật số lượng hiển thị trên giỏ hàng
    updateCartCount();

    // Hiển thị thông báo thêm thành công vào giỏ hàng
    toast({
        title: 'Thành công',
        message: 'Đã thêm sản phẩm vào giỏ hàng!',
        type: 'success',
        duration: 3000
    });
}


function handleOrderNow(productId) {
    addToCart(productId); // Thêm sản phẩm vào giỏ hàng
    toast({
        title: 'Thành công',
        message: 'Đã thêm sản phẩm vào giỏ hàng!',
        type: 'success',
        duration: 3000
    });
    setTimeout(() => {
        window.location.href = "shoppingcart.html"; // Chuyển hướng đến trang giỏ hàng
    }, 100);
}



function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Cập nhật hiển thị số lượng giỏ hàng trên thanh điều hướng
    document.querySelector('.count-product-cart').innerText = cartCount; // Đảm bảo có phần tử với class 'count-product-cart'
}


function closeModal() {
    document.querySelectorAll('.modal').forEach(item => {
        item.classList.remove('open');
    });
    document.body.style.overflow = "auto";
}


// Hiển thị sản phẩm
function renderProducts(showProduct) {
    let productHtml = '';
    if (showProduct.length == 0) {
        document.getElementById("home-title").style.display = "none";
        productHtml = `<div class="no-result"><div class="no-result-h">Tìm kiếm không có kết quả</div><div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div><div class="no-result-i"><i class="fa-light fa-face-sad-cry"></i></div></div>`;
    } else {
        document.getElementById("home-title").style.display = "block";
        showProduct.forEach((product) => {
            productHtml += `<div class="col-product">
                <article class="card-product">
                    <div class="card-header">
                        <a href="#" class="card-image-link" onclick="detailProduct(${product.id})">
                            <img class="card-image" src="${product.img}" alt="${product.title}">
                        </a>
                    </div>
                    <div class="food-info">
                        <div class="card-content">
                            <div class="card-title">
                                <a href="#" class="card-title-link" onclick="detailProduct(${product.id})">${product.title}</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="product-price">
                                <span class="current-price">${vnd(product.price)}</span>
                            </div>
                            <div class="product-buy">
                                <button onclick="detailProduct(${product.id})" class="card-button order-item"><i class="fa-regular fa-cart-shopping-fast"></i> Đặt hàng</button>
                                
                            </div> 
                        </div>
                    </div>
                </article>
            </div>`;
        });
    }
    document.getElementById('home-products').innerHTML = productHtml;
}

// Hiển thị sản phẩm trên trang chính
function showHomeProduct(products) {
    let productAll = products.filter(item => item.status == 1);
    displayList(productAll, perPage, currentPage);
    setupPagination(productAll, perPage);
}


// Open Search Advanced
document.querySelector(".filter-btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".advanced-search").classList.toggle("open");
    document.getElementById("home-service").scrollIntoView();
})

document.querySelector(".form-search-input").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("home-service").scrollIntoView();
})

function closeSearchAdvanced() {
    document.querySelector(".advanced-search").classList.toggle("open");

}

// Find Product
var productAll = JSON.parse(localStorage.getItem('products')).filter(item => item.status == 1);

function searchProducts(mode) {
    let valeSearchInput = document.querySelector('.form-search-input').value;
    let valueCategory = document.getElementById("advanced-search-category-select").value;
    let minPrice = document.getElementById("min-price").value;
    let maxPrice = document.getElementById("max-price").value;
    if (parseInt(minPrice) > parseInt(maxPrice) && minPrice != "" && maxPrice != "") {
        alert("Giá đã nhập sai !");
    }

    let result = valueCategory == "Tất cả" ? productAll : productAll.filter((item) => {
        return item.category == valueCategory;
    });

    result = valeSearchInput == "" ? result : result.filter(item => {
        return item.title.toString().toUpperCase().includes(valeSearchInput.toString().toUpperCase());
    })

    if (minPrice == "" && maxPrice != "") {
        result = result.filter((item) => item.price <= maxPrice);
    } else if (minPrice != "" && maxPrice == "") {
        result = result.filter((item) => item.price >= minPrice);
    } else if (minPrice != "" && maxPrice != "") {
        result = result.filter((item) => item.price <= maxPrice && item.price >= minPrice);
    }

    document.getElementById("home-service").scrollIntoView();
    switch (mode) {
        case 0:
            result = JSON.parse(localStorage.getItem('products'));
            ;
            document.querySelector('.form-search-input').value = "";
            document.getElementById("advanced-search-category-select").value = "Tất cả";
            document.getElementById("min-price").value = "";
            document.getElementById("max-price").value = "";
            break;
        case 1:
            result.sort((a, b) => a.price - b.price)
            break;
        case 2:
            result.sort((a, b) => b.price - a.price)
            break;
    }
    showHomeProduct(result)
}



function handleOrderNow(productId) {
    addToCart(productId); // Hàm này thêm sản phẩm vào giỏ hàng
    setTimeout(() => {
        window.location.href = "checkout.html"; // Chuyển hướng đến trang checkout
    }, 100); // Độ trễ ngắn để chuyển hướng mượt mà
}


// Phân trang
let perPage = 12;
let currentPage = 1;
let totalPage = 0;
let perProducts = [];

function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;
    let end = (currentPage - 1) * perPage + perPage;
    let productShow = productAll.slice(start, end);
    renderProducts(productShow);
}

function showHomeProduct(products) {
    let productAll = products.filter(item => item.status == 1)
    displayList(productAll, perPage, currentPage);
    setupPagination(productAll, perPage, currentPage);
}

window.onload = showHomeProduct(JSON.parse(localStorage.getItem('products')))

function setupPagination(productAll, perPage) {
    document.querySelector('.page-nav-list').innerHTML = '';
    let page_count = Math.ceil(productAll.length / perPage);
    for (let i = 1; i <= page_count; i++) {
        let li = paginationChange(i, productAll, currentPage);
        document.querySelector('.page-nav-list').appendChild(li);
    }
}

function paginationChange(page, productAll, currentPage) {
    let node = document.createElement(`li`);
    node.classList.add('page-nav-item');
    node.innerHTML = `<a href="javascript:;">${page}</a>`;
    if (currentPage == page) node.classList.add('active');
    node.addEventListener('click', function () {
        currentPage = page;
        displayList(productAll, perPage, currentPage);
        let t = document.querySelectorAll('.page-nav-item.active');
        for (let i = 0; i < t.length; i++) {
            t[i].classList.remove('active');
        }
        node.classList.add('active');
        document.getElementById("home-service").scrollIntoView();
    })
    return node;
}

// Back to top
window.onscroll = () => {
    let backtopTop = document.querySelector(".back-to-top")
    if (document.documentElement.scrollTop > 100) {
        backtopTop.classList.add("active");
    } else {
        backtopTop.classList.remove("active");
    }
}

// Hiển thị chuyên mục
function showCategory(category) {
    document.getElementById('trangchu').classList.remove('hide');

    let productSearch = productAll.filter(value => {
        return value.category.toString().toUpperCase().includes(category.toUpperCase());
    })
    let currentPageSeach = 1;
    displayList(productSearch, perPage, currentPageSeach);
    setupPagination(productSearch, perPage, currentPageSeach);
    document.getElementById("home-service").scrollIntoView();

}

// Chức năng đăng ký
let signupButton = document.getElementById('signup-button');
let loginButton = document.getElementById('login-button');
signupButton.addEventListener('click', (event) => {
    event.preventDefault();
    let fullNameUser = document.getElementById('names').value;
    let phoneUser = document.getElementById('phone').value;
    let emailUser = document.getElementById('emailCreate').value;
    let passwordUser = document.getElementById('passwordCreate').value;

    // Check validate
    if (fullNameUser.length == 0) {
        document.querySelector('.form-message-name form-message').innerHTML = 'Vui lòng nhập họ và tên';
        document.getElementById('names').focus();
    } else if (fullNameUser.length < 3) {
        document.querySelector('.form-message-name form-message').innerHTML = 'Vui lòng nhập họ và tên lớn hơn 3 kí tự';
        document.getElementById('names').value = '';
    } else {
        document.querySelector('.form-message-name form-message').innerHTML = '';
    }

    if (phoneUser.length == 0) {
        document.querySelector('.form-message-phone form-message').innerHTML = 'Vui lòng nhập vào số điện thoại';
    } else if (phoneUser.length != 10 || !/^[0-9]+$/.test(phoneUser)) {
        document.querySelector('.form-message-phone form-message').innerHTML = 'Vui lòng nhập vào số điện thoại 10 số';
        document.getElementById('phone').value = '';
    } else {
        document.querySelector('.form-message-phone form-message').innerHTML = '';
    }

    if (emailUser.length == 0) {
        document.querySelector('.form-message-email form-message').innerHTML = 'Vui lòng nhập email';
    } else if (emailUser.length < 6 || !/^\S+@\S+\.\S+$/.test(emailUser)) {
        document.querySelector('.form-message-email form-message').innerHTML = 'Email không hợp lệ';
        document.getElementById('emailCreate').value = '';
    } else {
        document.querySelector('.form-message-email form-message').innerHTML = '';
    }

    if (passwordUser.length == 0) {
        document.querySelector('.form-message-password form-message').innerHTML = 'Vui lòng nhập mật khẩu';
    } else if (passwordUser.length < 6) {
        document.querySelector('.form-message-password form-message').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
        document.getElementById('passwordCreate').value = '';
    } else {
        document.querySelector('.form-message-password form-message').innerHTML = '';
    }

    // Nếu tất cả các trường hợp kiểm tra đều đạt
    if (fullNameUser && phoneUser && emailUser && passwordUser) {
        let user = {
            fullname: fullNameUser,
            phone: phoneUser,
            email: emailUser,
            password: passwordUser,
            address: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 0
        };

        let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        let accountExists = accounts.some(account => account.phone === phoneUser || account.email === emailUser);

        if (!accountExists) {
            accounts.push(user);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            localStorage.setItem('currentuser', JSON.stringify(user));
            toast({title: 'Thành công', message: 'Tạo thành công tài khoản!', type: 'success', duration: 3000});
            closeModal();
        } else {
            toast({title: 'Thất bại', message: 'Tài khoản đã tồn tại!', type: 'error', duration: 3000});
        }
    }
    console.log("hi");
});

// Chức năng đăng nhập
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    let namelog = document.getElementById('login-name').value;
    let passlog = document.getElementById('login-password').value;
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    if (namelog.length == 0) {
        document.querySelector('.form-message-namelogin').innerHTML = 'Vui lòng nhập họ và tên';
        document.getElementById('login-name').focus();
    } else if (namelog.length < 3) {
        document.querySelector('.form-message-namelogin').innerHTML = 'Vui lòng nhập họ và tên lớn hơn 3 kí tự';
        document.getElementById('login-name').value = '';
    } else {
        document.querySelector('.form-message-namelogin').innerHTML = '';
    }

    if (passlog.length == 0) {
        document.querySelector('.form-message-check-login').innerHTML = 'Vui lòng nhập mật khẩu';
    } else if (passlog.length < 6) {
        document.querySelector('.form-message-check-login').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
        document.getElementById('login-password').value = '';
    } else {
        document.querySelector('.form-message-check-login').innerHTML = '';
    }

    if (namelog && passlog) {
        let user = accounts.find(item => item.fullname === namelog && item.password === passlog);
        if (!user) {
            toast({
                title: 'Error',
                message: 'Tài khoản của bạn không tồn tại hoặc sai mật khẩu',
                type: 'error',
                duration: 3000
            });
        } else if (user.status == 0) {
            toast({title: 'Warning', message: 'Tài khoản của bạn đã bị khóa', type: 'warning', duration: 3000});
        } else {
            localStorage.setItem('currentuser', JSON.stringify(user));
            toast({title: 'Success', message: 'Đăng nhập thành công', type: 'success', duration: 3000});
            closeModal();
            kiemtradangnhap();
            checkAdmin();
            updateAmount();
        }
    }
});

// Ẩn tất cả các phần
function hideAllSections() {
    document.getElementById('trangchu').style.display = 'none';
    document.getElementById('account-user').style.display = 'none';
    document.getElementById('order-history').style.display = 'none';
}

// Hiển thị trang chủ
function showHomePage() {
    hideAllSections();
    document.getElementById('trangchu').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    kiemtradangnhap();

    // Sự kiện khi nhấn vào nút "Tài khoản của tôi"
    document.querySelector('.auth-container').addEventListener('click', (event) => {
        event.stopPropagation();
        showAccountInfo();
    });

    // Sự kiện lưu thông tin khi nhấn "Lưu thay đổi"
    document.getElementById('save-info-user').addEventListener('click', (event) => {
        event.preventDefault();
        changeInformation();
    });

    // Sự kiện lưu mật khẩu khi nhấn "Đổi mật khẩu"
    document.getElementById('save-password').addEventListener('click', (event) => {
        event.preventDefault();
        changePassword();
    });
});

// Hiển thị thông tin tài khoản nếu người dùng đã đăng nhập
function showAccountInfo() {
    hideAllSections();
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));

    if (currentUser) {
        document.getElementById('infoname').value = currentUser.fullname || '';
        document.getElementById('infophone').value = currentUser.phone || '';
        document.getElementById('infoemail').value = currentUser.email || '';
        document.getElementById('infoaddress').value = currentUser.address || '';
        
        document.getElementById('account-user').style.display = 'block';
    } else {
        alert("Bạn cần đăng nhập để xem thông tin tài khoản.");
    }
}

// Ẩn tất cả các phần trang
function hideAllSections() {
    document.getElementById('trangchu').style.display = 'none';
    document.getElementById('account-user').style.display = 'none';
    document.getElementById('order-history').style.display = 'none';
}

// Cập nhật thông tin tài khoản
function changeInformation() {
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));

    if (currentUser) {
        let infoname = document.getElementById('infoname').value;
        let infoemail = document.getElementById('infoemail').value;
        let infoaddress = document.getElementById('infoaddress').value;

        // Kiểm tra email hợp lệ
        if (infoemail && !emailIsValid(infoemail)) {
            document.querySelector('.inforemail-error').innerHTML = 'Vui lòng nhập email hợp lệ!';
            return;
        } else {
            document.querySelector('.inforemail-error').innerHTML = ''; // Xóa lỗi email nếu có
        }

        // Cập nhật thông tin vào currentUser và accounts
        currentUser.fullname = infoname;
        currentUser.email = infoemail;
        currentUser.address = infoaddress;

        const index = accounts.findIndex(acc => acc.phone === currentUser.phone);
        if (index !== -1) {
            accounts[index] = currentUser;
            localStorage.setItem('accounts', JSON.stringify(accounts));
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            kiemtradangnhap(); // Cập nhật hiển thị thông tin
            toast({ title: 'Success', message: 'Cập nhật thông tin thành công!', type: 'success', duration: 3000 });
        }
    }
}

// Hàm kiểm tra định dạng email
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Đổi mật khẩu người dùng
function changePassword() {
    const currentUser = JSON.parse(localStorage.getItem("currentuser"));
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    let passwordCur = document.getElementById('password-cur-info').value;
    let passwordAfter = document.getElementById('password-after-info').value;
    let passwordConfirm = document.getElementById('password-comfirm-info').value;

    // Kiểm tra điều kiện nhập của các trường mật khẩu
    if (!passwordCur) {
        document.querySelector('.password-cur-info-error').innerHTML = 'Vui lòng nhập mật khẩu hiện tại';
        return;
    }

    if (!passwordAfter || passwordAfter.length < 6) {
        document.querySelector('.password-after-info-error').innerHTML = 'Vui lòng nhập mật khẩu mới có ít nhất 6 ký tự';
        return;
    }

    if (!passwordConfirm) {
        document.querySelector('.password-after-comfirm-error').innerHTML = 'Vui lòng xác nhận mật khẩu mới';
        return;
    }

    // Kiểm tra mật khẩu hiện tại
    if (passwordCur !== currentUser.password) {
        document.querySelector('.password-cur-info-error').innerHTML = 'Mật khẩu hiện tại không đúng';
        return;
    }

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu có khớp nhau không
    if (passwordAfter !== passwordConfirm) {
        document.querySelector('.password-after-comfirm-error').innerHTML = 'Mật khẩu xác nhận không khớp';
        return;
    }

    // Cập nhật mật khẩu mới
    currentUser.password = passwordAfter;
    localStorage.setItem('currentuser', JSON.stringify(currentUser));

    // Tìm người dùng trong danh sách accounts và cập nhật mật khẩu
    const index = accounts.findIndex(acc => acc.phone === currentUser.phone);
    if (index !== -1) {
        accounts[index].password = passwordAfter;
        localStorage.setItem('accounts', JSON.stringify(accounts));
        
        // Hiển thị thông báo thành công
        toast({ title: 'Thành công', message: 'Đổi mật khẩu thành công!', type: 'success', duration: 3000 });
    }
}

// Kiểm tra đăng nhập và hiển thị thông tin nếu đã đăng nhập
function kiemtradangnhap() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));

    if (currentUser) {
        const authContainer = document.querySelector('.auth-container');
        authContainer.innerHTML = `<span class="text-dndk">Tài khoản</span>
            <span class="text-tk">${currentUser.fullname} <i class="fa-sharp fa-solid fa-caret-down"></i></span>`;

        document.getElementById('auth-options').style.display = 'none';
        document.getElementById('user-menu').style.display = 'block';
    } else {
        document.getElementById('auth-options').style.display = 'block';
        document.getElementById('user-menu').style.display = 'none';
    }
}

// Đăng xuất
function logOut() {
    localStorage.removeItem('currentuser');
    window.location.href = "home.html"; // Chuyển về trang chủ sau khi đăng xuất
}

// Hàm toast đơn giản để hiển thị thông báo
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${duration / 1000}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close"><i class="fas fa-times"></i></div>
        `;

        main.appendChild(toast);

        // Tự động xóa thông báo sau khi hết thời gian hiển thị
        setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
    }
}
















// Hiển thị lịch sử đơn hàng khi nhấn vào "Đơn hàng đã mua"
function showOrderHistory() {
    hideAllSections();
    document.getElementById('order-history').style.display = 'block';
}

function kiemtradangnhap() {
    const currentUser = localStorage.getItem('currentuser');
    if (currentUser) {
        const user = JSON.parse(currentUser);

        // Cập nhật tên người dùng và hiển thị dropdown trong auth-container
        const authContainer = document.querySelector('.auth-container');
        if (authContainer) {
            authContainer.innerHTML = `<span class="text-dndk">Tài khoản</span>
                <span class="text-tk">${user.fullname} <i class="fa-sharp fa-solid fa-caret-down"></i></span>`;
        }

        // Ẩn Đăng nhập / Đăng ký nếu đã đăng nhập
        const textDndkElement = document.querySelector('.text-dndk');
        const authOptions = document.getElementById("auth-options");
        if (textDndkElement && authOptions) {
            textDndkElement.style.display = 'none';
            authOptions.style.display = 'none';
        }

        // Xác định menu dựa trên loại người dùng
        const menuHtml = generateMenuHtml(user);
        const userMenuElement = document.getElementById('user-menu');
        if (userMenuElement) {
            userMenuElement.innerHTML = menuHtml;
            userMenuElement.style.display = 'none'; // Ẩn menu mặc định
        }

        // Thêm sự kiện đăng xuất
        const logoutElement = document.getElementById('logout');
        if (logoutElement) {
            logoutElement.addEventListener('click', logOut);
        }

        // Hiển thị menu khi click vào auth-container
        if (authContainer) {
            authContainer.addEventListener('click', (event) => {
                event.stopPropagation(); // Ngăn chặn sự kiện nổi bọt
                userMenuElement.style.display = userMenuElement.style.display === 'block' ? 'none' : 'block';
            });
        }

        // Đóng menu khi click bên ngoài
        document.addEventListener('click', (event) => {
            if (!authContainer.contains(event.target)) {
                userMenuElement.style.display = 'none';
            }
        });
    }
}

function generateMenuHtml(user) {
    let menuHtml = `<li><a href="javascript:void(0);" onclick="showAccountInfo()"><i class="fa-solid fa-user"></i> Tài khoản của tôi</a></li>
        <li><a href="javascript:void(0);" onclick="showOrderHistory()"><i class="fa-solid fa-bag-shopping"></i> Đơn hàng đã mua</a></li>`;

    if (user.userType === 1) {
        // Chỉ thêm cho admin
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



















