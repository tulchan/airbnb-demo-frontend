import React from "react";
import {
  Img,
  CardValue,
  PriceDescr,
  Star,
  Review,
  ReviewAbout,
  Stars,
  HouseInfo,
  HouseType,
  Card
} from "../Cards";
import { SlideButton } from "../SlideButton";

import image1 from "./homescard1.png";
import image2 from "./homescard2.png";
import image3 from "./homescard3.png";
import star from "../Experiences/star.png";

export const Button = SlideButton.extend`
  top: 83px;
  @media only screen and (min-width: 1200px) {
    top: 105px;
  }
`;

export default function() {
  return (
    <section>
      <Button />
      <div className="row">
        <div className="col-xs-4">
          <Card>
            <Img src={image1} alt="" />
            <CardValue>
              <PriceDescr>$82 La Salentina, see, nature & relax</PriceDescr>
              <HouseInfo>
                <HouseType>Entire house</HouseType>
                <HouseType>9 beds</HouseType>
              </HouseInfo>
            </CardValue>
            <div>
              <Stars>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stars>
              <Review>
                <ReviewAbout>97</ReviewAbout>
                <ReviewAbout>Superhost</ReviewAbout>
              </Review>
            </div>
          </Card>
        </div>
        <div className="col-xs-4">
          <Card>
            <Img src={image2} alt="" />
            <CardValue>
              <PriceDescr>
                $82 Your private 3 bedr, riad and exclusive
              </PriceDescr>
              <HouseInfo>
                <HouseType>Entire house</HouseType>
                <HouseType>5 beds</HouseType>
              </HouseInfo>
            </CardValue>
            <div>
              <Stars>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stars>
              <Review>
                <ReviewAbout>161</ReviewAbout>
                <ReviewAbout>Superhost</ReviewAbout>
              </Review>
            </div>
          </Card>
        </div>
        <div className="col-xs-4">
          <Card>
            <Img src={image3} alt="" />
            <CardValue>
              <PriceDescr>$200 Dreamy Tropical Tree House</PriceDescr>
              <HouseInfo>
                <HouseType>Entire treehouse</HouseType>
                <HouseType>1 bed</HouseType>
              </HouseInfo>
            </CardValue>
            <div>
              <Stars>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stars>
              <Review>
                <ReviewAbout>364</ReviewAbout>
                <ReviewAbout>Superhost</ReviewAbout>
              </Review>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
