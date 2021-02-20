import './styles.css';
import apiService from './js/apiService';
import renderMarkup from './js/updateMarkup';
import refs from './js/refs';
import infinityScroll from './js/scroll';
import lightBox from './js/lightbox';

refs.searchForm().addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;

  apiService.searchQuery = form.elements.query.value;

  refs.galleryContainer().innerHTML = '';
  apiService.resetPage();
  fetchPics();
  savedSearchText();
  lightBox();
  form.reset();
});

infinityScroll();

function fetchPics() {
  refs.spin().classList.remove('is-hidden');
  apiService
    .fetchPics()
    .then(pics => {
      renderMarkup(pics);
    })
    .finally(() => refs.spin().classList.add('is-hidden'));
}

const savedSearchText = () => {
  refs.savedSearch().classList.remove('is-hidden');
  const form = event.currentTarget;
  refs.message().textContent = form.elements.query.value;
};

export default fetchPics;
