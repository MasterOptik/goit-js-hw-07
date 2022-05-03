import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
function createImageGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>
    </div>`;
        })
        .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', createImageGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a',
    {
        docClose: false,
        captionsData: "alt",
        captionDelay: 250,
    });