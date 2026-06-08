# RIOT MERCH — Versión estática (HTML / CSS / JS editables)

Sitio totalmente estático y editable. No usa frameworks, ni build, ni dependencias.
Abrí cualquier `.html` directamente o serví la carpeta con cualquier servidor estático.

## Estructura

```
.
├── index.html          Home
├── productos.html      Catálogo con filtros
├── carrito.html        Carrito (localStorage)
├── historia.html       Tabla con datos en vivo desde Google Sheets
├── comunidad.html      Videos de fans (YouTube embeds)
├── aplicacion.html     Landing de la app
├── favicon.ico
└── assets/
    ├── css/styles.css           Diseño completo. Variables CSS arriba.
    ├── js/
    │   ├── partials.js          Navbar + Footer compartidos (editá acá una vez)
    │   ├── products.js          Catálogo de productos y videos
    │   ├── cart.js              Lógica del carrito + toast
    │   └── main.js              Render utilities (cards, videos)
    └── img/                     Imágenes (cambiá libremente)
```

## Cómo editar lo más común

- **Colores / tipografías:** `assets/css/styles.css` (bloque `:root`).
- **Navbar / Footer:** `assets/js/partials.js`. Se inyectan en todas las páginas.
- **Productos:** editá `window.PRODUCTS` en `assets/js/products.js`.
- **Videos de fans:** `window.FAN_VIDEOS` en el mismo archivo.
- **Textos de cualquier sección:** dentro del `.html` correspondiente.

## Probarlo localmente

Cualquiera de estos sirve:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Luego abrí http://localhost:8080
