import React from "react";
import { Img, City, Card } from "../Cards";
import { SlideButton } from "../SlideButton";
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
    <section>
      <Button />
      <div className="row">
        <div className="col-xs-2">
          <Card>
            <Img src={image1} alt="" />
            <City>Paris</City>
          </Card>
        </div>
        <div className="col-xs-2">
          <Card>
            <Img src={image2} alt="" />
            <City>Miami</City>
          </Card>
        </div>
        <div className="col-xs-2">
          <Card>
            <Img src={image3} alt="" />
            <City>Tokyo</City>
          </Card>
        </div>
        <div className="col-xs-2">
          <Card>
            <Img src={image4} alt="" />
            <City>Cape Town</City>
          </Card>
        </div>
        <div className="col-xs-2">
          <Card>
            <Img src={image5} alt="" />
            <City>Seoul</City>
          </Card>
        </div>
        <div className="col-xs-2">
          <Card>
            <Img src={image6} alt="" />
            <City>Los Angeles</City>
          </Card>
        </div>
      </div>
    </section>
  );
}
