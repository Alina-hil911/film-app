import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import randomFilmReducer from "./SingleFilm/randomFilm.reducer";
import startFilmsReducer from "./FilmCollection/StartFilms.reducer";
import ThemeReducer from "./Theme/Theme.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};

const rootReducer = combineReducers({
  randomFilmReducer: randomFilmReducer,
  startFilms: startFilmsReducer,
  theme: ThemeReducer,
});

export default persistReducer(persistConfig, rootReducer);
