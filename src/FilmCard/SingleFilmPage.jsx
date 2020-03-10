///one of many fil cards that are rendered on a homepage

import React, { memo } from "react";
import { Card, ImageDiv, DetailsButton } from "./styled";
import { defaultImgUrl } from "../utils/defaults";
const SingleFilmPage = memo(
  ({ title, posterPath, backdropPath, fetchFilmById, id }) => {
    const makeImageUrl = () => {
      const defaultUrl = defaultImgUrl;
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500/${posterPath}`;
      }
      if (backdropPath) {
        return `https://image.tmdb.org/t/p/w500/${backdropPath}`;
      }
      return defaultUrl;
    };
    return (
      <Card>
        <ImageDiv>
          <DetailsButton onClick={() => fetchFilmById(id)}>
            Get details
          </DetailsButton>
          <img src={makeImageUrl()} alt="film poster"></img>
        </ImageDiv>
        <p>{title}</p>
      </Card>
    );
  },
);

export default SingleFilmPage;
