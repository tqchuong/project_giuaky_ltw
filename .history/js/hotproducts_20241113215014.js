

// Doi sang dinh dang tien VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
// Open Search Advanced
document.querySelector(".filter-btn").addEventListener("click",(e) => {
    e.preventDefault();
    document.querySelector(".advanced-search").classList.toggle("open");
    document.getElementById("home-service").scrollIntoView();
})

document.querySelector(".form-search-input").addEventListener("click",(e) => {
    e.preventDefault();
    document.getElementById("home-service").scrollIntoView();
})

function closeSearchAdvanced() {
    document.querySelector(".advanced-search").classList.toggle("open");
}


//Page
function renderProducts(showProduct) {

    let productHtml = '';
    if(showProduct.length == 0) {
        document.getElementById("home-title").style.display = "none";
        productHtml = `<div class="no-result"><div class="no-result-h">Tìm kiếm không có kết quả</div><div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div><div class="no-result-i"><i class="fa-solid fa-face-sad-cry"></i></div></div>`;
    } else {
        document.getElementById("home-title").style.display = "block";
        showProduct.forEach((product) => {
            productHtml += `<div class="col-product">
            <article class="card-product" >
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
                        <button onclick="detailProduct(${product.id})" class="card-button order-item"><i class="fa-solid fa-cart-plus"></i> Đặt hàng</button>
                    </div>
                </div>
                </div>
            </article>
        </div>`;
        });
    }
    document.getElementById('home-products').innerHTML = productHtml;
}


// Find Product(chưa fix được)
var productAll = JSON.parse(localStorage.getItem('products'));
function searchProducts(mode) {
    let valeSearchInput = document.querySelector('.form-search-input').value;
    let valueCategory = document.getElementById("advanced-search-category-select").value;
    let minPrice = document.getElementById("min-price").value;
    let maxPrice = document.getElementById("max-price").value;
    if(parseInt(minPrice) > parseInt(maxPrice) && minPrice != "" && maxPrice != "") {
        alert("Giá đã nhập sai !");
    }

    let result = valueCategory == "Tất cả" ? productAll : productAll.filter((item) => {
        return item.category == valueCategory;
    });

    result = valeSearchInput == "" ? result : result.filter(item => {
        return item.title.toString().toUpperCase().includes(valeSearchInput.toString().toUpperCase());
    })

    if(minPrice == "" && maxPrice != "") {
        result = result.filter((item) => item.price <= maxPrice);
    } else if (minPrice != "" && maxPrice == "") {
        result = result.filter((item) => item.price >= minPrice);
    } else if(minPrice != "" && maxPrice != "") {
        result = result.filter((item) => item.price <= maxPrice && item.price >= minPrice);
    }

    document.getElementById("home-service").scrollIntoView();
    switch (mode){
        case 0:
            result = JSON.parse(localStorage.getItem('products'));;
            document.querySelector('.form-search-input').value = "";
            document.getElementById("advanced-search-category-select").value = "Tất cả";
            document.getElementById("min-price").value = "";
            document.getElementById("max-price").value = "";
            break;
        case 1:
            result.sort((a,b) => a.price - b.price)
            break;
        case 2:
            result.sort((a,b) => b.price - a.price)
            break;
    }
    showHomeProduct(result)
}



// Phân trang
let perPage = 20;
let currentPage = 1;
let totalPage = 0;
let perProducts = [];

function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;
    let end = (currentPage - 1) * perPage + perPage;
    let productShow = productAll.slice(start, end);
    renderProducts(productShow);
}

function showHomeProduct() {

    let products = JSON.parse(localStorage.getItem('products')) || [];
    let hotProducts = JSON.parse(localStorage.getItem('hotProducts')) || [];

    // Lọc các sản phẩm có status == 1 và có id nằm trong hotProducts
    let productAll = products.filter(item =>
        item.status == 1 && hotProducts.some(hp => hp.id === item.id)
    );

    // Hiển thị sản phẩm với phân trang
    displayList(productAll, perPage, currentPage);
    setupPagination(productAll, perPage, currentPage);
}

window.onload = showHomeProduct;

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
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let hotProducts = JSON.parse(localStorage.getItem('hotProducts')) || [];

    // Lọc các sản phẩm có status == 1 và có id nằm trong hotProducts
    let productAll = products.filter(item =>
        item.status == 1 && hotProducts.some(hp => hp.id === item.id)
    );
    document.getElementById('trangchu').classList.remove('hide');

    let productSearch = productAll.filter(value => {
        return value.category.toString().toUpperCase().includes(category.toUpperCase());
    })
    let currentPageSeach = 1;
    displayList(productSearch, perPage, currentPageSeach);
    setupPagination(productSearch, perPage, currentPageSeach);
    document.getElementById("home-service").scrollIntoView();

}



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
// Hiển thị thông tin tài khoản khi nhấn vào "Tài khoản của tôi"
function showAccountInfo() {
    hideAllSections();
    document.getElementById('account-user').style.display = 'block';
}

