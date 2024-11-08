
  function changeImage(imageSrc) {
  document.getElementById('mainImage').src = imageSrc;
}
  function changeQuantity(amount) {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);

    if (!isNaN(currentValue)) {
      var newValue = currentValue + amount;

      // Giới hạn số lượng giữa min và max
      if (newValue >= parseInt(quantityInput.min) && newValue <= parseInt(quantityInput.max)) {
        quantityInput.value = newValue;
      }
    }
  }
  // Lấy id từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');


  const products = JSON.parse(localStorage.getItem('products'));
  const productDetail = products.find(product => product.id === parseInt(productId));


  if (productDetail) {
    document.getElementById('product-title').innerText = productDetail.title;
    document.getElementById('product-image').src = productDetail.img;
    document.getElementById('product-price').innerText = vnd(productDetail.price);

  }

