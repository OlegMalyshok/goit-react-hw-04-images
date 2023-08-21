const API_KEY = '38962513-932681aef270cb73133f6bed7';

function fetchImages(searchInput, page) {
  return fetch(
    `https://pixabay.com/api/?q=${searchInput}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`There is no results with such request ${searchInput}`)
    );
  });
}

const api = {
  fetchImages,
};

export default api;
