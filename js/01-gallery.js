// aici se face importarea datelor (link-le cu imaginile) din gallery-items.js
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

// aici construim continutul lui ul din html
function createGalleryItem(item) {
  // creez un element li pentru fiecare imagine din galerie
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  // creez un link a in jurul imaginii pentru a permite deschiderea in fereastră modală
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  // creez elementul img pentru imaginea din galerie
  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute("data-source", item.original);

  // adaug imaginea in link si link-ul în elementul li (practic stabilesc, specific ierarhia)
  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

// adaug fiecare element din galerie în lista ul
galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

let instance = null;

// adaug handler la galerie pt a deschide fereastra modala
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const imageUrl = event.target.dataset.source;

    instance = basicLightbox.create(
      `<img src="${imageUrl}" width="800" height="600">`
    );

    instance.show();
  }
});

// evenimentul pt inchiderea ferestrei modale cu tasta "Escape"
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance) {
    instance.close();
  }
});

console.log(galleryItems);
