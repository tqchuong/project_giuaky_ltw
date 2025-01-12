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

        // Lấy dữ liệu khách hàng từ hàng tương ứng trong bảng
        const customerRow = button.closest("tr");
        const id = customerRow.dataset.id; // Lấy ID khách hàng từ thuộc tính data-id
        const fullname = customerRow.cells[1].textContent.trim(); // Lấy tên đầy đủ
        const phone = customerRow.cells[2].textContent.trim(); // Lấy số điện thoại
        const status = customerRow.querySelector(".status-complete, .status-no-complete").textContent.trim(); // Lấy trạng thái

        // Điền dữ liệu vào form
        document.getElementById("customer-id").value = id; // Gán ID vào input ẩn
        document.getElementById("customer-fullname").value = fullname; // Điền tên
        document.getElementById("customer-phone").value = phone; // Điền số điện thoại
        document.getElementById("customer-password").value = ""; // Để trống mật khẩu
        document.getElementById("customer-status").checked = (status === "Hoạt động"); // Đánh dấu trạng thái

        // Cập nhật giá trị của action thành "edit"
        document.getElementById("form-action").value = "edit";
    });
});



// Đóng modal khi nhấn nút close
document.querySelectorAll(".modal-close").forEach(closeButton => {
    closeButton.addEventListener("click", function () {
        const modal = closeButton.closest(".modal");
        modal.classList.remove("open");
    });
});
function openEditCustomerModal(customer) {
    document.getElementById("form-action").value = "edit";
    document.getElementById("customer-id").value = customerRow.dataset.id; // Gán id vào input ẩn
    document.getElementById("customer-fullname").value = customer.fullname;
    document.getElementById("customer-phone").value = customer.phone;
    document.getElementById("customer-password").value = ""; // Để trống mật khẩu
    document.getElementById("customer-status").checked ? "1" : "0";

    // Hiển thị modal
    document.getElementById("customer-modal").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
    const action = document.getElementById("form-action").value; // Lấy giá trị action
    const fullnameInput = document.getElementById("customer-fullname");

    // Kiểm tra action (add/edit)
    if (action === "add") {
        fullnameInput.removeAttribute("readonly"); // Cho phép chỉnh sửa khi thêm mới
    } else if (action === "edit") {
        fullnameInput.setAttribute("readonly", true); // Khóa trường khi chỉnh sửa
    }
});










// Đóng tất cả modal trước khi mở modal mới
function closeAllModals() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.remove("open");
    });
}

// Reset các giá trị mặc định cho modal thêm/chỉnh sửa sản phẩm
function resetProductForm() {
    document.getElementById("product-id").value = "";
    document.getElementById("ten-mon").value = "";
    document.getElementById("mo-ta").value = "";
    document.getElementById("gia-moi").value = "";
    document.getElementById("so-luong").value = "";
    document.getElementById("chon-mon").value = "1"; // Giá trị mặc định
    document.querySelector(".upload-image-preview").src = "image/admin/blank-image.png";
}

// Mở modal thêm sản phẩm
document.getElementById("btn-add-product").addEventListener("click", function () {
    closeAllModals(); // Đóng tất cả modal khác

    const modal = document.querySelector(".modal.add-product");
    modal.classList.add("open");

    // Hiển thị giao diện "Thêm sản phẩm"
    document.querySelectorAll(".add-product-e").forEach(item => item.style.display = "block");
    document.querySelectorAll(".edit-product-e").forEach(item => item.style.display = "none");

    // Hiển thị nút "Thêm sản phẩm"
    document.getElementById("add-product-button").style.display = "block";

    // Ẩn nút "Lưu thay đổi"
    document.getElementById("update-product-button").style.display = "none";

    // Reset form về mặc định
    resetProductForm();

    // Gán giá trị action thành "add"
    document.getElementById("action").value = "add";
});

