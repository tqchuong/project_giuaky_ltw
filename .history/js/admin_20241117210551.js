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











// Phân trang 
let perPage = 12;
let currentPage = 1;
let totalPage = 0;
let perProducts = [];

function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;
    let end = (currentPage - 1) * perPage + perPage;
    let productShow = productAll.slice(start, end);
    showProductArr(productShow);
}

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
    node.innerHTML = `<a href="#">${page}</a>`;
    if (currentPage == page) node.classList.add('active');
    node.addEventListener('click', function () {
        currentPage = page;
        displayList(productAll, perPage, currentPage);
        let t = document.querySelectorAll('.page-nav-item.active');
        for (let i = 0; i < t.length; i++) {
            t[i].classList.remove('active');
        }
        node.classList.add('active');
    })
    return node;
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

let btnAddProductIn = document.getElementById("add-product-button");
btnAddProductIn.addEventListener("click", (e) => {
    e.preventDefault();
    let imgProduct = getPathImage(document.querySelector(".upload-image-preview").src)
    let tenMon = document.getElementById("ten-mon").value;
    let price = document.getElementById("gia-moi").value;
    let moTa = document.getElementById("mo-ta").value;
    let categoryText = document.getElementById("chon-mon").value;
    if (tenMon == "" || price == "" || moTa == "") {
        toast({ title: "Chú ý", message: "Vui lòng nhập đầy đủ thông tin món!", type: "warning", duration: 3000, });
    } else {
        if (isNaN(price)) {
            toast({ title: "Chú ý", message: "Giá phải ở dạng số!", type: "warning", duration: 3000, });
        } else {
            let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
            let product = {
                id: createId(products),
                title: tenMon,
                img: imgProduct,
                category: categoryText,
                price: price,
                desc: moTa,
                status: 1
            };
            products.unshift(product);
            localStorage.setItem("products", JSON.stringify(products));
            showProduct();
            document.querySelector(".add-product").classList.remove("open");
            toast({ title: "Success", message: "Thêm sản phẩm thành công!", type: "success", duration: 3000 });
            setDefaultValue();
        }
    }
});

document.querySelector(".modal-close.product-form").addEventListener("click", () => {
    setDefaultValue();
})

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

// Đổi trạng thái đơn hàng
function changeStatus(id, el) {
    let orders = JSON.parse(localStorage.getItem("order"));
    let order = orders.find((item) => {
        return item.id == id;
    });
    order.trangthai = 1;
    el.classList.remove("btn-chuaxuly");
    el.classList.add("btn-daxuly");
    el.innerHTML = "Đã xử lý";
    localStorage.setItem("order", JSON.stringify(orders));
    findOrder(orders);
}

// Format Date
function formatDate(date) {
    let fm = new Date(date);
    let yyyy = fm.getFullYear();
    let mm = fm.getMonth() + 1;
    let dd = fm.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return dd + "/" + mm + "/" + yyyy;
}





// Đổi trạng thái đơn hàng
function changeOrderStatus(orderId, el) {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    let order = orders.find(o => o.id === orderId);
    if (order) {
        order.trangthai = "Đã xử lý";
        localStorage.setItem("order", JSON.stringify(orders));
        el.classList.remove("btn-chuaxuly");
        el.classList.add("btn-daxuly");
        el.innerHTML = "Đã xử lý";
        showOrder();
    }
}
// Định dạng ngày tháng
function formatDate(date) {
    let fm = new Date(date);
    let yyyy = fm.getFullYear();
    let mm = fm.getMonth() + 1;
    let dd = fm.getDate();
    return `${dd < 10 ? '0' + dd : dd}/${mm < 10 ? '0' + mm : mm}/${yyyy}`;
}





