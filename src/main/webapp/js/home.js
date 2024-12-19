

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


// Back to top
window.onscroll = () => {
    let backtopTop = document.querySelector(".back-to-top")
    if (document.documentElement.scrollTop > 100) {
        backtopTop.classList.add("active");
    } else {
        backtopTop.classList.remove("active");
    }
}



// Hiển thị trang chủ
function showHomePage() {
    hideAllSections();
    document.getElementById('trangchu').style.display = 'block';
}


// Số sản phẩm hiển thị mỗi trang
let perPage = 20;
let currentPage = 1; // Trang hiện tại

// Lấy danh sách sản phẩm từ DOM
const products = Array.from(document.querySelectorAll(".col-product"));

// Hiển thị sản phẩm từng trang
function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;
    let end = currentPage * perPage;
    let productShow = productAll.slice(start, end);

    // Ẩn tất cả sản phẩm
    products.forEach(product => (product.style.display = "none"));

    // Hiển thị sản phẩm của trang hiện tại
    productShow.forEach(product => (product.style.display = "block"));
}

// Hiển thị sản phẩm và thiết lập phân trang
function showHomeProduct(products) {
    displayList(products, perPage, currentPage);
    setupPagination(products, perPage);
}

// Gắn trang
function setupPagination(productAll, perPage) {
    document.querySelector(".page-nav-list").innerHTML = ""; // Xóa phân trang cũ
    let pageCount = Math.ceil(productAll.length / perPage);

    // Giới hạn chỉ hiển thị tối đa 5 trang
    let pageLimit = 5;
    let startPage = currentPage > 3 ? currentPage - 2 : 1;
    let endPage = Math.min(startPage + pageLimit - 1, pageCount);

    // Thêm nút "<" để chuyển sang trang trước
    let prevButton = document.createElement("li");
    prevButton.classList.add("page-nav-item");
    prevButton.innerHTML = `<a href="javascript:;"><i class="fa-solid fa-left" style="color: #B5292F;"></i></a>`;
    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            setupPagination(productAll, perPage);
            displayList(productAll, perPage, currentPage);
            window.scrollTo(0,600);
        }
    });
    document.querySelector(".page-nav-list").appendChild(prevButton);

    // Hiển thị các trang hiện tại
    for (let i = startPage; i <= endPage; i++) {
        let li = paginationChange(i, productAll);
        document.querySelector(".page-nav-list").appendChild(li);
    }

    // Thêm nút ">" để chuyển sang trang sau
    let nextButton = document.createElement("li");
    nextButton.classList.add("page-nav-item");
    nextButton.innerHTML = `<a href="javascript:;"><i class="fa-solid fa-right" style="color: #B5292F;"></i></a>`;
    nextButton.addEventListener("click", function () {
        if (currentPage < pageCount) {
            currentPage++;
            setupPagination(productAll, perPage);
            displayList(productAll, perPage, currentPage);
            window.scrollTo(0,600);
        }
    });
    document.querySelector(".page-nav-list").appendChild(nextButton);
}

// Tạo nút trang
function paginationChange(page, productAll) {
    let node = document.createElement("li");
    node.classList.add("page-nav-item");
    node.innerHTML = `<a href="javascript:;">${page}</a>`;

    // Đặt trang hiện tại là active
    if (currentPage === page) node.classList.add("active");

    node.addEventListener("click", function () {
        currentPage = page;
        displayList(productAll, perPage, currentPage);

        // Xóa class active khỏi các nút khác
        document.querySelectorAll(".page-nav-item.active").forEach(item => {
            item.classList.remove("active");
        });

        node.classList.add("active");

        // Cuộn về đầu phần sản phẩm
        window.scrollTo(0, 600);
        setupPagination(productAll, perPage);
    });

    return node;
}

// Khởi tạo khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    showHomeProduct(products); // Hiển thị trang đầu tiên
});


