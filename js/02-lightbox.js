import {galleryItems} from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const imagesHTML = galleryItems
    .map(image => `
        <li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img class="gallery__image" src="${image.preview}" alt="${image.description}">
            </a>
        </li>
    `)
    .join('');

gallery.insertAdjacentHTML('beforeend', imagesHTML);

const modal = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
});

const showOriginalImage = (event) => {
    event.preventDefault();

    modal.open(event.target.src);
};

gallery.addEventListener('click', showOriginalImage);
