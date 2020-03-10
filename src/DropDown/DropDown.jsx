/// gives a dropdown with recent years, when a user clicks on a year top films are shown
/// click on a year triggers a dispatch of fetchings films by year

import React from "react";
import { connect } from "react-redux";
import { SpecialSearch, SearchMenu } from "./styled";

const DropDown = ({ fetchRecentFilms }) => {
  return (
    <SpecialSearch>
      Most popular films of recent years
      <SearchMenu
        onClick={e => {
          fetchRecentFilms(e.target.innerHTML);
        }}
      >
        <li>2020</li>
        <li>2019</li>
        <li>2018</li>
        <li>2017</li>
        <li>2016</li>
      </SearchMenu>
    </SpecialSearch>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchRecentFilms: year =>
    dispatch({ type: "MOST_RECENT_FILMS_FETCHING_START", payload: year }),
});
export default connect(null, mapDispatchToProps)(DropDown);
