import '../styles.css';

const myKey = '20349165-a1cad4bdc7b6c381f0f75fb94';

export default {
  searchQuery: '',
  page: 1,

  fetchPics() {
    const url = `https://pixabay.com/api/?key=${myKey}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`;

    return fetch(url)
      .then(res => res.json())
      .catch(console.log)
      .then(({ hits }) => {
        this.page++;
        return hits;
      })
      .catch(error => console.log(error));
  },

  get query() {
    return this.searchQuerry;
  },

  set query(newQuery) {
    this.searchQuerry = newQuery;
  },

  resetPage() {
    this.page = 1;
  },
};
