 var $addQuantity = $(".btn-quantity.plus"),
  $minusQuantity = $(".btn-quantity.minus"),
  $removeItem = $(".btn-remove");

$addQuantity.on("click", function (e) {
  e.preventDefault();
  var $item = $(this).parents(".item"),
    $quantityField = $item.find(".quantity_field"),
    currentQuantity = $quantityField.val(),
    nextQuantity = parseFloat(currentQuantity) + 1;

  $item.find(".current_quantity").html(nextQuantity);
  $quantityField.val(nextQuantity);

  calculateTotal();
});

$minusQuantity.on("click", function (e) {
  e.preventDefault();
  var $item = $(this).parents(".item"),
    $quantityField = $item.find(".quantity_field"),
    currentQuantity = $quantityField.val();
  var prevQuantity = currentQuantity <= 1 ? 0 : parseFloat(currentQuantity) - 1;

  $item.find(".current_quantity").html(prevQuantity);
  $quantityField.val(prevQuantity);

  calculateTotal();
});

$removeItem.on("click", function () {
  var $item = $(this).parents(".item");
  $item.remove();

  calculateTotal();
});

var calculateTotal = function () {
  var newSubTotal = 0;
  $(".quantity_field").each(function () {
    var quantity = $(this).val(),
      price = $(this).data("price");

    newSubTotal += parseFloat(quantity * price);
  });

  $(".sub-total .amount").html( newSubTotal.toFixed(3)+ "VNĐ");

  var withTax = newSubTotal * 1.2;

  var newTotal = withTax + 0;

  $(".total .amount").html("Total" + " "  + newTotal.toFixed(3) + "VNĐ");
};

calculateTotal();





function closeModal() {
  modalContainer.forEach(item => {
      item.classList.remove('open');
  });
  console.log(modalContainer)
  body.style.overflow = "auto";
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

//Xem chi tiet san pham
function detailProduct(index) {
  let modal = document.querySelector('.modal.product-detail');
  let products = JSON.parse(localStorage.getItem('products'));
  event.preventDefault();
  let infoProduct = products.find(sp => {
      return sp.id === index;
  })
  let modalHtml = `<div class="modal-header">
  <img class="product-image" src="${infoProduct.img}" alt="">
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
      <p class="product-description">${infoProduct.des}</p>
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
          <button class="button-dat" id="add-cart" title="Thêm vào giỏ hàng" onclick="animationCart()"><i class="fa-light fa-basket-shopping"></i></button>
      
      </div>
  </div>`;
  document.querySelector('#product-detail-content').innerHTML = modalHtml;
  modal.classList.add('open');
  body.style.overflow = "hidden";
  //Cap nhat gia tien khi tang so luong san pham
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
          toast({ title: 'Warning', message: 'Chưa đăng nhập tài khoản !', type: 'warning', duration: 3000 });
      }

  })
  // Mua ngay san pham
  dathangngay();
}