// Mở modal chỉnh sửa sản phẩm
document.querySelectorAll(".btn-edit-product").forEach(button => {
    button.addEventListener("click", function () {
        closeAllModals(); // Đóng tất cả modal khác

        const modal = document.querySelector(".modal.add-product");
        modal.classList.add("open");

        // Hiển thị giao diện "Chỉnh sửa sản phẩm"
        document.querySelectorAll(".add-product-e").forEach(item => item.style.display = "none");
        document.querySelectorAll(".edit-product-e").forEach(item => item.style.display = "block");

        // Ẩn nút "Thêm sản phẩm"
        document.getElementById("add-product-button").style.display = "none";

        // Hiển thị nút "Lưu thay đổi"
        document.getElementById("update-product-button").style.display = "block";

        // Lấy dữ liệu sản phẩm từ hàng tương ứng trong bảng
        const productRow = button.closest(".list");
        const id = productRow.dataset.id; // Lấy ID sản phẩm từ thuộc tính data-id
        const productName = productRow.querySelector(".list-info h4").textContent.trim(); // Lấy tên sản phẩm
        const shortDescription = productRow.querySelector(".list-note").textContent.trim(); // Mô tả
        const price = productRow.querySelector(".list-current-price").textContent.trim(); // Giá
        const stockQuantity = productRow.querySelector(".list-slkho").textContent.trim(); // Số lượng
        const category = productRow.querySelector(".list-category").dataset.categoryId; // Danh mục
        const imageSrc = productRow.querySelector("img").getAttribute("src"); // Ảnh

        // Điền dữ liệu vào form
        document.getElementById("product-id").value = id; // Gán ID vào input ẩn
        document.getElementById("ten-mon").value = productName; // Điền tên sản phẩm
        document.getElementById("mo-ta").value = shortDescription; // Điền mô tả
        document.getElementById("gia-moi").value = price; // Điền giá bán
        document.getElementById("so-luong").value = stockQuantity; // Điền số lượng
        document.getElementById("chon-mon").value = category; // Điền danh mục
        document.querySelector(".upload-image-preview").src = imageSrc; // Hiển thị ảnh sản phẩm

        // Cập nhật giá trị của action thành "edit"
        document.getElementById("action").value = "edit";

        // Debug thông tin sản phẩm (tùy chọn)
        console.log("Chỉnh sửa sản phẩm:", {
            id,
            productName,
            shortDescription,
            price,
            stockQuantity,
            category,
            imageSrc
        });
    });
});

// Đóng modal khi nhấn nút close
document.querySelectorAll(".modal-close").forEach(closeButton => {
    closeButton.addEventListener("click", function () {
        const modal = closeButton.closest(".modal");
        modal.classList.remove("open");
    });
});

// Thay đổi ảnh xem trước khi chọn tệp
document.getElementById("up-hinh-anh").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            document.querySelector(".upload-image-preview").src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("update-product-button").addEventListener("click", function (e) {
    const form = document.getElementById("product-form");

    // Kiểm tra các giá trị cần thiết trước khi gửi
    const id = document.getElementById("product-id").value;
    const productName = document.getElementById("ten-mon").value;
    const price = document.getElementById("gia-moi").value;
    const stock = document.getElementById("so-luong").value;

    if (!id || !productName || !price || !stock) {
        alert("Vui lòng điền đầy đủ thông tin!");
        e.preventDefault();
        return;
    }

    // Gửi form
    form.submit();
});

$(document).ready(function () {
    // Xử lý form submit
    $('#product-form').on('submit', function (e) {
        e.preventDefault(); // Ngăn trình duyệt tải lại trang

        let formData = new FormData(this);
        let action = $('#action').val();
        let url = action === 'add' ? '/addProduct' : '/editProduct';

        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.success) {
                    alert(response.message);

                    // Cập nhật danh sách sản phẩm
                    if (action === 'add') {
                        $('#show-product').append(`
                            <div class="list">
                                <img src="${response.product.imageURL}" alt="${response.product.productName}">
                                <div class="list-info">
                                    <h4>${response.product.productName}</h4>
                                    <p>${response.product.shortDescription}</p>
                                    <span>${response.product.price}</span>
                                </div>
                            </div>
                        `);
                    } else {
                        // Tìm và cập nhật sản phẩm đã chỉnh sửa
                        $(`#show-product .list[data-id="${response.product.id}"]`).html(`
                            <img src="${response.product.imageURL}" alt="${response.product.productName}">
                            <div class="list-info">
                                <h4>${response.product.productName}</h4>
                                <p>${response.product.shortDescription}</p>
                                <span>${response.product.price}</span>
                            </div>
                        `);
                    }

                    // Đóng modal và reset form
                    $('#product-form')[0].reset();
                    $('.modal').removeClass('open');
                } else {
                    alert('Lỗi: ' + response.message);
                }
            },
            error: function (error) {
                alert('Có lỗi xảy ra. Vui lòng thử lại.');
                console.error(error);
            }
        });
    });

    // Open modal thêm sản phẩm
    $('#btn-add-product').on('click', function () {
        $('#action').val('add');
        $('#product-form')[0].reset();
        $('#add-product-button').show();
        $('#update-product-button').hide();
        $('.modal.add-product').addClass('open');
    });

    // Open modal chỉnh sửa sản phẩm
    $('.btn-edit-product').on('click', function () {
        let product = $(this).closest('.list').data('product'); // Giả định sản phẩm được lưu trong `data-product`

        $('#action').val('edit');
        $('#product-id').val(product.id);
        $('#ten-mon').val(product.productName);
        $('#gia-moi').val(product.price);
        $('#so-luong').val(product.stockQuantity);
        $('#mo-ta').val(product.shortDescription);
        $('#chon-mon').val(product.categoryID);
        $('#up-hinh-anh').val('');
        $('#update-product-button').show();
        $('#add-product-button').hide();
        $('.modal.add-product').addClass('open');
    });
});











