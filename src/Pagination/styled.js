import styled from "styled-components";
export const PaginationWrapper = styled.div`
  width: 100%;
  margin: 70px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 2px solid #0c2f47;
`;
export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 40px;
  background-color: #0c2f47;
  border-radius: 2px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: white;
  }
  &:hover p {
    color: #0c2f47;
  }

  p {
    color: white;
    font-weight: 800;
  }

  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export const CurrentPage = styled(Page)`
  border: 4px solid white;
  &:hover {
    border: 4px solid #0c2f47;
  }
`;
