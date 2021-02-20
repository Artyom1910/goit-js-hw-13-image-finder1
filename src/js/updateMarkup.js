import gallery_list from '../templates/gallery_list.hbs';
import refs from './refs';

function renderMarkup(pics) {
  const markup = gallery_list(pics);
  refs.galleryContainer().insertAdjacentHTML('beforeend', markup);
}

export default renderMarkup;
