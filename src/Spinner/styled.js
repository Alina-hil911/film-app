import styled, { keyframes } from "styled-components";
const spinner = keyframes`
  to {
      transform: rotate(360deg)
  }
`;

export const StyledSpinner = styled.div`
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100px;
    width: 100px;
    margin-top: -50px;
    margin-left: -50px;
    border-radius: 50%;
    border: 5px solid darkgrey;
    border-left-color: coral;
    border-top-color: transparent;
    animation: ${spinner} 0.8s linear infinite;
  }
`;
