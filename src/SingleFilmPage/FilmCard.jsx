import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { closeRandomFilmCard } from "../redux/SingleFilm/randomFilm.actions";
import Spinner from "../Spinner/Spinner";
import {
  ModalCard,
  ImageDiv,
  TextDiv,
  CloseButton,
  Background,
  ModalWrapper,
} from "./styled";
import { defaultImgUrl } from "../utils/defaults";
import Zoom from "react-reveal/Zoom";

const Portal = ({ children }) => {
  const cardRoot = document.getElementById("film-card");
  const el = document.createElement("div");

  useEffect(() => {
    cardRoot.appendChild(el);
  }, []); // append div to the cardRoot div on the initial render

  useEffect(() => {
    return () => cardRoot.removeChild(el);
  }); //dismount

  return createPortal(children, el);
};

const FilmCard = ({ randomFilm, closeRandomFilmCard }) => {
  //some films dont have an image so a func checks if they have it, if not - show a default img
  const makeImageUrl = () => {
    const defaultUrl = defaultImgUrl;
    if (randomFilm.poster_path) {
      return `https://image.tmdb.org/t/p/w500/${randomFilm.poster_path}`;
    }
    if (randomFilm.backdrop_path) {
      return `https://image.tmdb.org/t/p/w500/${randomFilm.backdrop_path}`;
    }
    return defaultUrl;
  };

  const handleCloseButtonClick = () => {
    closeRandomFilmCard();
  };
  return (
    <Portal>
      <ModalWrapper>
        <ModalCard>
          <Zoom>
            <ImageDiv>
              {makeImageUrl() ? (
                <img src={makeImageUrl()}></img>
              ) : (
                <Spinner></Spinner>
              )}
            </ImageDiv>
          </Zoom>
          <TextDiv>
            <p>
              <span>Title: </span>
              {randomFilm.title}
            </p>

            <p>
              <span>Actors: </span>
            </p>
            <p>
              <span>Release date: </span>
              {randomFilm.release_date}
            </p>
            <p>
              <span>Description: </span>
              {randomFilm.overview}
            </p>
          </TextDiv>
          <CloseButton onClick={handleCloseButtonClick}>X</CloseButton>
        </ModalCard>
        <Background></Background>
      </ModalWrapper>
    </Portal>
  );
};

const mapStateToProps = state => {
  const { randomFilmReducer } = state;
  return { randomFilm: randomFilmReducer.randomFilm };
};
const mapDispatchToProps = dispatch => ({
  closeRandomFilmCard: () => dispatch(closeRandomFilmCard),
});
export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);
