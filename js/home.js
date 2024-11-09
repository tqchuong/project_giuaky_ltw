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
    // Ngăn không cho hành động mặc định (nếu cần)
    event.preventDefault();
    let infoProduct = products.find(sp => sp.id === index);

    let reviewsHTML = '';
    if (infoProduct.reviews && infoProduct.reviews.length > 0) {
        reviewsHTML = infoProduct.reviews.map(review => `  
            <div class="review">  
                <strong>${review.customer}</strong>: ${review.comment}  
            </div>  
        `).join('');
    } else {
        reviewsHTML = '<p>Chưa có đánh giá nào.</p>';
    }

    let modalHtml = `  
        <div class="modal-header">  
            <img class="product-image" src="${infoProduct.img}" alt="${infoProduct.title}">  
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
                ${infoProduct.rating ? `<p>Đánh giá: ${infoProduct.rating} / 5</p>` : '<p>Không có đánh giá.</p>'}  
                ${infoProduct.views ? `<p>Lượt xem: ${infoProduct.views}</p>` : '<p>Không có thông tin lượt xem.</p>'}  
            </div>  
            <div class="product-reviews">  
                <h3>Đánh giá:</h3>  
                ${reviewsHTML}  
            </div>  
        </div>  
        <div class="notebox">  
            <p class="notebox-title">Ghi chú</p>  
            <textarea class="text-note" id="popup-detail-note" placeholder="Nhập thông tin cần lưu ý..."></textarea>  
        </div>  
        <div class="modal-footer">  
            <div class="price-total">  
                <span class="thanhtien">Thành tiền</span>  
                <span class="price">${vnd(infoProduct.price)}</span>  
            </div>  
            <div class="modal-footer-control">  
                <button class="button-dathangngay" data-product="${infoProduct.id}">Đặt hàng ngay</button>  
                <button class="button-dat" id="add-cart" title="Thêm vào giỏ hàng" onclick="animationCart()">  
                    <i class="fa-light fa-basket-shopping"></i>  
                </button>  
            </div>  
        </div>  
    `;

    document.querySelector('#product-detail-content').innerHTML = modalHtml;
    modal.classList.add('open');
    document.body.style.overflow = "hidden";
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
    // Them san pham vao gio hang
    let productbtn = document.querySelector('.button-dat');
    productbtn.addEventListener('click', (e) => {
        if (localStorage.getItem('currentuser')) {
            addCart(infoProduct.id);
        } else {
            toast({title: 'Warning', message: 'Chưa đăng nhập tài khoản !', type: 'warning', duration: 3000});
        }

    })
    // Mua ngay san pham
    dathangngay();
}

function animationCart() {
    document.querySelector(".count-product-cart").style.animation = "slidein ease 1s"
    setTimeout(() => {
        document.querySelector(".count-product-cart").style.animation = "none"
    }, 1000)
}

// Them SP vao gio hang
function addCart(index) {
    let currentuser = localStorage.getItem('currentuser') ? JSON.parse(localStorage.getItem('currentuser')) : [];
    let soluong = document.querySelector('.input-qty').value;
    let popupDetailNote = document.querySelector('#popup-detail-note').value;
    let note = popupDetailNote == "" ? "Không có ghi chú" : popupDetailNote;
    let productcart = {
        id: index,
        soluong: parseInt(soluong),
        note: note
    }
    let vitri = currentuser.cart.findIndex(item => item.id == productcart.id);
    if (vitri == -1) {
        currentuser.cart.push(productcart);
    } else {
        currentuser.cart[vitri].soluong = parseInt(currentuser.cart[vitri].soluong) + parseInt(productcart.soluong);
    }
    localStorage.setItem('currentuser', JSON.stringify(currentuser));
    updateAmount();
    closeModal();
    // toast({ title: 'Success', message: 'Thêm thành công sản phẩm vào giỏ hàng', type: 'success', duration: 3000 });
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

