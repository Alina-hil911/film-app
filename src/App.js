import React, { lazy, Suspense, useEffect } from "react";
import GlobalStyle from "./Global";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { lightTheme, darkTheme } from "./ThemeContext/ThemeContext";
import Spinner from "./Spinner/Spinner";
import withSpinner from "./HOC/withSpinner";
import ErrorBoundary from "./HOC/ErrorBoundary";
// import theme from "./Theme";

// кнопка поменять тему - должна быть связана с контекстом - по клике на кнопку меняется текущий контекст
// контекст передается в другие компоненты

//import of components
const Homepage = lazy(() => import("./Homepage/Homepage"));
const Header = lazy(() => import("./Header/Header"));
const Footer = lazy(() => import("./Footer/Footer"));
const ChangeTheme = lazy(() => import("./ChangeThemeButton/ChangeThemeButton"));
const FilmCard = lazy(() => import("./SingleFilmPage/FilmCard"));
const HomepageWithSpinner = withSpinner(Homepage);
function App({ randomFilm, fetchRandomFilmsStart, currentTheme }) {
  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  useEffect(() => {}, []);

  //if a user fetches a random film a portal with modal card is created
  return (
    <ErrorBoundary>
      <div className="App">
        <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>
          <Suspense fallback={<Spinner></Spinner>}>
            <Header></Header>
            <ChangeTheme></ChangeTheme>
            <HomepageWithSpinner></HomepageWithSpinner>
            {randomFilm && <FilmCard></FilmCard>}
            <Footer></Footer>
          </Suspense>
        </ThemeProvider>
      </div>
    </ErrorBoundary>
  );
}
const mapStateToProps = state => {
  const { randomFilmReducer } = state;
  const { theme } = state;
  return {
    currentTheme: theme.theme,
    randomFilm: randomFilmReducer.randomFilm,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchRandomFilmsStart: () =>
    dispatch({ type: "RANDOM_FILMS_FETCHING_START" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
