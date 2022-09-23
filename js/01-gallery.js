import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('div.gallery');
const markup = [];

galleryItems.forEach(({ preview, original, description }) => {
    
    markup.push(`

    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
      </a>
    </div>
  `)    
})

galleryRef.insertAdjacentHTML('beforeend', markup.join(' '));

galleryRef.addEventListener('click', event => {
  event.preventDefault();
  console.log('target', event.target);
  
  console.log(event.target.getAttribute("data-source"));


  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute("data-source")}">
`);
  instance.show();

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", event);
    }
  
  })

});
