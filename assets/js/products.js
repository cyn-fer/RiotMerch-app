// Catálogo de productos — editá libremente
window.PRODUCTS = [
  { id: "p1",  name: "Skull Drip Tee",         band: "Iron Maiden",        category: "Remeras",    price: 12500, image: "assets/img/product-tshirt-skull.jpg",       isNew: true,  tag: "BESTSELLER" },
  { id: "p7",  name: "Heavy Metal Tour Tee",   band: "Judas Priest",       category: "Remeras",    price: 13500, image: "assets/img/product-tshirt-tour.jpg",        tag: "TOUR" },
  { id: "p8",  name: "Rock Bend Classic",      band: "The Rolling Stones", category: "Remeras",    price: 11900, image: "assets/img/product-tshirt-white.jpg" },
  { id: "p9",  name: "Long Sleeve Skulls",     band: "Misfits",            category: "Remeras",    price: 16900, image: "assets/img/product-longsleeve.jpg",         isNew: true },
  { id: "p2",  name: "Lightning Hoodie",       band: "AC/DC",              category: "Hoodies",    price: 24900, image: "assets/img/product-hoodie.jpg",             isNew: true },
  { id: "p10", name: "Punk Zip Hoodie",        band: "Green Day",          category: "Hoodies",    price: 27900, image: "assets/img/product-hoodie-zip.jpg",         tag: "DROP 24" },
  { id: "p3",  name: "Vinilo Edición Limitada",band: "Pink Floyd",         category: "Vinilos",    price: 18900, image: "assets/img/product-vinyl.jpg",              tag: "LIMITED" },
  { id: "p11", name: "Red Splatter LP",        band: "Black Sabbath",      category: "Vinilos",    price: 21900, image: "assets/img/product-vinyl-red.jpg",          isNew: true, tag: "LIMITED" },
  { id: "p4",  name: "Tour Cap Black",         band: "Metallica",          category: "Gorras",     price: 8900,  image: "assets/img/product-cap.jpg" },
  { id: "p12", name: "Metaller Beanie",        band: "Slayer",             category: "Gorras",     price: 7500,  image: "assets/img/product-beanie.jpg" },
  { id: "p5",  name: "Patched Denim Jacket",   band: "Ramones",            category: "Camperas",   price: 39900, image: "assets/img/product-jacket.jpg",             isNew: true, tag: "DROP 24" },
  { id: "p13", name: "Studded Leather Jacket", band: "Motörhead",          category: "Camperas",   price: 89900, image: "assets/img/product-leather-jacket.jpg",     tag: "PREMIUM" },
  { id: "p6",  name: "Tour Poster 70x50",      band: "Nirvana",            category: "Posters",    price: 4900,  image: "assets/img/product-poster.jpg" },
  { id: "p14", name: "Vintage Concert Poster", band: "Led Zeppelin",       category: "Posters",    price: 5900,  image: "assets/img/product-poster-vintage.jpg",     tag: "VINTAGE" },
  { id: "p15", name: "Enamel Pin Set",         band: "Multi Bands",        category: "Accesorios", price: 3900,  image: "assets/img/product-pins.jpg",               isNew: true },
  { id: "p16", name: "Band Tote Bag",          band: "Queen",              category: "Accesorios", price: 6900,  image: "assets/img/product-tote.jpg" },
  { id: "p17", name: "Skull Mug 350ml",        band: "Megadeth",           category: "Accesorios", price: 4500,  image: "assets/img/product-mug.jpg" },
  { id: "p18", name: "Skull Bandana",          band: "Guns N' Roses",      category: "Accesorios", price: 3500,  image: "assets/img/product-bandana.jpg",            isNew: true }
];

window.CATEGORIES = ["Todos", "Remeras", "Hoodies", "Vinilos", "Gorras", "Camperas", "Posters", "Accesorios"];

window.FAN_VIDEOS = [
  { id: "v1", youtubeId: "JR-Qwd-Sv-8", fan: "Lucía M.",  location: "Estadio River, Buenos Aires", band: "Guns N' Roses", product: "Remera Appetite for Destruction" },
  { id: "v2", youtubeId: "hPVBx763Wio", fan: "Javier R.", location: "Hipódromo de Palermo",        band: "Metallica",     product: "Hoodie Master of Puppets" },
  { id: "v3", youtubeId: "BxlZoyfHoN0", fan: "Mara P.",   location: "Estadio Vélez Sarsfield",      band: "Iron Maiden",   product: "Remera The Trooper" },
  { id: "v4", youtubeId: "9AtKwu07z_M", fan: "Diego F.",  location: "Estadio Único, La Plata",      band: "AC/DC",         product: "Campera de jean con parches" },
  { id: "v5", youtubeId: "hK7Ktn_Oy5Q", fan: "Sofía T.",  location: "Movistar Arena, CABA",         band: "Queen",         product: "Remera Bohemian Rhapsody" },
  { id: "v6", youtubeId: "6sVcEWCs9U0", fan: "Tomás A.",  location: "Niceto Club, Palermo",         band: "Nirvana",       product: "Hoodie Smiley" }
];
