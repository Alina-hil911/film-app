import styled from "styled-components";
export const SearchMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 90%;
  li {
    background: #9dd0e8;
    padding: 10px 15px;
    z-index: 100000000000;
    border-bottom: 1px solid black;
    text-align: center;
    transition: 0.3s ease;
    &:hover {
      background: white;
    }

    &:first-child {
      border-top: 1px solid black;
    }
  }
  opacity: 0;
`;
export const SpecialSearch = styled.div`
  background: #9dd0e8;
  padding: 18px 38px;
  border: 2px solid black;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  &:hover {
    background: white;
  }
  &:hover ${SearchMenu} {
    opacity: 1;
  }
`;
