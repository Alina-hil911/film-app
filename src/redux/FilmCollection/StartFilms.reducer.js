const INITIAL_STATE = {
  startMoviesArray: null,
  isFetching: false,
  success: false,
  errorMsg: "",
  year: "",
  search: false,
  searchError: "",
};
const StartFilmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MOST_RECENT_FILMS_FETCHING_START":
      return {
        ...state,
        isFetching: true,
        year: action.payload,
        search: false,
      };
    case "FETCH_FILM_BY_NAME_START":
      return {
        ...state,
        isFetching: true,
        search: true,
        year: "",
        searchError: false,
      };
    case "FETCH_FILM_BY_NAME_ERROR": {
      return {
        ...state,
        isFetching: false,
        search: false,
        searchError: true,
      };
    }

    case "RANDOM_FILMS_FETCHING_START":
      return {
        ...state,
        isFetching: true,
      };
    case "RANDOM_FILMS_FETCHING_SUCCESS":
      return {
        ...state,
        success: true,
        startMoviesArray: action.payload,
        isFetching: false,
      };
    case "RANDOM_FILMS_FETCHING_ERROR":
      return {
        ...state,
        errorMsg: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default StartFilmsReducer;
