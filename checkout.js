function updateQuantity() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(document.getElementById("checkout-subTotal").textContent);
  document.getElementById("checkout-subTotal").textContent = `€ ${
    cart.quantity * 95
  }`;
  document.getElementById("checkout-total").textContent = `€ ${
    cart.quantity * 95
  }`;
}
updateQuantity();
