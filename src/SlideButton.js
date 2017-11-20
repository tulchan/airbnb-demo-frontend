import styled from "styled-components";
import iconRight from "./arrow.svg";

export const SlideButton = styled.div`
  position: absolute;
  right: -2.5%;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  background-image: url(${iconRight});
  background-size: 10px 18px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
    right: -0.5%;
  }
`;