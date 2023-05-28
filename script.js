let currentImage = 0;
const images = document.querySelectorAll('.gallery img');
const body = document.body;

function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
  body.style.backgroundImage = `url(${images[index].src})`;
}

function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
}

function nextImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  showImage(currentImage);
}

showImage(currentImage);

// Resto del código para la animación del título, subtítulo, etc.
// ...


// Animación del título
const titleText = "Montañas";
const titleElement = document.querySelector("#title");
let titleIndex = 0;

function typeTitle() {
  if (titleIndex < titleText.length) {
    titleElement.textContent += titleText[titleIndex];
    titleIndex++;
    setTimeout(typeTitle, 200);
  } else {
    typeIntroTitle();
  }
}

// Animación del subtítulo de introducción
const introTitleText = "Introducción";
const introTitleElement = document.querySelector("#intro-title");
let introTitleIndex = 0;

function typeIntroTitle() {
  if (introTitleIndex < introTitleText.length) {
    introTitleElement.textContent += introTitleText[introTitleIndex];
    introTitleIndex++;
    setTimeout(typeIntroTitle, 200);
  } else {
    typeIntroText();
  }
}

// Animación del texto de introducción
const introText =
  "Las montañas son elevaciones del terreno que se caracterizan por su altura y su belleza natural.";
const introTextElement = document.querySelector("#intro-text");
let introTextIndex = 0;

function typeIntroText() {
  if (introTextIndex < introText.length) {
    introTextElement.textContent += introText[introTextIndex];
    introTextIndex++;
    setTimeout(typeIntroText, 50);
  } else {
    typeGalleryTitle();
  }
}

// Animación del título de la galería
const galleryTitleText = "Galería de imágenes";
const galleryTitleElement = document.querySelector("#gallery-title");
let galleryTitleIndex = 0;

function typeGalleryTitle() {
  if (galleryTitleIndex < galleryTitleText.length) {
    galleryTitleElement.textContent += galleryTitleText[galleryTitleIndex];
    galleryTitleIndex++;
    setTimeout(typeGalleryTitle, 200);
  }
}

typeTitle();
