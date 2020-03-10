import { takeEvery, put } from "redux-saga/effects"; //listens to every action of specific type
import axios from "axios";
import { API_KEY } from "../../utils/defaults";

export function* fetchRandomFilmsStart() {
  yield takeEvery("RANDOM_FILMS_FETCHING_START", fetchRandomFilmsAsync);
}

export function* fetchRecentFilmsStart() {
  yield takeEvery("MOST_RECENT_FILMS_FETCHING_START", fetchRecentFilmsAsync);
}

export function* fetchRecentFilmsAsync(action) {
  try {
    const recentFilms = yield axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${action.payload}&sort_by=vote_average.desc`,
      )
      .then(res => res.data.results);

    yield put({
      type: "RANDOM_FILMS_FETCHING_SUCCESS",
      payload: recentFilms,
    });
  } catch (e) {
    console.log("ERROR", e.message);
  }
}

export function* fetchRandomFilmsAsync() {
  try {
    const popularMovies = yield axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
      )
      .then(res => res.data.results);
    yield put({
      type: "RANDOM_FILMS_FETCHING_SUCCESS",
      payload: popularMovies,
    });
  } catch (e) {
    console.log("ERROR", e.message);
  }
}

export function* fetchFilmByNameStart() {
  yield takeEvery("FETCH_FILM_BY_NAME_START", fetchFilmByNameAsync);
}

function* fetchFilmByNameAsync(action) {
  try {
    const result = yield axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${action.payload}`,
      )
      .then(res => res.data.results);
    if (result.length === 0) {
      yield put({
        type: "FETCH_FILM_BY_NAME_ERROR",
      });
    } else {
      yield put({
        type: "RANDOM_FILMS_FETCHING_SUCCESS",
        payload: result,
      });
    }
  } catch (e) {
    yield put({
      type: "FETCH_FILM_BY_NAME_ERROR",
    });
  }
}
