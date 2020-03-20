import styled from "styled-components";
import { device } from "../utils/device";
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.8;
`;

export const ModalCard = styled.div`
  background: ${props => props.theme.cardBackgroundColor};
  margin-top: 100px;
  position: relative;
  z-index: 10;
  margin-bottom: 100px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);

  @media ${device.tablet} {
    max-width: 65%;
    min-width: 50%;
  }
  @media ${device.mobileM} {
    max-width: 70%;
    max-height: 80%;
    overflow: scroll;
  }

  p {
    margin-top: 10px;
  }
  span {
    font-weight: bold;
  }
`;

export const ImageDiv = styled.div`
  margin: 0 auto;
  max-width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  border-top: 1px solid #9dd0e8;
  border-bottom: 1px solid #9dd0e8;
  @media ${device.mobileL} {
    height: 200px;
  }

  @media ${device.tablet} {
    height: 300px;
  }
  img {
    max-width: 80%;
    max-height: 80%;
    margin-top: 30px;
    border-radius: 5px;
  }
`;

export const CloseButton = styled.button`
  background: darkred;
  color: white;
  font-weight: 800;
  border: none;
  outline: none;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 20px 30px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background: white;
    color: darkred;
    box-shadow: 0 0 0 3px darkred;
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: self-start;
  color: ${props => props.theme.textColor};
`;
