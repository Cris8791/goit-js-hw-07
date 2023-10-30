// importare imagini din fișierul gallery-items.js;
// sunt stocate intr - un array numit galleryItems.
import { galleryItems } from "./gallery-items.js";

// Change code below this line

// selectare element din HTML cu clasa CSS "gallery"
// anume, ul in care va fi creata structura
const galleryList = document.querySelector(".gallery");

// creare functie cu un obiect item (fiecare item este o imagine din galleryItems);
// in functie- sunt create elemente pentru o listă (<li>), un link (<a>), o imagine (<img>)
// si sunt setate atribute și clase CSS pentru ele.
// la final, functia returneaza elementul creat - o imagine în galerie.
function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  // stabilire ierarhie
  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

// bucla forEach parcurge toate obiectele din galleryItems si apelează fct createGalleryItem pt fiecare obiect.
// rezultatele sunt adăugate la lista galleryList, creând astfel elementele de galerie
galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

// De ce a fost nevoie de 2 functii:
// fct createGalleryItem - creaza structura pt un singur element de galerie.
// bucla forEach - aplica funcția createGalleryItem pentru fiecare obiect in galleryItems –
// astfel creand toate elementele de galerie si adaugandu-le la lista galleryList.

// afisez in consolă conținutul array-ului galleryItems -pt a verifica dacă datele au fost importate corect
console.log(galleryItems);

// initializare librarie SimpleLightbox - care crează o instanta a SimpleLightbox si
// îi spune să asculte evenimentele pe link-urile (<a>) din elementul cu clasa CSS "gallery".
const gallery = new SimpleLightbox(".gallery a", {
  // setare opțiuni pentru librarie - afisarea textului alternativ (alt) al imaginilor si delay-ul pt afișarea textului.
  captionsData: "alt",
  captionDelay: 250,
});
