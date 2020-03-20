import styled from "styled-components";
import { device } from "../utils/device";
export const Card = styled.div`
  @media ${device.mobileL} {
    max-width: 90%;
  }

  @media ${device.tablet} {
    max-width: 30%;
  }

  background: ${props => props.theme.cardBackgroundColor};
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;

  p {
    margin-top: 10px;
    font-weight: 800;
    color: ${props => props.theme.textColor};
  }
`;

export const DetailsButton = styled.button`
  margin: auto;

  background: #0c2f47;
  color: white;
  font-weight: 800;
  border: none;
  outline: none;
  position: absolute;
  z-index: 1000000;

  padding: 20px 30px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  opacity: 0;
  &:hover {
    background: white;
    color: #0c2f47;
    box-shadow: 0 0 0 3px #0c2f47;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  max-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 20px;
  padding-bottom: 20px;

  border-top: 1px solid #9dd0e8;
  border-bottom: 1px solid #9dd0e8;

  position: relative;
  &:hover button {
    opacity: 1;
  }
  img {
    margin: 40px;
    max-width: 60%;

    border-radius: 5px;
  }
  img {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    filter: grayscale(50%);

    &:hover {
      filter: grayscale(0%);
    }
  }
 
  @media ${device.mobileL} {
    padding 140px 0;
  }

  @media ${device.tablet} {
    padding: 10px 0;
  }
  @media ${device.laptop} {
    padding: 40px 0;
  }
`;