//tìm kiếm sản phẩm
function searchProducts(mode) {
    const products = Array.from(document.querySelectorAll(".col-product"));

    const productAll = products.map(product => {
        const title = product.querySelector(".card-title-link").textContent.trim();
        const category = product.dataset.loai || "";
        const priceText = product.querySelector(".current-price:last-child").textContent.trim();
        const price = parseFloat(priceText.replace(/[^0-9]/g, ""));
        return {
            element: product,
            title,
            category,
            price,
        };
    });

    const valeSearchInput = document.querySelector('.form-search-input').value.trim();
    const valueCategory = document.getElementById("advanced-search-category-select").value;
    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

    if (minPrice > maxPrice) {
        alert("Giá đã nhập sai!");
        return;
    }

    let result = valueCategory === "Tất cả" ? productAll : productAll.filter(item => item.category === valueCategory);

    if (valeSearchInput !== "") {
        result = result.filter(item => item.title.toUpperCase().includes(valeSearchInput.toUpperCase()));
    }

    result = result.filter(item => item.price >= minPrice && item.price <= maxPrice);

    switch (mode) {
        case 0:
            result = productAll;
            document.querySelector('.form-search-input').value = "";
            document.getElementById("advanced-search-category-select").value = "Tất cả";
            document.getElementById("min-price").value = "";
            document.getElementById("max-price").value = "";
            break;
        case 1:
            result.sort((a, b) => a.price - b.price);
            break;
        case 2:
            result.sort((a, b) => b.price - a.price);
            break;
    }

    const filteredProducts = result.map(item => item.element);

    currentPage = 1; // Đặt lại trang hiện tại
    displayList(filteredProducts, perPage, currentPage);
    setupPagination(filteredProducts, perPage);



    window.scrollTo(0,600);
}


function showCategory(category) {
    // Hiển thị phần tử 'trangchu'
    document.getElementById('trangchu').classList.remove('hide');

    // Gửi yêu cầu AJAX đến máy chủ
    fetch(`/project/products?category=${encodeURIComponent(category)}`)
        .then(response => response.json()) // Parse JSON từ response
        .then(products => {
            console.log("Sản phẩm tìm thấy theo danh mục:", products);

            // Tạo danh sách sản phẩm DOM từ dữ liệu JSON
            const productElements = products.map(product => {
                return `
                    <div class="col-product" data-loai="${product.category}">
                        <h3>${product.name}</h3>
                        <p>Giá: ${product.price} VNĐ</p>
                    </div>
                `;
            });

            // Hiển thị danh sách sản phẩm
            const productContainer = document.getElementById("product-list");
            productContainer.innerHTML = productElements.join("");

            // Thiết lập phân trang
            const filteredProducts = Array.from(document.querySelectorAll(".col-product"));
            displayList(filteredProducts, perPage, currentPage);
            setupPagination(filteredProducts, perPage);

            // Cuộn tới phần tử hiển thị danh sách
            window.scrollTo(0, 600);
        })
        .catch(error => console.error("Lỗi khi tải sản phẩm:", error));
}



//chuyển động banner
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideCount = slides.children.length;
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100; // Dịch chuyển theo % của chiều rộng
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(currentIndex);
}

let autoSlide = setInterval(nextSlide, 3000); // Tự động chuyển sau 5s

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 2000);
}


document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử HTML
    const accountLink = document.querySelector("a[onclick='showAccountInfo()']");
    const orderHistoryLink = document.querySelector("a[onclick='showOrderHistory()']");
    const accountUserSection = document.getElementById("account-user");
    const orderHistorySection = document.getElementById("order-history");
    const homeSection = document.getElementById("trangchu");

    // Hàm hiển thị phần "Tài khoản của tôi" và ẩn các phần khác
    function showAccountInfo() {
        accountUserSection.style.display = "block";
        orderHistorySection.style.display = "none";
        homeSection.style.display = "none";
    }

    // Hàm hiển thị phần "Đơn hàng đã mua" và ẩn các phần khác
    function showOrderHistory() {
        accountUserSection.style.display = "none";
        orderHistorySection.style.display = "block";
        homeSection.style.display = "none";
    }

    // Gắn sự kiện click cho các liên kết
    if (accountLink) {
        accountLink.addEventListener("click", function (e) {
            e.preventDefault(); // Ngăn chặn hành động mặc định
            showAccountInfo();
        });
    }

    if (orderHistoryLink) {
        orderHistoryLink.addEventListener("click", function (e) {
            e.preventDefault(); // Ngăn chặn hành động mặc định
            showOrderHistory();
        });
    }
});


//chuyển động sản phẩm
const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.children);

// Nhân đôi các mục trong carousel để tạo hiệu ứng vô tận
items.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
});

let scrollPosition = 0;

function autoScroll() {
    scrollPosition += 1;
    if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
    }
    carousel.scrollLeft = scrollPosition;
    requestAnimationFrame(autoScroll);
}
autoScroll();