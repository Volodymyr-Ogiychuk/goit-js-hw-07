import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('ul.gallery');
const markup = [];

galleryItems.forEach(({ preview, original, description }) => {
    
    markup.push(`

    <div class="gallery__item">
        <a class="gallery__item" href="${original}" data-caption="Описание">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>  
    </div>
  `)    
})

galleryRef.insertAdjacentHTML('beforeend', markup.join(' '));

galleryRef.addEventListener('click', event => {
  event.preventDefault();

    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

});