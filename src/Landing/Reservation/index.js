import React from "react";
import { ScrollContainer, Container } from "../../UI/Containers";
import { SlideButton } from "../../SlideButton";
import Caption from "../../UI/Caption";
import Card from "./style";
import image1 from "./reserv1.png";
import image2 from "./reserv2.png";
import image3 from "./reserv3.png";
import image4 from "./reserv4.png";

const Button = SlideButton.extend`
  top: 64px;
  @media only screen and (min-width: 1200px) {
    top: 80px;
  }
`;

export default function() {
  return (
    <div>
      <Caption text="Popular reservations around the world" />
      <ScrollContainer>
        <Button />
        <Container>
          <div className="row">
            <div className="col-xs-3">
              <Card
                img={image1}
                type={"SPEAKEASY"}
                name={"Chumley’s"}
                check={"About $60 per person"}
              />
            </div>
            <div className="col-xs-3">
              <Card
                img={image2}
                type={"KOREAN GASTROPUB"}
                name={"Hanjan"}
                check={"About $50 per person"}
              />
            </div>
            <div className="col-xs-3">
              <Card
                img={image3}
                type={"GERMAN AMERICAN"}
                name={"Prime Meats"}
                check={"About $55 per person"}
              />
            </div>
            <div className="col-xs-3">
              <Card
                img={image4}
                type={"FINE SEAFOOD"}
                name={"Seaprice"}
                check={"About $70 per person"}
              />
            </div>
          </div>
        </Container>
      </ScrollContainer>
    </div>
  );
}
