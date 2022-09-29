import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('ul.gallery');
const markup = [];

galleryItems.forEach(({ preview, original, description }) => {
    
    markup.push(`

    <li class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>  
    </li>
  `)    
})

galleryRef.insertAdjacentHTML('beforeend', markup.join(' '));
const itemsRef = document.querySelectorAll('li');
itemsRef.forEach(element => {
  element.style.listStyleType = 'none';
})
  

    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        
    });