// Hiển thị lịch sử đơn hàng khi nhấn vào "Đơn hàng đã mua"
function showOrderHistory() {
    hideAllSections();
    document.getElementById('order-history').style.display = 'block';
}
// Kiểm tra trạng thái đăng nhập và hiển thị thông tin tài khoản
function kiemtradangnhap() {
    const currentUser = localStorage.getItem('currentuser');
    if (currentUser) {
        const user = JSON.parse(currentUser);

        // Cập nhật tên người dùng
        const userFullnameElement = document.getElementById("user-fullname");
        if (userFullnameElement) {
            userFullnameElement.innerHTML = `${user.fullname} <i class="fa-sharp fa-solid fa-caret-down"></i>`;
        }

        // Ẩn Đăng nhập / Đăng ký nếu đã đăng nhập
        const textDndkElement = document.querySelector('.text-dndk');
        const authOptions = document.getElementById("auth-options");
        if (textDndkElement && authOptions) {
            textDndkElement.style.display = 'none';
            authOptions.style.display = 'none';
        }

        // Hiển thị menu quản lý nếu là admin
        let menuHtml = '';
        if (user.userType === 1) {
            menuHtml += `<li><a href="admin.html"><i class="fa-solid fa-gear"></i> Quản lý cửa hàng</a></li>`;
        }

        menuHtml += `
            <li><a href="javascript:void(0);" onclick="showAccountInfo()"><i class="fa-solid fa-user"></i> Tài khoản của tôi</a></li>
            <li><a href="javascript:void(0);" onclick="showOrderHistory()"><i class="fa-solid fa-bag-shopping"></i> Đơn hàng đã mua</a></li>
            <li class="border"><a id="logout" href="login.html"><i class="fa-solid fa-right-from-bracket"></i> Thoát tài khoản</a></li>
        `;

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
        const authContainer = document.querySelector('.auth-container');
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

// Xử lý sự kiện đăng xuất
function logOut() {
    localStorage.removeItem('currentuser');
    window.location.href = "login.html"; // Quay lại login sau khi đăng xuất
}

// Thực thi kiểm tra khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {

    kiemtradangnhap();
});

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
    document.querySelectorAll('.modal').forEach(item => {
        item.classList.remove('open');
    });
    document.body.style.overflow = "auto";
}

function detailProduct(index) {
    let modal = document.querySelector('.modal.product-detail');
    let products = JSON.parse(localStorage.getItem('products'));
    let viewProducts = JSON.parse(localStorage.getItem('viewProducts'));
    event.preventDefault();

    // Lấy thông tin sản phẩm cơ bản
    let infoProduct = products.find(sp => sp.id === index);
    if (!infoProduct) return;
    let infoProduct2 = viewProducts.find(sp => sp.id === index);
    if (!infoProduct2) return;

    // Tăng lượt xem trong localStorage
    infoProduct2.view = (infoProduct2.view || 0) + 1;

    // Lưu lại sản phẩm vào localStorage sau khi tăng lượt xem
    viewProducts = viewProducts.map(sp => sp.id === index ? infoProduct2 : sp);
    localStorage.setItem('viewProducts', JSON.stringify(viewProducts));

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
                <span>Lượt xem: ${infoProduct2.view || 'N/A'} 👁️</span> |   
                <span>${productReviews.length} Đánh Giá</span>
            </p>
        </div>
        
        <h3>Chi tiết sản phẩm</h3>
        <div class="product-details">
            <p class="detail-item"><strong>Danh mục:</strong> ${detailedInfo.category}</p>
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

function addToCart(productId) {
    // Lấy dữ liệu sản phẩm từ localStorage
    let products = JSON.parse(localStorage.getItem('products'));
    let product = products.find(sp => sp.id === productId);

    if (!product) return;

    // Lấy số lượng từ input trong modal
    let quantityInput = document.querySelector('.input-qty');
    let quantity = parseInt(quantityInput.value) || 1;


    let currentuser = localStorage.getItem('currentuser') ? JSON.parse(localStorage.getItem('currentuser')) : null;

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

    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

function handleOrderNow(productId) {
    addToCart(productId); // Gọi hàm thêm sản phẩm vào giỏ hàng
    setTimeout(() => {
        window.location.href = "shoppingcart.html"; // Chuyển hướng sau 100ms
    }, 100);
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Cập nhật hiển thị số lượng giỏ hàng trên thanh điều hướng
    document.querySelector('.cart-count').innerText = cartCount; // Đảm bảo bạn có một phần tử với class 'cart-count'
}





