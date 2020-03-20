import styled from "styled-components";

export const Button = styled.button`
  padding: 20px;
  background: black;
  border-radius: 20px;
  border: none;
  outline: none;
  height: 100%;
  position: relative;
  transition: 0.3s ease;
  padding-left: 45px;

  &:hover {
    background: #9dd0e8;
  }
  &:hover svg {
    path {
      fill: black;
    }
  }
  cursor: pointer;
  left: -30px;
  top: 1px;

  svg {
    width: 15px;
    path {
      fill: white;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
  background: #f4f4f4;
  position: relative;
  z-index: 3;
  border-radius: 20px;
  padding: 20px 40px;
  border: none;
  outline: none;

  &:focus {
    outline: none;
    background: #ffffff;
  }
`;
