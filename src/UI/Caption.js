import React from "react";
import styled from "styled-components";
import { Wrapper, FluidContainer } from "./Containers";
import showall from "../showall.svg";

const Title = styled.div``;

export const InnerTitle = styled.h3`
  margin: 45px 0 18px;
  font: 24px "CircularAir-Bold", sans-serif;
  line-height: 34px;
  color: #383838;
  @media only screen and (min-width: 768px) {
    font: 32px "CircularAir-Bold", sans-serif;
  }
`;

const ShowAll = styled.a`
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #383838;
  min-width: 60px;
  text-align: right;
  &:after {
    display: inline-block;
    width: 6px;
    height: 10px;
    margin-left: 8px;
    content: "";
    background-image: url(${showall});
  }
`;

export default props => (
  <Title>
    <FluidContainer>
      <Wrapper>
        <InnerTitle>{props.text}</InnerTitle>
        <ShowAll href="">See all</ShowAll>
      </Wrapper>
    </FluidContainer>
  </Title>
);
