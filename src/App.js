import React, { lazy, Suspense, useEffect } from "react";
import GlobalStyle from "./Global";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { lightTheme, darkTheme } from "./Themes/Themes";
import Spinner from "./Spinner/Spinner";
import withSpinner from "./HOC/withSpinner";
import ErrorBoundary from "./HOC/ErrorBoundary";
// import theme from "./Theme";

//import of components
const Homepage = lazy(() => import("./Homepage/Homepage"));
const Header = lazy(() => import("./Header/Header"));
const Footer = lazy(() => import("./Footer/Footer"));
const ChangeTheme = lazy(() => import("./ChangeThemeButton/ChangeThemeButton"));
const FilmCard = lazy(() => import("./SingleFilmPage/FilmCard"));
const HomepageWithSpinner = withSpinner(Homepage);

const App = ({ currentTheme, randomFilm }) => {
  const theme = currentTheme === "light" ? lightTheme : darkTheme;
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
};
const mapStateToProps = state => {
  const { randomFilmReducer } = state;
  const { theme } = state;
  return {
    currentTheme: theme.theme,
    randomFilm: randomFilmReducer.randomFilm,
  };
};

export default connect(mapStateToProps)(App);