function showOrderDetails(orderId) {
    fetch(`/getOrderDetails?orderId=${orderId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
                return;
            }

            // Gán dữ liệu HTML từ response
            document.getElementById("order-details").innerHTML = data.detailsHtml;
            document.getElementById("order-summary").innerHTML = data.summaryHtml;

            // Hiển thị tổng tiền từ response
            console.log("Total Price from API:", data.totalPrice);
            document.getElementById("order-total").textContent = data.totalPrice;

            // Cập nhật trạng thái đơn hàng và thêm sự kiện thay đổi trạng thái
            const statusBtn = document.getElementById("order-status");
            statusBtn.textContent = data.orderStatus === "completed" ? "Đã xử lý" : "Chưa xử lý";
            statusBtn.className = `footer-btn btn-status ${
                data.orderStatus === "completed" ? "completed" : "processing"
            }`;

            // Gắn thông tin orderId và trạng thái hiện tại vào thuộc tính data
            statusBtn.setAttribute("data-order-id", orderId);
            statusBtn.setAttribute("data-status", data.orderStatus);

            // Hiển thị modal chi tiết đơn hàng
            document.querySelector(".modal.detail-order").classList.add("open");
        })
        .catch(error => {
            console.error("Error fetching order details:", error);
            alert("Lỗi khi tải chi tiết đơn hàng!");
        });
}

// Hàm để thay đổi trạng thái đơn hàng
function toggleOrderStatus() {
    const statusBtn = document.getElementById("order-status");
    const orderId = statusBtn.getAttribute("data-order-id");
    const currentStatus = statusBtn.getAttribute("data-status");

    // Chuyển trạng thái
    const newStatus = currentStatus === "completed" ? "pending" : "completed";

    fetch(`/updateOrderStatus`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId, status: newStatus }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Cập nhật giao diện với trạng thái mới
                statusBtn.textContent = newStatus === "completed" ? "Đã xử lý" : "Chưa xử lý";
                statusBtn.className = `footer-btn btn-status ${
                    newStatus === "completed" ? "completed" : "processing"
                }`;
                statusBtn.setAttribute("data-status", newStatus);
                alert("Cập nhật trạng thái thành công!");
            } else {
                alert("Cập nhật trạng thái thất bại!");
            }
        })
        .catch(error => {
            console.error("Error updating order status:", error);
            alert("Lỗi khi cập nhật trạng thái!");
        });
}

// Hàm để đóng modal
function closeModal() {
    document.querySelector(".modal.detail-order").classList.remove("open");
}




function toggleOrderStatus(button, orderId) {
    const currentStatus = button.innerText.trim();
    const newStatus = currentStatus === "Chưa xử lý" ? "Đã xử lý" : "Chưa xử lý";

    fetch('/FoodMart/updateOrderStatus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: orderId, newStatus: newStatus }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                button.innerText = newStatus;
                button.style.backgroundColor = newStatus === "Chưa xử lý" ? "#e74c3c" : "#2ecc71";
            } else {
                alert(data.message || "Không thể cập nhật trạng thái.");
            }
        })
        .catch(error => {
            console.error("Lỗi:", error);
            alert("Đã xảy ra lỗi khi cập nhật trạng thái.");
        });
}





document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function () {
            console.log('Nút xóa được nhấn');
            const id = this.getAttribute('data-id');
            const type = this.getAttribute('data-type');

            if (confirm('Bạn có chắc chắn muốn xóa không?')) {
                deleteItem(type, id);
            }
        });
    });
});



function deleteItem(type, id) {
    fetch(`/delete-${type}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Xóa thành công!');
                document.querySelector(`[data-id="${id}"]`).remove();
            } else {
                alert('Xóa không thành công!');
            }
        })
        .catch(error => console.error('Lỗi:', error));
}
