import React, { useState } from "react";
import { ReactComponent as SearchSVG } from "../assets/search.svg";
import { connect } from "react-redux";
import { Form, Input, Button } from "./styled";
import { replaceSpaces } from "../utils/defaults";

const Searchbar = ({ searchFilmByNameStart }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => setSearchValue(e.target.value);

  const handleClick = e => {
    e.preventDefault();
    searchFilmByNameStart(replaceSpaces(searchValue));
  };

  return (
    <Form>
      <Input
        placeholder="Type the name of the film"
        onChange={e => handleChange(e)}
      ></Input>
      <Button onClick={handleClick}>
        <SearchSVG></SearchSVG>
      </Button>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  searchFilmByNameStart: name =>
    dispatch({ type: "FETCH_FILM_BY_NAME_START", payload: name }),
});
export default connect(null, mapDispatchToProps)(Searchbar);
