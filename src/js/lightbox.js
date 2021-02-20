import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

const lightBox = () => {
  refs.galleryContainer().addEventListener('click', () => {
    if (refs.pic().nodeName !== 'IMG') {
      return;
    }
    const pic = event.target;
    const { source } = pic.dataset;
    console.log('c');
    const { alt } = pic;
    const instance = basicLightbox.create(
      `<img src = "${source}" alt ="${alt}">`,
    );
    instance.show();
  });
};

export default lightBox;
