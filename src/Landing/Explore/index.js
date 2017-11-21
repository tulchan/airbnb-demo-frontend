import React from "react";
import styled from "styled-components";
import Card from "./style";
import image1 from "./explore1.png";
import image2 from "./explore2.png";
import image3 from "./explore3.png";
import { Link } from "react-router-dom";
import { Wrapper, Img, CardValue, Paragraph, Categories } from "./style";
import {
  ScrollContainer,
  Container,
  FluidContainer
} from "../../UI/Containers";

export const InnerTitle = styled.h3`
  margin: 45px 0 18px;
  font: 24px "CircularAir-Bold", sans-serif;
  line-height: 34px;
  color: #383838;
  @media only screen and (min-width: 768px) {
    font: 32px "CircularAir-Bold", sans-serif;
  }
`;

export default function() {
  return (
    <div>
      <Wrapper>
        <FluidContainer>
          <InnerTitle>Explore Airbnb</InnerTitle>
        </FluidContainer>
      </Wrapper>
      <ScrollContainer>
        <Container>
          <Categories>
            <div className="row">
              <div className="col-xs-4">
                <Link to="/homes">
                  <Card img={image1} title="Homes" />
                </Link>
              </div>
              <div className="col-xs-4">
                <Link to="">
                  <Card img={image2} title="Experiences" />
                </Link>
              </div>
              <div className="col-xs-4">
                <Link to="">
                  <Card img={image3} title="Restaurants" />
                </Link>
              </div>
            </div>
          </Categories>
        </Container>
      </ScrollContainer>
    </div>
  );
}
