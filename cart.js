let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product){
  cart.push(product);
  saveCart();
  alert("Added to cart!");
}

function getCart(){
  return cart;
}

function clearCart(){
  cart = [];
  saveCart();
}

window.addToCart = addToCart;
window.getCart = getCart;
window.clearCart = clearCart;