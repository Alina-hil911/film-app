import { all, call } from "redux-saga/effects";
import {
  fetchRandomFilmStart,
  fetchFilmByIdStart,
} from "./SingleFilm/randomFilm.saga";
import {
  fetchRandomFilmsStart,
  fetchRecentFilmsStart,
  fetchFilmByNameStart,
} from "./FilmCollection/StartFilms.saga";
export default function* rootSaga() {
  yield all([
    call(fetchRandomFilmStart),
    call(fetchRandomFilmsStart),
    call(fetchRecentFilmsStart),
    call(fetchFilmByIdStart),
    call(fetchFilmByNameStart),
  ]);
}
