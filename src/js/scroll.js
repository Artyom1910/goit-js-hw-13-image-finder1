import fetchPics from '../index';

const infinityScroll = () => {
  window.addEventListener('scroll', function () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight > scrollHeight - 3) {
      setTimeout(fetchPics(), 1000);
    }
  });
};

export default infinityScroll;
