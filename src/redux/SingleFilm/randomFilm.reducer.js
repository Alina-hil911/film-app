const INITIAL_STATE = {
  randomFilm: null,
  isFetching: false,
  errorMsg: "",
};

const randomFilmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_RANDOM_FILM_START":
      return {
        ...state,
        isFetching: true,
      };
    case "SEARCH_RANDOM_FILM_SUCCESS":
      return {
        ...state,
        isFetching: false,
        errorMsg: "",

        randomFilm: action.payload,
      };
    case "SEARCH_RANDOM_FILM_FAILURE":
      return {
        ...state,
        isFetching: false,

        errorMsg: action.payload,
      };
    case "CLOSE_RANDOM_FILM_CARD":
      return {
        ...state,
        randomFilm: null,
      };
    default:
      return state;
  }
};
export default randomFilmReducer;
