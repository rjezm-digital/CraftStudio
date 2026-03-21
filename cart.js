let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// SAVE
function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// ADD TO CART (WITH QTY)
function addToCart(product){
  const existing = cart.find(p => p.name === product.name);

  if(existing){
    existing.qty += 1;
  } else {
    product.qty = 1;
    cart.push(product);
  }

  saveCart();
  alert("Added to cart!");
}

// INCREASE
function increase(i){
  cart[i].qty++;
  saveCart();
  location.reload();
}

// DECREASE
function decrease(i){
  if(cart[i].qty > 1){
    cart[i].qty--;
  } else {
    cart.splice(i,1);
  }
  saveCart();
  location.reload();
}

// REMOVE
function removeItem(i){
  cart.splice(i,1);
  saveCart();
  location.reload();
}

// COUNT
function updateCartCount(){
  const el = document.getElementById("cartCount");
  if(el){
    const total = cart.reduce((t,p)=>t+p.qty,0);
    el.innerText = total;
  }
}

updateCartCount();

window.addToCart = addToCart;
window.increase = increase;
window.decrease = decrease;
window.removeItem = removeItem;
window.getCart = ()=>cart;