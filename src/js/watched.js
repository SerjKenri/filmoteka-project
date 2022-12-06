//
// console.log('watched');
const btnWatchedRefs = document.querySelector('button[data-action="watched"]');
export const emptyRefs = document.querySelector('[data-action="empty"]');
export const galleryLibrary = document.querySelector('[data-action="list-library"]');
// console.log(btnWatchedRefs);
// console.log(emptyRefs);
// console.log(galleryLibrary);

onBtnWatchedClick();

btnWatchedRefs.addEventListener('click', onBtnWatchedClick);

function onBtnWatchedClick() {
  try {
    let watchedFilms = localStorage.getItem(KEY);
    if (watchedFilms) {
      watchedFilms = JSON.parse(watchedFilms);

      renderWatchedFilmCards(watchedFilms);

      emptyRefs.classList.add('is-hidden');
      console.log(watchedFilms);
    }
  } catch (error) {console.log(error)}
  return;
}
 
export function renderWatchedFilmCards(data) {
  let markup = '';
  data.forEach(({ id, poster_path, genre_ids, title, release_date }) => {
    let genresStr = getGenres(genre_ids);
    let year = release_date.substring(0, 4);
    if (genresStr && year) genresStr += ' | ';
    if (!title) title = 'no information';

    let smallImg = !!poster_path
      ? IMG_PATH + SMALL_SIZE + poster_path
      : NO_IMAGE;

    markup += `
      <li class="film-card">
         	<a href="#" class="film-card__link">
            <img
              class="film-card__film-img"
              src="${smallImg}"
              alt="${title}"
              id="${id}"
            />
            <h3 class="film-card__film-name">${title}</h3>
            <p class="film-card__genre">${genresStr}${year}</p>
          </a>
        </li>
		`;
  });
  galleryLibrary.setHTML(markup);
}
