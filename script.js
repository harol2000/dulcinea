// Cambia aquí los datos principales de la invitación sin tocar el HTML.
const invitationConfig = {
  // Cambia este valor cuando reemplaces imágenes con el mismo nombre para forzar actualización.
  assetVersion: "2026-06-02-1",
  business: {
    openingLabel: "Grand Opening",
    name: "Dulcinea",
    tagline: "Heladería & Cafetería",
  },
  heroImages: {
    // Reemplaza estas rutas si cambias las imágenes base del hero.
    desktop: "./public/images/plantilla_escritorio.png",
    mobile: "./public/images/plantilla_celular.png",
  },
  event: {
    date: "Viernes 5 de mayo",
    time: "5:30 p. m.",
    // Cambia esta fecha/hora para actualizar la cuenta regresiva del sitio.
    countdownTarget: "2028-05-05T17:30:00",
    address: "Jr. Huascar S/N, Ref. Frente al Mercado Modelo Pichari",
    googleMapsUrl: "https://maps.app.goo.gl/pydPWiMrCYSjDKtp6",
    // Pega aquí tu iframe definitivo de Google Maps cuando lo tengas listo.
    mapEmbedHtml:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d834.9047337878643!2d-73.8268573845473!3d-12.519193000277571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2spe!4v1780418027008!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  contact: {
    phone: "984797618",
    whatsapp: "984797618",
    // Agrega aquí los enlaces reales cuando quieras activar las redes.
    facebookLabel: "Dulcinea",
    facebookUrl: "https://www.instagram.com/dulcinea_sf_e.i.r.l/",
    instagramLabel: "@dulcinea_sf_e.i.r.l",
    instagramUrl: "https://www.instagram.com/dulcinea_sf_e.i.r.l/",
  },
  content: {
    heroMessage:
      "Ven a celebrar con nosotros una dulce inauguración llena de sabor, alegría y momentos especiales.",
    aboutText:
      "Te invitamos a ser parte de la apertura oficial de Dulcinea, un espacio creado para disfrutar frappes, jugos, cafés, postres y momentos especiales en un ambiente dulce y acogedor.",
    whatsappMessage:
      "Hola, quiero confirmar mi asistencia a la inauguración de Dulcinea.",
  },
  features: [
    "Frappes",
    "Jugos",
    "Cafés",
    "Postres",
    "Promociones de inauguración",
    "Momentos para compartir",
  ],
  galleryImages: [
    {
      src: "./public/images/frappe_fresa_realista.png.png",
      alt: "Placeholder de frappes cremosos",
      caption: "Frappes cremosos y refrescantes",
    },
    {
      src: "./public/images/cafes_dulcinea_ilustrado.png.png",
      alt: "Placeholder de estación de café",
      caption: "Cafés para comenzar el día",
    },
    {
      src: "./public/images/frappe_rosa_ilustrado.png.png",
      alt: "Placeholder de postres artesanales",
      caption: "Postres y antojos especiales",
    },
    {
      src: "./public/images/cafe_mano_vintage.png.png",
      alt: "Placeholder de momentos compartidos",
      caption: "Un espacio bonito para compartir",
    },
    {
      src: "./public/images/frappe_chocolate_lineal.png.png",
      alt: "Ilustracion de frappe de chocolate",
      caption: "Frappes para celebrar con estilo",
    },
    {
      src: "./public/images/frappe_vainilla_lineal.png.png",
      alt: "Ilustracion de frappe de vainilla",
      caption: "Detalles dulces para una galeria mas completa",
    },
    {
      src: "./public/images/cafe_taza_lineal.png.png",
      alt: "Ilustracion de taza de cafe",
      caption: "Cafes y antojos para una pausa especial",
    },
    {
      src: "./public/images/cafe_para_llevar_lineal.png.png",
      alt: "Ilustracion de cafe para llevar",
      caption: "Sabores para disfrutar dentro y fuera de Dulcinea",
    },
  ],
};

const iconByFeature = {
  Frappes: "🍧",
  Jugos: "🍹",
  "Cafés": "☕",
  Postres: "🍰",
  "Promociones de inauguración": "🎀",
  "Momentos para compartir": "✨",
};

// Edita este arreglo para cambiar facilmente la galeria visual del sitio.
const galleryItems = [
  {
    title: "Frappes cremosos",
    description: "Bebidas dulces y refrescantes para celebrar la inauguracion.",
    image: "./public/images/frappe_fresa_realista.png.png",
    alt: "Frappe de fresa de Dulcinea",
    featured: true,
  },
  {
    title: "Cafes especiales",
    description: "Una seleccion de cafes con el sello dulce de Dulcinea.",
    image: "./public/images/cafes_dulcinea_ilustrado.png.png",
    alt: "Seleccion de cafes de Dulcinea",
  },
  {
    title: "Frappe de arandano",
    description: "Color, sabor y un estilo encantador para compartir.",
    image: "./public/images/frappe_rosa_ilustrado.png.png",
    alt: "Frappe de arandano ilustrado",
  },
  {
    title: "Cafe para llevar",
    description: "Una propuesta calida para disfrutar en cualquier momento.",
    image: "./public/images/cafe_mano_vintage.png.png",
    alt: "Cafe en mano con estilo vintage",
  },
  {
    title: "Frappe chocolate",
    description: "Opciones frias con un look moderno y delicioso.",
    image: "./public/images/frappe_chocolate_lineal.png.png",
    alt: "Ilustracion de frappe de chocolate",
  },
  {
    title: "Frappe vainilla",
    description: "Detalles dulces para una galeria mas completa y elegante.",
    image: "./public/images/frappe_vainilla_lineal.png.png",
    alt: "Ilustracion de frappe de vainilla",
  },
  {
    title: "Taza de cafe",
    description: "Cafes y antojos para una pausa especial en Dulcinea.",
    image: "./public/images/cafe_taza_lineal.png.png",
    alt: "Ilustracion de taza de cafe",
  },
  {
    title: "Cafe para llevar",
    description: "Sabores que tambien te acompanan fuera del local.",
    image: "./public/images/cafe_para_llevar_lineal.png.png",
    alt: "Ilustracion de cafe para llevar",
  },
];

// Edita este arreglo para actualizar facilmente la seccion Especialidades.
const specialties = [
  {
    title: "Sodas Italianas",
    description:
      "Bebidas coloridas, dulces y burbujeantes, perfectas para refrescarte y celebrar la inauguracion.",
    images: ["bebida_mora_hierbabuena.png", "bebida_fresa_crema_naranja.png"],
  },
  {
    title: "Popping Boba",
    description:
      "Bebida refrescante con perlas explosivas de sabor, ideal para disfrutar algo diferente y divertido.",
    images: ["popping_boba.png"],
  },
];

const heroSection = document.querySelector(".hero-inauguracion");
heroSection.style.setProperty("--hero-desktop", `url("${invitationConfig.heroImages.desktop}")`);
heroSection.style.setProperty("--hero-mobile", `url("${invitationConfig.heroImages.mobile}")`);

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
};

