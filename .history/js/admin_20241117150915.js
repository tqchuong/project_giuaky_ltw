










// Doi sang dinh dang tien VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
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

// Hiển thị danh sách sản phẩm 
function showProductArr(arr) {
    let productHtml = "";
    if(arr.length == 0) {
        productHtml = `<div class="no-result"><div class="no-result-i"><i class="fa-light fa-face-sad-cry"></i></div><div class="no-result-h">Không có sản phẩm để hiển thị</div></div>`;
    } else {
        arr.forEach(product => {
            let btnCtl = product.status == 1 ? 
            `<button class="btn-delete" onclick="deleteProduct(${product.id})"><i class="fa-regular fa-trash"></i></button>` :
            `<button class="btn-delete" onclick="changeStatusProduct(${product.id})"><i class="fa-regular fa-eye"></i></button>`;
            productHtml += `
            <div class="list">
                    <div class="list-left">
                    <img src="${product.img}" alt="">
                    <div class="list-info">
                        <h4>${product.title}</h4>
                        <p class="list-note">${product.desc}</p>
                        <span class="list-category">${product.category}</span>
                    </div>
                </div>
                <div class="list-right">
                    <div class="list-price">
                    <span class="list-current-price">${vnd(product.price)}</span>                   
                    </div>
                    <div class="list-control">
                    <div class="list-tool">
                        <button class="btn-edit" onclick="editProduct(${product.id})"><i class="fa-light fa-pen-to-square"></i></button>
                        ${btnCtl}
                    </div>                       
                </div>
                </div> 
            </div>`;
        });
    }
    document.getElementById("show-product").innerHTML = productHtml;
}

function showProduct() {
    let selectOp = document.getElementById('the-loai').value;
    let valeSearchInput = document.getElementById('form-search-product').value;
    let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

    if(selectOp == "Tất cả") {
        result = products.filter((item) => item.status == 1);
    } else if(selectOp == "Đã xóa") {
        result = products.filter((item) => item.status == 0);
    } else {
        result = products.filter((item) => item.category == selectOp);
    }

    result = valeSearchInput == "" ? result : result.filter(item => {
        return item.title.toString().toUpperCase().includes(valeSearchInput.toString().toUpperCase());
    })

    displayList(result, perPage, currentPage);
    setupPagination(result, perPage, currentPage);
}

function cancelSearchProduct() {
    let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")).filter(item => item.status == 1) : [];
    document.getElementById('the-loai').value = "Tất cả";
    document.getElementById('form-search-product').value = "";
    displayList(products, perPage, currentPage);
    setupPagination(products, perPage, currentPage);
}

window.onload = showProduct();

function createId(arr) {
    let id = arr.length;
    let check = arr.find((item) => item.id == id);
    while (check != null) {
        id++;
        check = arr.find((item) => item.id == id);
    }
    return id;
}


function showToast(type, title, message, duration = 3000) {
    toast({ title, message, type, duration });
}
// Xóa sản phẩm (đánh dấu sản phẩm là đã xóa thay vì xóa hẳn khỏi mảng)
function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    let index = products.findIndex(item => item.id === id);

    if (index !== -1) {
        if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
            products[index].status = 0;
            localStorage.setItem("products", JSON.stringify(products));
            showToast('success', 'Success', 'Sản phẩm đã được đánh dấu là xóa thành công!');
            showProduct();
        }
    } else {
        showToast('error', 'Error', 'Sản phẩm không tồn tại!');
    }
}
function changeStatusProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    let index = products.findIndex(item => item.id == id);

    if (confirm("Bạn có chắc chắn muốn hủy xóa?")) {
        products[index].status = 1;
        localStorage.setItem("products", JSON.stringify(products));
        showToast('success', 'Success', 'Khôi phục sản phẩm thành công!');
        showProduct();
    }
}

