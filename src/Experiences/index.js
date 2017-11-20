import React from "react";
import { Img, CardValue, Price, Star, Review, Stars, Card } from "../Cards";
import { SlideButton } from "../SlideButton";

import image1 from "./card1.png";
import image2 from "./card2.png";
import image3 from "./card3.png";
import image4 from "./card4.png";
import star from "./star.png";

const Button = SlideButton.extend`
  top: 155px;
  @media only screen and (min-width: 1200px) {
    top: 191px;
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
            <CardValue>
              <Price>$29</Price>
              <span>Forest therapy</span>
            </CardValue>
            <div>
              <Stars>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stars>
              <Review>44 reviews</Review>
            </div>
          </Card>
        </div>
        <div className="col-xs-3">
          <Card>
            <Img src={image2} alt="" />
            <CardValue>
              <Price>$69</Price>
              <span>Whale watching</span>
            </CardValue>
            <div>
              <Stars>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stars>
              <Review>46 reviews</Review>
            </div>
          </Card>
        </div>
        <div className="col-xs-3">
          <Card>
            <Img src={image3} alt="" />
            <CardValue>
              <Price>$69</Price>
              <span>Table Mountain Summit, Cable Car Down</span>
            </CardValue>
            <div>
              <Stars>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stars>
              <Review>44 reviews</Review>
            </div>
          </Card>
        </div>
        <div className="col-xs-3">
          <Card>
            <Img src={image4} alt="" />
            <CardValue>
              <Price>$50</Price>
              <span>Salsa Night</span>
            </CardValue>
            <div>
              <Stars>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stars>
              <Review>44 reviews</Review>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
