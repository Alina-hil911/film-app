import React from "react";
import { v4 as uuid } from "uuid";
import {
  CurrentPage,
  Page,
  PaginationContainer,
  PaginationWrapper,
} from "./styled";

const Pagination = ({ quantity, currentPage, handleClick }) => {
  //here we get an array of Page/CurrentPage elements
  //if currentPage is equal to index+1 - CurrentPage element is rendered
  const makePages = pagesQuantity => {
    const pages = [];
    for (let i = 0; i < pagesQuantity; i++) {
      if (i + 1 === currentPage) {
        pages.push(
          <CurrentPage key={uuid()}>
            <p>{i + 1}</p>
          </CurrentPage>,
        );
      } else {
        pages.push(
          <Page key={uuid()} onClick={() => handleClick(i + 1)}>
            <p>{i + 1}</p>
          </Page>,
        );
      }
    }
    return pages;
  };

  return (
    <PaginationWrapper>
      <PaginationContainer>{makePages(quantity)}</PaginationContainer>
    </PaginationWrapper>
  );
};

export default Pagination;
