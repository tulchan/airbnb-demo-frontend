import React from "react";
import { SlideButton } from "../../SlideButton";
import { ScrollContainer, Container } from "../../UI/Containers";
import Caption from "../../UI/Caption";
import Card from "./Card";
import image1 from "./dest1.png";
import image2 from "./dest2.png";
import image3 from "./dest3.png";
import image4 from "./dest4.png";
import image5 from "./dest5.png";
import image6 from "./dest6.png";

const Button = SlideButton.extend`
  top: 91px;
  @media only screen and (min-width: 1200px) {
    top: 115px;
  }
`;

export default function() {
  return (
    <div>
      <Caption text="Featured destinations" />
      <ScrollContainer>
        <Button />
        <Container>
          <div className="row">
            <div className="col-xs-2">
              <Card img={image1} city="Paris" />
            </div>
            <div className="col-xs-2">
              <Card img={image2} city="Miami" />
            </div>
            <div className="col-xs-2">
              <Card img={image3} city="Tokyo" />
            </div>
            <div className="col-xs-2">
              <Card img={image4} city="Cape town" />
            </div>
            <div className="col-xs-2">
              <Card img={image5} city="Seoul" />
            </div>
            <div className="col-xs-2">
              <Card img={image6} city="Los Angeles" />
            </div>
          </div>
        </Container>
      </ScrollContainer>
    </div>
  );
}
