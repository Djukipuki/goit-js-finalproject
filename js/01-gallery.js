import {galleryItems} from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const imagesHTML = galleryItems
    .map(image => `
        <li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img 
                    class="gallery__image" 
                    src="${image.preview}"
                    alt="${image.description}"
                    data-source="${image.original}"
                >
            </a>
        </li>
    `)
    .join('');

gallery.insertAdjacentHTML('beforeend', imagesHTML);

let modal;

const showOriginalImage = (event) => {
    event.preventDefault();

    modal = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
        onShow: () => document.addEventListener('keydown', handleEscape),
        onClose: () => document.removeEventListener('keydown', handleEscape),
    });

    modal.show();
}

const closeModal = () => {
    if (modal) {
        modal.close();
        modal = null;
    }
}

const handleEscape = (event) => {
    if (event.code === 'Escape') {
        closeModal();
    }
}

gallery.addEventListener('click', showOriginalImage);
