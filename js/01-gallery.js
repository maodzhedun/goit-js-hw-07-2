import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createMarkUp(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </li>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));

galleryEl.addEventListener("click", onClickGallery);

function onClickGallery(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  showImage(evt.target.dataset.source);
}

function showImage(target) {
  instance = basicLightbox.create(
    `<img src="${target}" width='800' height='600'>`
  );
  instance.show();
  console.log(instance);

  document.addEventListener("keydown", (event) => {
    if (
      evt.code === "Escape" ||
      evt.target.classList.contains("gallery__image")
    ) {
      instance.close();
    }
  });
}
