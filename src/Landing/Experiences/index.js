import React from "react";
import Card from "./Card";
import { SlideButton } from "../../SlideButton";
import Caption from "../../UI/Caption";
import { Container, ScrollContainer } from "../../UI/Containers";
import image1 from "./card1.png";
import image2 from "./card2.png";
import image3 from "./card3.png";
import image4 from "./card4.png";

const Button = SlideButton.extend`
  top: 155px;
  @media only screen and (min-width: 1200px) {
    top: 191px;
  }
`;

export default function() {
  return (
    <div>
      <Caption text="Experiences" />
      <ScrollContainer>
        <Button />
        <Container>
          <div className="row">
            <div className="col-xs-3">
              <Card
                img={image1}
                price={29}
                title="Forest therapy"
                reviews={43}
              />
            </div>
            <div className="col-xs-3">
              <Card
                img={image2}
                price={69}
                title="Whale watching"
                reviews={46}
              />
            </div>
            <div className="col-xs-3">
              <Card
                img={image3}
                price={69}
                title="Table Mountain Summit, Cable Car Down"
                reviews={44}
              />
            </div>
            <div className="col-xs-3">
              <Card img={image4} price={50} title="Salsa Night" reviews={44} />
            </div>
          </div>
        </Container>
      </ScrollContainer>
    </div>
  );
}
