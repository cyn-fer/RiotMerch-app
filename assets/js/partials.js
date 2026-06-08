// Navbar y Footer compartidos — editá acá y se actualizan en TODAS las páginas
(function () {
  const NAV_HTML = `
    <header class="navbar">
      <div class="container navbar-inner">
        <a href="index.html" aria-label="Inicio">
          <img class="navbar-logo" src="assets/img/logo.png" alt="Riot Merch" />
        </a>
        <nav class="nav-links">
          <a href="index.html"><span>⌂</span><span class="label">Inicio</span></a>
          <a href="productos.html"><span>♪</span><span class="label">Productos</span></a>
          <a href="historia.html"><span>♬</span><span class="label">Historia</span></a>
          <a href="comunidad.html"><span>♛</span><span class="label">Comunidad</span></a>
          <a href="aplicacion.html"><span>▢</span><span class="label">App</span></a>
          <a href="carrito.html" class="cart-badge">
            <span>🛒</span><span class="label">Carrito</span>
            <span class="count">0</span>
          </a>
        </nav>
      </div>
    </header>`;

  const FOOTER_HTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <img src="assets/img/logo.png" alt="Riot Merch" style="height:64px;margin-bottom:1rem;" />
          <p class="text-muted" style="font-size:.875rem;margin-bottom:1.25rem;">
            Indumentaria oficial y merch de las bandas más legendarias del rock mundial. Envíos a todo el país.
          </p>
          <p class="kicker" style="margin-bottom:.5rem;font-size:.85rem;">DESCARGÁ LA APP</p>
          <div class="app-badges">
            <a href="https://play.google.com/store" target="_blank" rel="noopener" aria-label="Google Play">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener" aria-label="App Store">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
            </a>
          </div>
        </div>
        <div>
          <h4>Tienda</h4>
          <ul><li>Remeras</li><li>Hoodies</li><li>Vinilos</li><li>Accesorios</li></ul>
        </div>
        <div>
          <h4>Ayuda</h4>
          <ul><li>Envíos & devoluciones</li><li>Guía de talles</li><li>Términos</li><li>Privacidad</li></ul>
        </div>
        <div>
          <h4>Seguinos</h4>
          <div class="socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        © <span id="year"></span> RIOT MERCH — Todos los derechos reservados. Hecho con distorsión y feedback.
      </div>
    </footer>
    <a class="wa-fab" href="https://wa.me/5491100000000?text=Hola%20RIOT%20MERCH%2C%20quiero%20info!" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>`;

  function mount() {
    const navSlot = document.getElementById("nav-slot");
    const footSlot = document.getElementById("footer-slot");
    if (navSlot) navSlot.outerHTML = NAV_HTML;
    if (footSlot) footSlot.outerHTML = FOOTER_HTML;
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    if (typeof updateCartBadge === "function") updateCartBadge();
    // Mark active link
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((a) => {
      if (a.getAttribute("href") === path) a.classList.add("active");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else { mount(); }
})();
