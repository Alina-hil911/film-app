import styled from "styled-components";
import { device } from "../utils/device";

export const ChangeThemeButton = styled.div`
  position: fixed;
  width: 80px;
  height: 80px;
  background: ${props => props.theme.buttonBackgroundColor};

  z-index: 200000000000;
  border-radius: 30%;
  border: 3px solid white;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
    top: 20px;
    left: 50%;
    margin-left: -20px;
  }

  @media ${device.tablet} {
    left: 90%;
    top: 80px;
    width: 80px;
    height: 80px;
  }

  svg {
    width: 50px;
    path {
      fill: ${props => props.theme.svgButtonColor};
    }
  }
`;
