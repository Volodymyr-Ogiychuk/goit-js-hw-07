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
  if (event.target.nodeName === 'DIV') {
    return
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute("data-source")}">
`);
  instance.show();

  const modalRef = document.querySelector('div.basicLightbox');
  
  modalRef.addEventListener('click', event => {
    
    closeListeners();
    
  })


  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      instance.close();
      closeListeners()
    
    }
  
  })

  function closeListeners() {
    galleryRef.removeEventListener("click", event);
    modalRef.removeEventListener("click", event);
    document.removeEventListener("keydown", event);
    console.log("All event listeners was removed");
  }

});