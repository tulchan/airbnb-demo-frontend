import React from "react";
import {
  Img,
  InstitutionType,
  InstitutionName,
  PricePerson,
  Card
} from "../Cards";
import { SlideButton } from "../SlideButton";

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
    <section>
      <Button />
      <div className="row">
        <div className="col-xs-3">
          <Card>
            <Img src={image1} alt="" />
            <InstitutionType>SPEAKEASY</InstitutionType>
            <InstitutionName>Chumley's</InstitutionName>
            <PricePerson>About $60 per person</PricePerson>
          </Card>
        </div>
        <div className="col-xs-3">
          <Card>
            <Img src={image2} alt="" />
            <InstitutionType>KOREAN GASTROPUB</InstitutionType>
            <InstitutionName>Hanjan</InstitutionName>
            <PricePerson>About $50 per person</PricePerson>
          </Card>
        </div>
        <div className="col-xs-3">
          <Card>
            <Img src={image3} alt="" />
            <InstitutionType>GERMAN AMERICAN</InstitutionType>
            <InstitutionName>Prime Meats</InstitutionName>
            <PricePerson>About $55 per person</PricePerson>
          </Card>
        </div>
        <div className="col-xs-3">
          <Card>
            <Img src={image4} alt="" />
            <InstitutionType>FINE SEAFOOD</InstitutionType>
            <InstitutionName>Seaprice</InstitutionName>
            <PricePerson>About $70 per person</PricePerson>
          </Card>
        </div>
      </div>
    </section>
  );
}
