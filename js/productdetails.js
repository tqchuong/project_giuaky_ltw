
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


