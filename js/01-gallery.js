import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
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
`, {onClose: (instance) => {galleryRef.removeEventListener("keydown", clickEsc)}
});
  instance.show();  

  galleryRef.addEventListener("keydown", clickEsc);
  
  function clickEsc(event) {if (event.key === "Escape") {
    instance.close();
      
    
    }}

  // function closeListeners() {
  //   galleryRef.removeEventListener("click", event);
  //   modalRef.removeEventListener("click", event);
  //   document.removeEventListener("keydown");
  //   console.log("All event listeners was removed");
  // }

});