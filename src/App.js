import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Categories from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservation";
import Destinations from "./Destinations";
import iconRight from "./toright.svg";
import { Container, FluidContainer, ScrollContainer } from "./Containers";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font: 32px "CircularAir-Bold", sans-serif;
  line-height: 34px;
  color: #383838;
  @media only screen and (max-width: 768px) {
    font: 24px "CircularAir-Bold", sans-serif;
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
    background-image: url(${iconRight});
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FluidContainer>
          <Title>Explore Airbnb</Title>
        </FluidContainer>
        <ScrollContainer>
          <Container>
            <Categories />
          </Container>
        </ScrollContainer>

        <FluidContainer>
          <Wrapper>
            <Title>Experiences</Title>
            <ShowAll href="">See all</ShowAll>
          </Wrapper>
        </FluidContainer>
        <ScrollContainer>
          <Container>
            <Experiences />
          </Container>
        </ScrollContainer>

        <FluidContainer>
          <Wrapper>
            <Title>Homes</Title>
            <ShowAll href="">See all</ShowAll>
          </Wrapper>
        </FluidContainer>
        <ScrollContainer>
          <Container>
            <Homes />
          </Container>
        </ScrollContainer>

        <FluidContainer>
          <Wrapper>
            <Title>Popular reservations around the world</Title>
            <ShowAll href="">See all</ShowAll>
          </Wrapper>
        </FluidContainer>
        <ScrollContainer>
          <Container>
            <Reservations />
          </Container>
        </ScrollContainer>

        <FluidContainer>
          <Wrapper>
            <Title>Featured destinations</Title>
            <ShowAll href="">See all</ShowAll>
          </Wrapper>
        </FluidContainer>
        <ScrollContainer>
          <Container>
            <Destinations />
          </Container>
        </ScrollContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
