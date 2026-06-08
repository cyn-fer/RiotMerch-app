// Render utilities compartidas entre páginas

function productCardHTML(p) {
  return `
    <article class="product-card" data-id="${p.id}">
      ${p.tag ? `<span class="stamp tag-stamp">${p.tag}</span>` : ""}
      ${p.isNew ? `<span class="tag-new">NEW</span>` : ""}
      <div class="img-wrap">
        <img src="${p.image}" alt="${p.name} — ${p.band}" loading="lazy" />
      </div>
      <div class="body">
        <p class="band">${p.band}</p>
        <h3>${p.name}</h3>
        <div class="row">
          <span class="price">${money(p.price)}</span>
          <button class="btn btn-blood add-btn">Comprar</button>
        </div>
      </div>
    </article>`;
}

function bindProductCardButtons(scope) {
  (scope || document).querySelectorAll(".product-card .add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.closest(".product-card").dataset.id;
      const p = window.PRODUCTS.find((x) => x.id === id);
      if (!p) return;
      addToCart(p);
      toast("Agregado al carrito: " + p.name);
    });
  });
}

function fanVideoHTML(v) {
  const thumb = `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`;
  const embed = `https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0&playsinline=1`;
  return `
    <article class="video-card" data-embed="${embed}">
      <div class="thumb">
        <img src="${thumb}" alt="${v.fan} en concierto de ${v.band}" loading="lazy" />
        <div class="play"><span>▶</span></div>
        <span class="stamp" style="position:absolute;top:.75rem;left:.75rem;">YOUTUBE</span>
      </div>
      <div class="meta">
        <p class="band">${v.band}</p>
        <p class="fan">${v.fan}</p>
        <p class="loc">${v.location}</p>
        <p class="prod">Luciendo: <span>${v.product}</span></p>
      </div>
    </article>`;
}

function bindFanVideos(scope) {
  (scope || document).querySelectorAll(".video-card .thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const card = thumb.closest(".video-card");
      const embed = card.dataset.embed;
      thumb.innerHTML = `<iframe src="${embed}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>`;
    });
  });
}

// Mark active nav link
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });
});
