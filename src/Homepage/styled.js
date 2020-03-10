import styled from "styled-components";
import { device } from "../utils/device";
export const Wrapper = styled.div`
  h2 {
    user-select: none;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
  width: 100%;
  box-sizing: border-box;
  margin: 100px auto;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  h2 {
    width: 100%;
    text-align: center;
    text-transform: uppercase;

    color: #0c2f47;

    @media ${device.mobileL} {
      margin-left: 0;
      margin-right: 0;
    }

    @media ${device.tablet} {
      margin: 40px;
    }
  }
`;