function animationCart() {
  document.querySelector(".count-product-cart").style.animation = "slidein ease 1s"
  setTimeout(()=>{
      document.querySelector(".count-product-cart").style.animation = "none"
  },1000)
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

//Show gio hang
function showCart() {
  if (localStorage.getItem('currentuser') != null) {
      let currentuser = JSON.parse(localStorage.getItem('currentuser'));
      if (currentuser.cart.length != 0) {
          document.querySelector('.gio-hang-trong').style.display = 'none';
          document.querySelector('button.thanh-toan').classList.remove('disabled');
          let productcarthtml = '';
          currentuser.cart.forEach(item => {
              let product = getProduct(item);
              productcarthtml += `<li class="cart-item" data-id="${product.id}">
              <div class="cart-item-info">
                  <p class="cart-item-title">
                      ${product.title}
                  </p>
                  <span class="cart-item-price price" data-price="${product.price}">
                  ${vnd(parseInt(product.price))}
                  </span>
              </div>
              <p class="product-note"><i class="fa-light fa-pencil"></i><span>${product.note}</span></p>
              <div class="cart-item-control">
                  <button class="cart-item-delete" onclick="deleteCartItem(${product.id},this)">Xóa</button>
                  <div class="buttons_added">
                      <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                      <input class="input-qty" max="100" min="1" name="" type="number" value="${product.soluong}">
                      <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
                  </div>
              </div>
          </li>`
          });
          document.querySelector('.cart-list').innerHTML = productcarthtml;
          updateCartTotal();
          saveAmountCart();
      } else {
          document.querySelector('.gio-hang-trong').style.display = 'flex'
      }
  }
  let modalCart = document.querySelector('.modal-cart');
  let containerCart = document.querySelector('.cart-container');
  let themmon = document.querySelector('.them-mon');
  modalCart.onclick = function () {
      closeCart();
  }
  themmon.onclick = function () {
      closeCart();
  }
  containerCart.addEventListener('click', (e) => {
      e.stopPropagation();
  })
}

// Delete cart item
function deleteCartItem(id, el) {
  let cartParent = el.parentNode.parentNode;
  cartParent.remove();
  let currentUser = JSON.parse(localStorage.getItem('currentuser'));
  let vitri = currentUser.cart.findIndex(item => item.id = id)
  currentUser.cart.splice(vitri, 1);

  // Nếu trống thì hiển thị giỏ hàng trống
  if (currentUser.cart.length == 0) {
      document.querySelector('.gio-hang-trong').style.display = 'flex';
      document.querySelector('button.thanh-toan').classList.add('disabled');
  }
  localStorage.setItem('currentuser', JSON.stringify(currentUser));
  updateCartTotal();
}

//Update cart total
function updateCartTotal() {
  document.querySelector('.text-price').innerText = vnd(getCartTotal());
}

// Lay tong tien don hang
function getCartTotal() {
  let currentUser = JSON.parse(localStorage.getItem('currentuser'));
  let tongtien = 0;
  if (currentUser != null) {
      currentUser.cart.forEach(item => {
          let product = getProduct(item);
          tongtien += (parseInt(product.soluong) * parseInt(product.price));
      });
  }
  return tongtien;
}

// Get Product 
function getProduct(item) {
  let products = JSON.parse(localStorage.getItem('products'));
  let infoProductCart = products.find(sp => item.id == sp.id)
  let product = {
      ...infoProductCart,
      ...item
  }
  return product;
}

window.onload = updateAmount();
window.onload = updateCartTotal();

// Lay so luong hang

function getAmountCart() {
  let currentuser = JSON.parse(localStorage.getItem('currentuser'))
  let amount = 0;
  currentuser.cart.forEach(element => {
      amount += parseInt(element.soluong);
  });
  return amount;
}

//Update Amount Cart 
function updateAmount() {
  if (localStorage.getItem('currentuser') != null) {
      let amount = getAmountCart();
      document.querySelector('.count-product-cart').innerText = amount;
  }
}

// Save Cart Info
function saveAmountCart() {
  let cartAmountbtn = document.querySelectorAll(".cart-item-control .is-form");
  let listProduct = document.querySelectorAll('.cart-item');
  let currentUser = JSON.parse(localStorage.getItem('currentuser'));
  cartAmountbtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
          let id = listProduct[parseInt(index / 2)].getAttribute("data-id");
          let productId = currentUser.cart.find(item => {
              return item.id == id;
          });
          productId.soluong = parseInt(listProduct[parseInt(index / 2)].querySelector(".input-qty").value);
          localStorage.setItem('currentuser', JSON.stringify(currentUser));
          updateCartTotal();
      })
  });
}

// Open & Close Cart
function openCart() {
  showCart();
  document.querySelector('.modal-cart').classList.add('open');
  body.style.overflow = "hidden";
}

function closeCart() {
  document.querySelector('.modal-cart').classList.remove('open');
  body.style.overflow = "auto";
  updateAmount();
}


