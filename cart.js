document.getElementById("shop-plus").addEventListener("click", function () {
  increaseQuantity();
});

document.getElementById("shop-minus").addEventListener("click", function () {
  decreaseQuantity();
});

function increaseQuantity() {
  var quantityElement = document.getElementById("shop-quantity");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  const data = {
    quantity: currentQuantity + 1,
  };
  localStorage.setItem("cart", JSON.stringify(data));
  updateQuantity();
}

function decreaseQuantity() {
  var quantityElement = document.getElementById("shop-quantity");
  var currentQuantity = parseInt(quantityElement.textContent);

  // Make sure the quantity doesn't go below 0
  if (currentQuantity > 1) {
    quantityElement.textContent = currentQuantity - 1;
    const data = {
      quantity: currentQuantity - 1,
    };
    localStorage.setItem("cart", JSON.stringify(data));
    updateQuantity();
  }
}
document
  .getElementById("shop-plus-cart")
  .addEventListener("click", function () {
    increaseQuantityCart();
  });

document
  .getElementById("shop-minus-cart")
  .addEventListener("click", function () {
    decreaseQuantityCart();
  });

function increaseQuantityCart() {
  var quantityElement = document.getElementById("shop-quantity-cart");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  const data = {
    quantity: currentQuantity + 1,
  };
  localStorage.setItem("cart", JSON.stringify(data));
  updateQuantity();
}

function decreaseQuantityCart() {
  var quantityElement = document.getElementById("shop-quantity-cart");
  var currentQuantity = parseInt(quantityElement.textContent);

  // Make sure the quantity doesn't go below 0
  if (currentQuantity > 1) {
    quantityElement.textContent = currentQuantity - 1;
    const data = {
      quantity: currentQuantity - 1,
    };
    localStorage.setItem("cart", JSON.stringify(data));
    updateQuantity();
  }
}

document
  .getElementById("add-to-cart-button")
  .addEventListener("click", function () {
    addToCartFunction();
  });

function updateQuantity() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  document.getElementById("shop-quantity").textContent = cart.quantity;
  document.getElementById("shop-quantity-cart").textContent = cart.quantity;
  document.getElementById("total-text-cart").textContent = `€ ${
    cart.quantity * 95
  }`;
  document.getElementById("checkout-subTotal").textContent = `€ ${
    cart.quantity * 95
  }`;
  document.getElementById("checkout-total").textContent = `€ ${
    cart.quantity * 95
  }`;
}
