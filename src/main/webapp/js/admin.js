// Chuyển đổi tab giữa các danh mục
const sidebars = document.querySelectorAll(".sidebar-list-item.tab-content");
const sections = document.querySelectorAll(".section");

for (let i = 0; i < sidebars.length; i++) {
    sidebars[i].onclick = function () {
        document.querySelector(".sidebar-list-item.active").classList.remove("active");
        document.querySelector(".section.active").classList.remove("active");
        sidebars[i].classList.add("active");
        sections[i].classList.add("active");
    };
}

// Tìm kiếm sản phẩm
document.getElementById("form-search-product").addEventListener("input", function () {
    let keyword = this.value.toLowerCase();
    let products = document.querySelectorAll("#show-product .list");
    products.forEach(product => {
        let title = product.querySelector(".list-info h4").textContent.toLowerCase();
        product.style.display = title.includes(keyword) ? "" : "none";
    });
});

// Tìm kiếm khách hàng
document.getElementById("form-search-user").addEventListener("input", function () {
    let keyword = this.value.toLowerCase();
    let users = document.querySelectorAll("#show-user tr");
    users.forEach(user => {
        let name = user.cells[1].textContent.toLowerCase();
        let contact = user.cells[2].textContent.toLowerCase();
        user.style.display = name.includes(keyword) || contact.includes(keyword) ? "" : "none";
    });
});

// Tìm kiếm đơn hàng
document.getElementById("form-search-order").addEventListener("input", function () {
    let keyword = this.value.toLowerCase();
    let orders = document.querySelectorAll("#showOrder tr");
    orders.forEach(order => {
        let orderId = order.cells[0].textContent.toLowerCase();
        let customer = order.cells[1].textContent.toLowerCase();
        order.style.display = orderId.includes(keyword) || customer.includes(keyword) ? "" : "none";
    });
});

// Lọc trạng thái khách hàng
document.getElementById("tinh-trang-user").addEventListener("change", function () {
    let selectedStatus = this.value;
    let users = document.querySelectorAll("#show-user tr");
    users.forEach(user => {
        let statusElement = user.querySelector(".status-complete, .status-no-complete");
        let isMatch =
            selectedStatus == 2 ||
            (selectedStatus == 1 && statusElement.classList.contains("status-complete")) ||
            (selectedStatus == 0 && statusElement.classList.contains("status-no-complete"));
        user.style.display = isMatch ? "" : "none";
    });
});

// Lọc trạng thái đơn hàng
document.getElementById("tinh-trang").addEventListener("change", function () {
    let selectedStatus = this.value;
    let orders = document.querySelectorAll("#showOrder tr");
    orders.forEach(order => {
        let statusElement = order.querySelector(".status-complete, .status-no-complete");
        let isMatch =
            selectedStatus == 2 ||
            (selectedStatus == 1 && statusElement.classList.contains("status-complete")) ||
            (selectedStatus == 0 && statusElement.classList.contains("status-no-complete"));
        order.style.display = isMatch ? "" : "none";
    });
});

// Hiển thị thông báo
function showToast(type, title, message, duration = 3000) {
    toast({ title, message, type, duration });
}














function showToast(type, title, message, duration = 3000) {
    toast({ title, message, type, duration });
}




function getPathImage(path) {
    let patharr = path.split("/");
    return "./assets/img/products/" + patharr[patharr.length - 1];
}

let btnUpdateProductIn = document.getElementById("update-product-button");
btnUpdateProductIn.addEventListener("click", (e) => {
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem("products"));
    let idProduct = products[indexCur].id;
    let imgProduct = products[indexCur].img;
    let titleProduct = products[indexCur].title;
    let curProduct = products[indexCur].price;
    let descProduct = products[indexCur].desc;
    let categoryProduct = products[indexCur].category;
    let imgProductCur = getPathImage(document.querySelector(".upload-image-preview").src)
    let titleProductCur = document.getElementById("ten-mon").value;
    let curProductCur = document.getElementById("gia-moi").value;
    let descProductCur = document.getElementById("mo-ta").value;
    let categoryText = document.getElementById("chon-mon").value;

    if (imgProductCur != imgProduct || titleProductCur != titleProduct || curProductCur != curProduct || descProductCur != descProduct || categoryText != categoryProduct) {
        let productadd = {
            id: idProduct,
            title: titleProductCur,
            img: imgProductCur,
            category: categoryText,
            price: parseInt(curProductCur),
            desc: descProductCur,
            status: 1,
        };
        products.splice(indexCur, 1);
        products.splice(indexCur, 0, productadd);
        localStorage.setItem("products", JSON.stringify(products));
        toast({ title: "Success", message: "Sửa sản phẩm thành công!", type: "success", duration: 3000, });
        setDefaultValue();
        document.querySelector(".add-product").classList.remove("open");
        showProduct();
    } else {
        toast({ title: "Warning", message: "Sản phẩm của bạn không thay đổi!", type: "warning", duration: 3000, });
    }
});