var indexCur;
function editProduct(id) {
    let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    let index = products.findIndex(item => {
        return item.id == id;
    })
    indexCur = index;
    document.querySelectorAll(".add-product-e").forEach(item => {
        item.style.display = "none";
    })
    document.querySelectorAll(".edit-product-e").forEach(item => {
        item.style.display = "block";
    })
    document.querySelector(".add-product").classList.add("open");
    //
    document.querySelector(".upload-image-preview").src = products[index].img;
    document.getElementById("ten-mon").value = products[index].title;
    document.getElementById("gia-moi").value = products[index].price;
    document.getElementById("mo-ta").value = products[index].desc;
    document.getElementById("chon-mon").value = products[index].category;
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
    if(tenMon == "" || price == "" || moTa == "") {
        toast({ title: "Chú ý", message: "Vui lòng nhập đầy đủ thông tin món!", type: "warning", duration: 3000, });
    } else {
        if(isNaN(price)) {
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
                status:1
            };
            products.unshift(product);
            localStorage.setItem("products", JSON.stringify(products));
            showProduct();
            document.querySelector(".add-product").classList.remove("open");
            toast({ title: "Success", message: "Thêm sản phẩm thành công!", type: "success", duration: 3000});
            setDefaultValue();
        }
    }
});

document.querySelector(".modal-close.product-form").addEventListener("click",() => {
    setDefaultValue();
})

