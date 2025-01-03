import { renderPictures } from './render-pictures.js';
import { openBigPhotoPopup } from './big-picture-popup.js';
import './upload-form.js';

renderPictures();

document.addEventListener('click', (e) => {
  const currentPicture = e.target.closest('.picture');

  if (currentPicture) {
    e.preventDefault();
    openBigPhotoPopup(currentPicture.dataset.photoId);
  }
});
