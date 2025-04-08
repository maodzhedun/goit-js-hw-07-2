import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
console.dir(galleryEl)

galleryEl.addEventListener('click', onClick);

function onClick(ev){
    console.log(ev.target)
}


function createMarkUp(arr){
return arr.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
}

galleryEl.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));


console.log(galleryItems);

