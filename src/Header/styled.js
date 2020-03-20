import styled, { keyframes } from "styled-components";
import { device } from "../utils/device";

const moveUp = keyframes`
  from {
    transform: translateY(-5px)
  }

  to {
    transform: translateY(0)
  }
`;
export const Logo = styled.h1`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  font-weight: 900;
`;
export const StyledButton = styled.button`
  padding: 20px 40px;
  background: black;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: white;
    color: black;
  }
  &:focus {
    animation: ${moveUp} 0.5s cubic-bezier(0.1, -0.6, 0.2, 0);
  }
`;
export const CustomHeader = styled.header`
  height: 10vh;
  background: #0c2f47;
  width: 100%;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);

  @media ${device.mobileL} {

    flex-direction: column;
  }

  @media ${device.tablet} {
  
    flex-direction: row;
  }
  @media ${device.mobileS} {
    flex-direction: column;
  }
 

  ${StyledButton} {

  
    display: none;

  }
  div {
    display: none;
  }
  &:hover div {
    display: block;
  }
  form {
    display: none;
  }
  &:hover {
    height: 40vh;
  }
  &:hover form {
    display: block;
  }
  &: hover ${Logo} {
    display: none;
  }
  &:hover ${StyledButton} {
    display: block;
  }
`;