const setLink = (selector, href) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.href = href;
  });
};

const withAssetVersion = (path) => `${path}?v=${encodeURIComponent(invitationConfig.assetVersion)}`;
const specialtyImageBases = ["./public/images/", "./public/images/productos/"];
const resolveSpecialtyCandidates = (filename) =>
  specialtyImageBases.map((basePath) => withAssetVersion(`${basePath}${filename}`));
const setImageSourceWithFallback = (imageNode, candidates) => {
  let currentIndex = 0;

  const applyCandidate = () => {
    imageNode.src = candidates[currentIndex];
  };

  imageNode.addEventListener("error", () => {
    currentIndex += 1;
    if (currentIndex < candidates.length) {
      applyCandidate();
    }
  });

  applyCandidate();
};

setText("[data-opening-label]", invitationConfig.business.openingLabel);
setText("[data-business-name]", invitationConfig.business.name);
setText("[data-business-tagline]", invitationConfig.business.tagline);
setText(
  "[data-event-datetime]",
  `${invitationConfig.event.date} · ${invitationConfig.event.time}`,
);
setText("[data-hero-message]", invitationConfig.content.heroMessage);
setText("[data-event-date]", invitationConfig.event.date);
setText("[data-event-time]", invitationConfig.event.time);
setText("[data-event-address]", invitationConfig.event.address);
setText("[data-about-text]", invitationConfig.content.aboutText);
setText("[data-contact-phone]", invitationConfig.contact.phone);
setText("[data-contact-facebook]", invitationConfig.contact.facebookLabel);
setText("[data-contact-instagram]", invitationConfig.contact.instagramLabel);

const whatsappUrl = `https://wa.me/${invitationConfig.contact.whatsapp}?text=${encodeURIComponent(
  invitationConfig.content.whatsappMessage,
)}`;

setLink("[data-whatsapp-link]", whatsappUrl);
setLink("[data-phone-link]", `tel:${invitationConfig.contact.phone}`);
setLink("[data-maps-link]", invitationConfig.event.googleMapsUrl);
setLink("[data-instagram-link]", invitationConfig.contact.instagramUrl);
setLink("[data-facebook-link]", invitationConfig.contact.facebookUrl);

