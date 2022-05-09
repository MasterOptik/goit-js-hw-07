import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
function createImageGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
        })
        .join('');
}
gallery.insertAdjacentHTML('beforeend', createImageGallery(galleryItems));

gallery.addEventListener('click', onOpenLargeImg);
function onOpenLargeImg(e) {
    const isImgEl = e.target.tagName === 'IMG';
    if (!isImgEl) {
        return;
    }
    console.log(e.target.tagName)
    e.preventDefault();
    const onKeyboardCloseImg = e => {
        if (e.code === 'Escape') {
            instance.close();
        }
    }
    const largeImgLink = e.target.dataset.source;
    const instance = basicLightbox.create(`
  <img src="${largeImgLink}" alt="${e.target.alt}">`,
        {
            onShow: () => {
                window.addEventListener('keydown', onKeyboardCloseImg)
            },
            onClose: () => {
                window.removeEventListener('keydown', onKeyboardCloseImg)
            },
        });

    instance.show();

}