function setDefaultValue() {
    document.querySelector(".upload-image-preview").src = "./assets/img/blank-image.png";
    document.getElementById("ten-mon").value = "";
    document.getElementById("gia-moi").value = "";
    document.getElementById("mo-ta").value = "";
    document.getElementById("chon-mon").value = "";
}

// Open Popup Modal
let btnAddProduct = document.getElementById("btn-add-product");
btnAddProduct.addEventListener("click", () => {
    document.querySelectorAll(".add-product-e").forEach(item => {
        item.style.display = "block";
    })
    document.querySelectorAll(".edit-product-e").forEach(item => {
        item.style.display = "none";
    })
    document.querySelector(".add-product").classList.add("open");
});


// Close Popup Modal
let closePopup = document.querySelectorAll(".modal-close");
let modalPopup = document.querySelectorAll(".modal");

for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].onclick = () => {
        modalPopup[i].classList.remove("open");
    };
}

// On change Image
function uploadImage(el) {
    let path = "./assets/img/products/" + el.value.split("\\")[2];
    document.querySelector(".upload-image-preview").setAttribute("src", path);
}


// Lọc trạng thái sản phẩm
document.getElementById("the-loai").addEventListener("change", function () {
    let selectedCategory = this.value.toLowerCase();
    let products = document.querySelectorAll("#show-product .list");

    products.forEach((product) => {
        let stockCount = parseInt(product.querySelector(".list-slkho").textContent);
        let categoryText = product.querySelector(".list-category").textContent.toLowerCase();

        if (
            selectedCategory === "tất cả" ||
            (selectedCategory === "đã xóa" && stockCount === 0) ||
            (selectedCategory === "sản phẩm gần hết hàng" && stockCount < 5) ||
            categoryText === selectedCategory
        ) {
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    });
});


// Số sản phẩm hiển thị mỗi trang
let perPage = 5;
let currentPage = 1; // Trang hiện tại

// Lấy danh sách sản phẩm từ DOM
const products = Array.from(document.querySelectorAll(".list"));

// Hiển thị sản phẩm từng trang
function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;
    let end = currentPage * perPage;
    let productShow = productAll.slice(start, end);

    // Ẩn tất cả sản phẩm
    products.forEach(product => (product.style.display = "none"));

    // Hiển thị sản phẩm của trang hiện tại
    productShow.forEach(product => (product.style.display = "flex"));
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






// Đóng tất cả modal trước khi mở modal mới
function closeAllModals() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.remove("open");
    });
}

// Reset các giá trị mặc định cho modal thêm/chỉnh sửa khách hàng
function resetCustomerForm() {
    document.getElementById("customer-fullname").value = "";
    document.getElementById("customer-phone").value = "";
    document.getElementById("customer-password").value = "";
    document.getElementById("customer-status").checked = false;
}

// Mở modal thêm mới khách hàng
document.getElementById("btn-add-user").addEventListener("click", function () {
    closeAllModals(); // Đóng các modal khác
    const modal = document.querySelector("#customer-modal");
    modal.classList.add("open");

    // Hiển thị giao diện "Thêm khách hàng mới"
    document.querySelectorAll(".add-customer-e").forEach(item => item.style.display = "block");
    document.querySelectorAll(".edit-customer-e").forEach(item => item.style.display = "none");

    // Hiển thị nút "Đăng ký"
    document.getElementById("signup-button").style.display = "block";

    // Ẩn nút "Lưu thông tin"
    document.getElementById("update-customer-button").style.display = "none";

    // Reset form về mặc định
    resetCustomerForm();
});