function setDefaultValue() {
    document.querySelector(".upload-image-preview").src = "./assets/img/blank-image.png";
    document.getElementById("ten-mon").value = "";
    document.getElementById("gia-moi").value = "";
    document.getElementById("mo-ta").value = "";
    document.getElementById("chon-mon").value = "Món chay";
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

// Show order
function showOrder() {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    let orderHtml = orders.length === 0 
        ? `<td colspan="6">Không có dữ liệu</td>`
        : orders.map(order => `
            <tr>
                <td>${order.id}</td>
                <td>${order.khachhang}</td>
                <td>${formatDate(order.ngaygiaohang)}</td>
                <td>${vnd(order.tongtien)}</td>
                <td>${order.trangthai === "Chưa xử lý" 
                    ? `<span class="status-no-complete">Chưa xử lý</span>`
                    : `<span class="status-complete">Đã xử lý</span>`}
                </td>
                <td class="control">
                    <button class="btn-detail" onclick="showOrderDetail('${order.id}')">
                        <i class="fa-regular fa-eye"></i> Chi tiết
                    </button>
                </td>
            </tr>
        `).join('');
    document.getElementById("showOrder").innerHTML = orderHtml;
}


// Hàm hiển thị chi tiết đơn hàng
function showOrderDetail(orderId) {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    let orderDetails = JSON.parse(localStorage.getItem("orderDetails")) || [];
    let products = JSON.parse(localStorage.getItem("products")) || [];
    
    let order = orders.find(o => o.id === orderId);
    if (!order) return alert("Đơn hàng không tồn tại!");

    let orderItems = orderDetails.filter(item => item.madon === orderId);
    let orderDetailHtml = `
        <div class="modal-detail-left">
            <div class="order-item-group">
                ${orderItems.map(item => {
                    let product = products.find(p => p.id === item.id) || {};
                    return `
                        <div class="order-product">
                            <div class="order-product-left">
                                <img src="${product.img}" alt="">
                                <div class="order-product-info">
                                    <h4>${product.title || "Sản phẩm không xác định"}</h4>
                                    <p class="order-product-quantity">SL: ${item.quantity}</p>
                                    <p class="order-product-note"><i class="fa-light fa-pen"></i> ${item.note || ""}</p>
                                </div>
                            </div>
                            <div class="order-product-right">
                                <div class="order-product-price">
                                    <span class="order-product-current-price">${vnd(item.price)}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        <div class="modal-detail-right">
            <ul class="detail-order-group">
                <li class="detail-order-item">
                    <span class="detail-order-item-left"><i class="fa-light fa-calendar-days"></i> Ngày đặt hàng</span>
                    <span class="detail-order-item-right">${formatDate(order.ngaygiaohang)}</span>
                </li>
                <li class="detail-order-item">
                    <span class="detail-order-item-left"><i class="fa-light fa-truck"></i> Hình thức giao</span>
                    <span class="detail-order-item-right">${order.hinhthucgiao}</span>
                </li>
                <li class="detail-order-item">
                    <span class="detail-order-item-left"><i class="fa-thin fa-person"></i> Người nhận</span>
                    <span class="detail-order-item-right">${order.tenguoinhan}</span>
                </li>
                <li class="detail-order-item">
                    <span class="detail-order-item-left"><i class="fa-light fa-phone"></i> Số điện thoại</span>
                    <span class="detail-order-item-right">${order.sdtnhan}</span>
                </li>
                <li class="detail-order-item">
                    <span class="detail-order-item-left"><i class="fa-light fa-clock"></i> Thời gian giao</span>
                    <span class="detail-order-item-right">${order.thoigiangiao}</span>
                </li>
                <li class="detail-order-item">
                    <span class="detail-order-item-left"><i class="fa-light fa-location-dot"></i> Địa chỉ nhận</span>
                    <span class="detail-order-item-right">${order.diachinhan}</span>
                </li>
                <li class="detail-order-item">
                    <span class="detail-order-item-left"><i class="fa-light fa-note-sticky"></i> Ghi chú</span>
                    <span class="detail-order-item-right">${order.ghichu || ""}</span>
                </li>
            </ul>
        </div>`;

    document.querySelector(".modal-detail-order").innerHTML = orderDetailHtml;
    document.querySelector(".modal.detail-order").classList.add("open");
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

// Khởi tạo hiển thị danh sách đơn hàng khi tải trang
window.onload = () => {
    checkLogin();
    showOrder();
};


let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
window.onload = showOrder(orders);

// Get Order Details
function getOrderDetails(madon) {
    let orderDetails = localStorage.getItem("orderDetails") ?
        JSON.parse(localStorage.getItem("orderDetails")) : [];
    let ctDon = [];
    orderDetails.forEach((item) => {
        if (item.madon == madon) {
            ctDon.push(item);
        }
    });
    return ctDon;
}

// Show Order Detail
function detailOrder(id) {
    document.querySelector(".modal.detail-order").classList.add("open");
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let products = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("products")) : [];
    // Lấy hóa đơn 
    let order = orders.find((item) => item.id == id);
    // Lấy chi tiết hóa đơn
    let ctDon = getOrderDetails(id);
    let spHtml = `<div class="modal-detail-left"><div class="order-item-group">`;

    ctDon.forEach((item) => {
        let detaiSP = products.find(product => product.id == item.id);
        spHtml += `<div class="order-product">
            <div class="order-product-left">
                <img src="${detaiSP.img}" alt="">
                <div class="order-product-info">
                    <h4>${detaiSP.title}</h4>
                    <p class="order-product-note"><i class="fa-light fa-pen"></i> ${item.note}</p>
                    <p class="order-product-quantity">SL: ${item.soluong}<p>
                </div>
            </div>
            <div class="order-product-right">
                <div class="order-product-price">
                    <span class="order-product-current-price">${vnd(item.price)}</span>
                </div>                         
            </div>
        </div>`;
    });
    spHtml += `</div></div>`;
    spHtml += `<div class="modal-detail-right">
        <ul class="detail-order-group">
            <li class="detail-order-item">
                <span class="detail-order-item-left"><i class="fa-light fa-calendar-days"></i> Ngày đặt hàng</span>
                <span class="detail-order-item-right">${formatDate(order.thoigiandat)}</span>
            </li>
            <li class="detail-order-item">
                <span class="detail-order-item-left"><i class="fa-light fa-truck"></i> Hình thức giao</span>
                <span class="detail-order-item-right">${order.hinhthucgiao}</span>
            </li>
            <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-thin fa-person"></i> Người nhận</span>
            <span class="detail-order-item-right">${order.tenguoinhan}</span>
            </li>
            <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-light fa-phone"></i> Số điện thoại</span>
            <span class="detail-order-item-right">${order.sdtnhan}</span>
            </li>
            <li class="detail-order-item tb">
                <span class="detail-order-item-left"><i class="fa-light fa-clock"></i> Thời gian giao</span>
                <p class="detail-order-item-b">${(order.thoigiangiao == "" ? "" : (order.thoigiangiao + " - ")) + formatDate(order.ngaygiaohang)}</p>
            </li>
            <li class="detail-order-item tb">
                <span class="detail-order-item-t"><i class="fa-light fa-location-dot"></i> Địa chỉ nhận</span>
                <p class="detail-order-item-b">${order.diachinhan}</p>
            </li>
            <li class="detail-order-item tb">
                <span class="detail-order-item-t"><i class="fa-light fa-note-sticky"></i> Ghi chú</span>
                <p class="detail-order-item-b">${order.ghichu}</p>
            </li>
        </ul>
    </div>`;
    document.querySelector(".modal-detail-order").innerHTML = spHtml;

    let classDetailBtn = order.trangthai == 0 ? "btn-chuaxuly" : "btn-daxuly";
    let textDetailBtn = order.trangthai == 0 ? "Chưa xử lý" : "Đã xử lý";
    document.querySelector(
        ".modal-detail-bottom"
    ).innerHTML = `<div class="modal-detail-bottom-left">
        <div class="price-total">
            <span class="thanhtien">Thành tiền</span>
            <span class="price">${vnd(order.tongtien)}</span>
        </div>
    </div>
    <div class="modal-detail-bottom-right">
        <button class="modal-detail-btn ${classDetailBtn}" onclick="changeStatus('${order.id}',this)">${textDetailBtn}</button>
    </div>`;
}

// Find Order
function findOrder() {
    let tinhTrang = parseInt(document.getElementById("tinh-trang").value);
    let ct = document.getElementById("form-search-order").value;
    let timeStart = document.getElementById("time-start").value;
    let timeEnd = document.getElementById("time-end").value;
    
    if (timeEnd < timeStart && timeEnd != "" && timeStart != "") {
        alert("Lựa chọn thời gian sai !");
        return;
    }
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let result = tinhTrang == 2 ? orders : orders.filter((item) => {
        return item.trangthai == tinhTrang;
    });
    result = ct == "" ? result : result.filter((item) => {
        return (item.khachhang.toLowerCase().includes(ct.toLowerCase()) || item.id.toString().toLowerCase().includes(ct.toLowerCase()));
    });

    if (timeStart != "" && timeEnd == "") {
        result = result.filter((item) => {
            return new Date(item.thoigiandat) >= new Date(timeStart).setHours(0, 0, 0);
        });
    } else if (timeStart == "" && timeEnd != "") {
        result = result.filter((item) => {
            return new Date(item.thoigiandat) <= new Date(timeEnd).setHours(23, 59, 59);
        });
    } else if (timeStart != "" && timeEnd != "") {
        result = result.filter((item) => {
            return (new Date(item.thoigiandat) >= new Date(timeStart).setHours(0, 0, 0) && new Date(item.thoigiandat) <= new Date(timeEnd).setHours(23, 59, 59)
            );
        });
    }
    showOrder(result);
}

function cancelSearchOrder(){
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    document.getElementById("tinh-trang").value = 2;
    document.getElementById("form-search-order").value = "";
    document.getElementById("time-start").value = "";
    document.getElementById("time-end").value = "";
    showOrder(orders);
}

// Create Object Thong ke
function createObj() {
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []; 
    let orderDetails = localStorage.getItem("orderDetails") ? JSON.parse(localStorage.getItem("orderDetails")) : []; 
    let result = [];
    orderDetails.forEach(item => {
        // Lấy thông tin sản phẩm
        let prod = products.find(product => {return product.id == item.id;});
        let obj = new Object();
        obj.id = item.id;
        obj.madon = item.madon;
        obj.price = item.price;
        obj.quantity = item.soluong;
        obj.category = prod.category;
        obj.title = prod.title;
        obj.img = prod.img;
        obj.time = (orders.find(order => order.id == item.madon)).thoigiandat;
        result.push(obj);
    });
    return result;
}

// Filter 
function thongKe(mode) {
    let categoryTk = document.getElementById("the-loai-tk").value;
    let ct = document.getElementById("form-search-tk").value;
    let timeStart = document.getElementById("time-start-tk").value;
    let timeEnd = document.getElementById("time-end-tk").value;
    if (timeEnd < timeStart && timeEnd != "" && timeStart != "") {
        alert("Lựa chọn thời gian sai !");
        return;
    }
    let arrDetail = createObj();
    let result = categoryTk == "Tất cả" ? arrDetail : arrDetail.filter((item) => {
        return item.category == categoryTk;
    });

    result = ct == "" ? result : result.filter((item) => {
        return (item.title.toLowerCase().includes(ct.toLowerCase()));
    });

    if (timeStart != "" && timeEnd == "") {
        result = result.filter((item) => {
            return new Date(item.time) > new Date(timeStart).setHours(0, 0, 0);
        });
    } else if (timeStart == "" && timeEnd != "") {
        result = result.filter((item) => {
            return new Date(item.time) < new Date(timeEnd).setHours(23, 59, 59);
        });
    } else if (timeStart != "" && timeEnd != "") {
        result = result.filter((item) => {
            return (new Date(item.time) > new Date(timeStart).setHours(0, 0, 0) && new Date(item.time) < new Date(timeEnd).setHours(23, 59, 59)
            );
        });
    }    
    showThongKe(result,mode);
}

// Show số lượng sp, số lượng đơn bán, doanh thu
function showOverview(arr){
    document.getElementById("quantity-product").innerText = arr.length;
    document.getElementById("quantity-order").innerText = arr.reduce((sum, cur) => (sum + parseInt(cur.quantity)),0);
    document.getElementById("quantity-sale").innerText = vnd(arr.reduce((sum, cur) => (sum + parseInt(cur.doanhthu)),0));
}

function showThongKe(arr,mode) {
    let orderHtml = "";
    let mergeObj = mergeObjThongKe(arr);
    showOverview(mergeObj);

    switch (mode){
        case 0:
            mergeObj = mergeObjThongKe(createObj());
            showOverview(mergeObj);
            document.getElementById("the-loai-tk").value = "Tất cả";
            document.getElementById("form-search-tk").value = "";
            document.getElementById("time-start-tk").value = "";
            document.getElementById("time-end-tk").value = "";
            break;
        case 1:
            mergeObj.sort((a,b) => parseInt(a.quantity) - parseInt(b.quantity))
            break;
        case 2:
            mergeObj.sort((a,b) => parseInt(b.quantity) - parseInt(a.quantity))
            break;
    }
    for(let i = 0; i < mergeObj.length; i++) {
        orderHtml += `
        <tr>
        <td>${i + 1}</td>
        <td><div class="prod-img-title"><img class="prd-img-tbl" src="${mergeObj[i].img}" alt=""><p>${mergeObj[i].title}</p></div></td>
        <td>${mergeObj[i].quantity}</td>
        <td>${vnd(mergeObj[i].doanhthu)}</td>
        <td><button class="btn-detail product-order-detail" data-id="${mergeObj[i].id}"><i class="fa-regular fa-eye"></i> Chi tiết</button></td>
        </tr>      
        `;
    }
    document.getElementById("showTk").innerHTML = orderHtml;
    document.querySelectorAll(".product-order-detail").forEach(item => {
        let idProduct = item.getAttribute("data-id");
        item.addEventListener("click", () => {           
            detailOrderProduct(arr,idProduct);
        })
    })
}

showThongKe(createObj())

function mergeObjThongKe(arr) {
    let result = [];
    arr.forEach(item => {
        let check = result.find(i => i.id == item.id) // Không tìm thấy gì trả về undefined

        if(check){
            check.quantity = parseInt(check.quantity)  + parseInt(item.quantity);
            check.doanhthu += parseInt(item.price) * parseInt(item.quantity);
        } else {
            const newItem = {...item}
            newItem.doanhthu = newItem.price * newItem.quantity;
            result.push(newItem);
        }
        
    });
    return result;
}

function detailOrderProduct(arr,id) {
    let orderHtml = "";
    arr.forEach(item => {
        if(item.id == id) {
            orderHtml += `<tr>
            <td>${item.madon}</td>
            <td>${item.quantity}</td>
            <td>${vnd(item.price)}</td>
            <td>${formatDate(item.time)}</td>
            </tr>      
            `;
        }
    });
    document.getElementById("show-product-order-detail").innerHTML = orderHtml
    document.querySelector(".modal.detail-order-product").classList.add("open")
}
// User
let addAccount = document.getElementById('signup-button');
let updateAccount = document.getElementById("btn-update-account")

document.querySelector(".modal.signup .modal-close").addEventListener("click",() => {
    signUpFormReset();
})

function openCreateAccount() {
    document.querySelector(".signup").classList.add("open");
    document.querySelectorAll(".edit-account-e").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".add-account-e").forEach(item => {
        item.style.display = "block"
    })
}

function signUpFormReset() {
    document.getElementById('fullname').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('password').value = ""
    document.querySelector('.form-message-name').innerHTML = '';
    document.querySelector('.form-message-phone').innerHTML = '';
    document.querySelector('.form-message-password').innerHTML = '';
}




function deleteAcount(phone) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    let index = accounts.findIndex(item => item.phone == phone);
    if (confirm("Bạn có chắc muốn xóa?")) {
        accounts.splice(index, 1)
    }
    localStorage.setItem("accounts", JSON.stringify(accounts));
    showUser();
}




document.getElementById("logout-acc").addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("currentuser");
    window.location = "/";
})