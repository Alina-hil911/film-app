import React, { memo, lazy, useState, useEffect, useRef } from "react";
import { Wrapper } from "./styled";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import Zoom from "react-reveal/Zoom";
import { FILMS_PER_PAGE } from "../utils/defaults";
const FilmCard = lazy(() => import("../FilmCard/FilmCard"));
const Pagination = lazy(() => import("../Pagination/Paginantion"));

const Homepage = memo(
  ({
    defaultFilms,
    currentYear,
    fetchFilmById,
    search,
    searchError,

    fetchRandomFilmsStart,
  }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesQuantity, setPagesQuantity] = useState(0);
    const [indexOfLastFilm, setIndexOfLastFilm] = useState();
    const [indexOfFirstFilm, setIndexOfFirstFilm] = useState();
    const [filmsToRender, setFilmsToRender] = useState();
    useEffect(() => {
      fetchRandomFilmsStart();
    }, []);

    useEffect(() => {
      if (defaultFilms) {
        setPagesQuantity(Math.ceil(defaultFilms.length / FILMS_PER_PAGE));
        setIndexOfLastFilm(currentPage * FILMS_PER_PAGE);
        setIndexOfFirstFilm(indexOfLastFilm - FILMS_PER_PAGE);
        setFilmsToRender(defaultFilms.slice(indexOfFirstFilm, indexOfLastFilm));
      }
    }, [defaultFilms, indexOfLastFilm, indexOfFirstFilm, currentPage]);
    //when current page changes - scroll to the top
    const scrollToRef = ref => window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollRef = useRef(null);
    const executeScroll = () => scrollToRef(scrollRef);
    //produces a header according to actions of a user
    const makeHeader = () => {
      if (searchError) {
        return (
          <h2>Ooops! Something went wrong. Try looking for something else.</h2>
        );
      }
      if (search) {
        return <h2>That's what you were looking for!</h2>;
      }
      if (currentYear) {
        return <h2>{currentYear}</h2>;
      } else return <h2>The best recent films</h2>;
    };

    return (
      <Zoom>
        <main>
          <Wrapper ref={scrollRef}>
            {makeHeader()}
            {filmsToRender &&
              filmsToRender.map(item => {
                return (
                  <FilmCard
                    fetchFilmById={fetchFilmById}
                    id={item.id}
                    title={item.title}
                    posterPath={item.poster_path}
                    backdropPath={item.backdrop_path}
                    key={uuid()}
                  ></FilmCard>
                );
              })}

            <Pagination
              handleClick={index => {
                setCurrentPage(index);
                setTimeout(() => executeScroll(), 200);
              }}
              quantity={pagesQuantity}
              currentPage={currentPage}
            ></Pagination>
          </Wrapper>
        </main>
      </Zoom>
    );
  },
);

const mapStateToProps = state => {
  const { startFilms } = state;
  return {
    defaultFilms: startFilms.startMoviesArray,
    currentYear: startFilms.year,
    search: startFilms.search,
    searchError: startFilms.searchError,
    isLoading: startFilms.isFetching,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchFilmById: id =>
    dispatch({ type: "SEARCH_FILM_BY_ID_START", payload: id }),
  fetchRandomFilmsStart: () =>
    dispatch({ type: "RANDOM_FILMS_FETCHING_START" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