const countdownNodes = {
  days: document.querySelector("[data-countdown-days]"),
  hours: document.querySelector("[data-countdown-hours]"),
  minutes: document.querySelector("[data-countdown-minutes]"),
  seconds: document.querySelector("[data-countdown-seconds]"),
  note: document.querySelector("[data-countdown-note]"),
};

const countdownTarget = new Date(invitationConfig.event.countdownTarget);

const formatCountdownValue = (value) => String(Math.max(0, value)).padStart(2, "0");

const updateCountdown = () => {
  const now = new Date();
  const difference = countdownTarget.getTime() - now.getTime();

  if (Number.isNaN(countdownTarget.getTime())) {
    if (countdownNodes.note) {
      countdownNodes.note.textContent = "Configura una fecha válida para activar la cuenta regresiva.";
    }
    return;
  }

  if (difference <= 0) {
    countdownNodes.days.textContent = "00";
    countdownNodes.hours.textContent = "00";
    countdownNodes.minutes.textContent = "00";
    countdownNodes.seconds.textContent = "00";
    if (countdownNodes.note) {
      countdownNodes.note.textContent = "¡La gran inauguración ya comenzó!";
    }
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownNodes.days.textContent = formatCountdownValue(days);
  countdownNodes.hours.textContent = formatCountdownValue(hours);
  countdownNodes.minutes.textContent = formatCountdownValue(minutes);
  countdownNodes.seconds.textContent = formatCountdownValue(seconds);
};

updateCountdown();
setInterval(updateCountdown, 1000);

const featureGrid = document.querySelector("[data-features-grid]");
invitationConfig.features.forEach((feature) => {
  const card = document.createElement("article");
  card.className = "feature-card";
  card.innerHTML = `
    <span aria-hidden="true">${iconByFeature[feature] ?? "✦"}</span>
    <h3>${feature}</h3>
    <p>Ideal para disfrutar la inauguración con el toque dulce y acogedor de Dulcinea.</p>
  `;
  featureGrid.appendChild(card);
});

const specialtiesGrid = document.querySelector("[data-specialties-grid]");
specialties.forEach((item) => {
  const card = document.createElement("article");
  card.className = "specialty-card";
  const imageGroup = document.createElement("div");
  imageGroup.className = `specialty-images specialty-images--${item.images.length > 1 ? "double" : "single"}`;

  item.images.forEach((filename, index) => {
    const imageWrap = document.createElement("div");
    imageWrap.className = "specialty-image-wrap";

    const image = document.createElement("img");
    image.alt = `${item.title} ${index + 1}`;
    image.loading = "lazy";
    setImageSourceWithFallback(image, resolveSpecialtyCandidates(filename));

    imageWrap.appendChild(image);
    imageGroup.appendChild(imageWrap);
  });

  const copy = document.createElement("div");
  copy.className = "specialty-copy";
  copy.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;

  card.appendChild(imageGroup);
  card.appendChild(copy);
  specialtiesGrid.appendChild(card);
});

const galleryGrid = document.querySelector("[data-gallery-grid]");
galleryItems.forEach((item) => {
  const card = document.createElement("figure");
  card.className = `gallery-card${item.featured ? " featured" : ""}`;
  card.innerHTML = `
    <div class="gallery-image-wrap">
      <img src="${item.image}" alt="${item.alt}" loading="lazy" />
    </div>
    <figcaption class="gallery-copy">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </figcaption>
  `;
  galleryGrid.appendChild(card);
});

const mapFrame = document.querySelector("[data-map-frame]");
if (invitationConfig.event.mapEmbedHtml.trim()) {
  mapFrame.innerHTML = invitationConfig.event.mapEmbedHtml;
} else {
  mapFrame.innerHTML = `
    <div class="map-placeholder">
      <div>
        <strong>Espacio listo para tu mapa</strong>
        <p>
          Inserta tu iframe dentro de <code>mapEmbedHtml</code> en <code>script.js</code> para
          mostrar aquí el mapa definitivo.
        </p>
      </div>
    </div>
  `;
}

const socialLinks = document.querySelector("[data-social-links]");
if (socialLinks) {
  [
    {
      label: invitationConfig.contact.facebookLabel,
      url: invitationConfig.contact.facebookUrl,
    },
    {
      label: invitationConfig.contact.instagramLabel,
      url: invitationConfig.contact.instagramUrl,
    },
  ].forEach((item) => {
    const node = document.createElement(item.url ? "a" : "span");
    node.className = "footer-link";
    node.textContent = item.label;
    if (item.url) {
      node.href = item.url;
      node.target = "_blank";
      node.rel = "noreferrer";
    }
    socialLinks.appendChild(node);
  });
}
