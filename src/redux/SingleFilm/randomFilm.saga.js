import { takeEvery, put } from "redux-saga/effects"; //listens to every action of specific type
import { randomInteger } from "../../utils/functionality";
import { API_KEY } from "../../utils/defaults";
import axios from "axios";

//1) fetch id of the latest film
//2)make a request to the db, id is random from 63 to the latest id
function* fetchRandomFilmAsync() {
  try {
    const result = yield axios
      .get(
        `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`,
      )
      .then(result => result.data.id) //id of the latest film
      .then(id =>
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${randomInteger(
              63,
              id,
            )}?api_key=${API_KEY}&language=en-US`, //makes a request to fetch a random film, min is 63 because it is the first id in the db
          )
          .then(result => result.data),
      );
    if (result) {
      yield put({ type: "SEARCH_RANDOM_FILM_SUCCESS", payload: result });
    } else {
      yield put({
        type: "SEARCH_RANDOM_FILM_FAILURE",
        payload: "No film with such id",
      });
    }
  } catch (e) {
    yield put({ type: "SEARCH_RANDOM_FILM_FAILURE", payload: e.message });
  }
}
export function* fetchRandomFilmStart() {
  yield takeEvery("SEARCH_RANDOM_FILM_START", fetchRandomFilmAsync);
}

export function* fetchFilmByIdStart() {
  yield takeEvery("SEARCH_FILM_BY_ID_START", fetchFilmByIdAsync);
}

function* fetchFilmByIdAsync(action) {
  try {
    const result = yield axios
      .get(
        `https://api.themoviedb.org/3/movie/${action.payload}?api_key=${API_KEY}&language=en-US`,
      )
      .then(res => res.data);
    yield put({ type: "SEARCH_RANDOM_FILM_SUCCESS", payload: result });
    yield console.log(result);
  } catch (e) {
    alert(e.message);
  }
}
