import React from "react";
import Card from "./Card";
import { SlideButton } from "../../SlideButton";
import { Container, ScrollContainer } from "../../UI/Containers";
import Caption from "../../UI/Caption";
import image1 from "./homescard1.png";
import image2 from "./homescard2.png";
import image3 from "./homescard3.png";

export const Button = SlideButton.extend`
  top: 83px;
  @media only screen and (min-width: 1200px) {
    top: 105px;
  }
`;

export default function() {
  return (
    <div>
      <Caption text="Homes" />
      <ScrollContainer>
        <Button />
        <Container>
          <div className="row">
            <div className="col-xs-4">
              <Card
                img={image1}
                price={82}
                descr="La Salentina, see, nature & relax"
                layout={"Entire house"}
                beds={"9 beds"}
                reviews={97}
                review={"Superhost"}
              />
            </div>
            <div className="col-xs-4">
              <Card
                img={image2}
                price={82}
                descr="Your private 3 bedr"
                layout={"Entire house"}
                beds={"5 beds"}
                reviews={161}
                review={"Superhost"}
              />
            </div>
            <div className="col-xs-4">
              <Card
                img={image3}
                price={200}
                descr="Dreamy Tropical Tree House"
                layout={"Entire treehouse"}
                beds={"1 bed"}
                reviews={364}
                review={"Superhost"}
              />
            </div>
          </div>
        </Container>
      </ScrollContainer>
    </div>
  );
}
