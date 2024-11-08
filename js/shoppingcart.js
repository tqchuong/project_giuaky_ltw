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