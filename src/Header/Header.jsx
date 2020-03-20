import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { SearchRandomFilmStart } from "../redux/SingleFilm/randomFilm.actions";
import { CustomHeader, StyledButton, Logo } from "./styled";
const Searchbar = lazy(() => import("../SearchBar/SearchBar"));
const DropDown = lazy(() => import("../DropDown/DropDown"));

const Header = ({ SearchRandomFilmStart, error }) => {
  const handleClick = e => {
    e.preventDefault();
    SearchRandomFilmStart();
  };
  // Something is not ok with db, some films are missing so the text says user to click one more time
  return (
    <CustomHeader>
      <StyledButton onClick={handleClick}>
        {error ? "One more time!" : "I am lucky!"}
      </StyledButton>
      <Logo>
        {document.documentElement.clientWidth > 1000
          ? "Movie searcher"
          : "Click here!"}
      </Logo>
      <Suspense fallback={<p>Loading</p>}>
        <Searchbar></Searchbar>
      </Suspense>
      <Suspense fallback={<p>Loading</p>}>
        <DropDown></DropDown>
      </Suspense>
    </CustomHeader>
  );
};

const mapStateToProps = state => {
  const randomFilmReducer = state.randomFilmReducer;
  return {
    error: randomFilmReducer.errorMsg,
  };
};

const mapDispatchToProps = dispatch => ({
  SearchRandomFilmStart: () => dispatch(SearchRandomFilmStart),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