// Mở modal chỉnh sửa khách hàng
document.querySelectorAll(".btn-edit-customer").forEach(button => {
    button.addEventListener("click", function () {
        closeAllModals(); // Đóng các modal khác
        const modal = document.querySelector("#customer-modal");
        modal.classList.add("open");

        // Hiển thị giao diện "Chỉnh sửa thông tin"
        document.querySelectorAll(".add-customer-e").forEach(item => item.style.display = "none");
        document.querySelectorAll(".edit-customer-e").forEach(item => item.style.display = "block");

        // Ẩn nút "Đăng ký"
        document.getElementById("signup-button").style.display = "none";

        // Hiển thị nút "Lưu thông tin"
        document.getElementById("update-customer-button").style.display = "block";

        // Lấy dữ liệu khách hàng từ danh sách
        const customerRow = button.closest("tr");
        const fullname = customerRow.cells[1].textContent.trim();
        const phone = customerRow.cells[2].textContent.trim();
        const status = customerRow.querySelector(".status-complete, .status-no-complete").textContent.trim();

        // Điền dữ liệu vào form
        document.getElementById("customer-fullname").value = fullname;
        document.getElementById("customer-phone").value = phone;
        document.getElementById("customer-password").value = ""; // Mật khẩu thường không được hiển thị
        document.getElementById("customer-status").checked = (status === "Hoạt động");
    });
});

// Đóng modal khi nhấn nút close
document.querySelectorAll(".modal-close").forEach(closeButton => {
    closeButton.addEventListener("click", function () {
        const modal = closeButton.closest(".modal");
        modal.classList.remove("open");
    });
});

// Xóa người dùng khi nhấn nút Xóa
// Thêm sự kiện xóa user
document.addEventListener('DOMContentLoaded', () => {
    // Gắn sự kiện cho tất cả các nút xóa
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function () {
            const userId = this.getAttribute('data-id'); // Lấy ID người dùng từ data-id

            // Xác nhận trước khi xóa
            if (confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
                // Gửi yêu cầu tới API xóa người dùng
                fetch('/deleteUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `id=${encodeURIComponent(userId)}`, // Mã hóa dữ liệu gửi đi
                })
                    .then(response => {
                        // Kiểm tra nếu phản hồi không phải JSON hoặc có lỗi HTTP
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Xử lý kết quả phản hồi từ server
                        if (data.success) {
                            alert(data.message); // Thông báo thành công
                            const row = this.closest('tr'); // Tìm hàng tương ứng
                            if (row) row.remove(); // Xóa hàng khỏi bảng
                        } else {
                            alert(`Xóa thất bại: ${data.message}`); // Thông báo thất bại
                        }
                    })
                    .catch(error => {
                        // Xử lý lỗi xảy ra khi fetch hoặc từ server
                        console.error('Lỗi:', error);
                        alert('Có lỗi xảy ra, vui lòng thử lại sau!');
                    });
            }
        });
    });
});

button.addEventListener('click', function () {
    const userId = this.getAttribute('data-id');
    console.log("User ID to delete:", userId);
});





document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("product-form");
    const addButton = document.getElementById("add-product-button");
    const updateButton = document.getElementById("update-product-button");
    const previewImage = document.getElementById("preview-image");

    // Hàm mở modal để thêm sản phẩm
    function openAddProductModal() {
        document.getElementById("product-id").value = "";
        document.getElementById("action").value = "add";
        productForm.reset();
        previewImage.src = "image/admin/blank-image.png";
        addButton.style.display = "block";
        updateButton.style.display = "none";
    }

    // Hàm mở modal để chỉnh sửa sản phẩm
    function openEditProductModal(product) {
        document.getElementById("product-id").value = product.id;
        document.getElementById("action").value = "edit";
        document.getElementById("ten-mon").value = product.productName;
        document.getElementById("chon-mon").value = product.categoryID;
        document.getElementById("gia-moi").value = product.price;
        document.getElementById("so-luong").value = product.stockQuantity;
        document.getElementById("mo-ta").value = product.shortDescription;
        previewImage.src = product.imageURL;
        addButton.style.display = "none";
        updateButton.style.display = "block";
    }

    // Xử lý gửi form
    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(productForm);
        const url = formData.get("action") === "add" ? "/addProduct" : "/editProduct";

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    alert(data.message);
                    location.reload();
                } else {
                    alert(`Lỗi: ${data.message}`);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Có lỗi xảy ra. Vui lòng thử lại!");
            });
    });
});



