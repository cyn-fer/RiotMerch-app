// Carrito persistente con localStorage
const CART_KEY = "riot-cart";

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadge();
}
function cartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}
function cartTotal() {
  return getCart().reduce((s, i) => s + i.qty * i.price, 0);
}
function addToCart(product) {
  const items = getCart();
  const found = items.find((i) => i.id === product.id);
  if (found) found.qty += 1;
  else items.push({ ...product, qty: 1 });
  saveCart(items);
}
function removeFromCart(id) {
  saveCart(getCart().filter((i) => i.id !== id));
}
function setQty(id, qty) {
  const items = getCart().map((i) => i.id === id ? { ...i, qty: Math.max(1, qty) } : i);
  saveCart(items);
}
function clearCart() { saveCart([]); }

function updateCartBadge() {
  const el = document.querySelector(".cart-badge .count");
  if (!el) return;
  const n = cartCount();
  el.textContent = n;
  el.classList.toggle("visible", n > 0);
}

function toast(msg) {
  let c = document.querySelector(".toast-container");
  if (!c) {
    c = document.createElement("div");
    c.className = "toast-container";
    document.body.appendChild(c);
  }
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

function money(n) { return "$" + n.toLocaleString("es-AR"); }

document.addEventListener("DOMContentLoaded", updateCartBadge);
