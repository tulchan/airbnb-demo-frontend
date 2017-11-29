import React from "react";
import star from "../Experiences/star.svg";
import {
  Img,
  CardValue,
  Price,
  Description,
  Star,
  Review,
  ReviewAbout,
  Stars,
  HouseInfo,
  HouseType,
  Card
} from "../../Card";

export default props => (
  <Card>
    <Img src={props.img} alt="" />
    <CardValue>
      <Description>
        <Price>${props.price}</Price>
        {props.description}
      </Description>
      <HouseInfo>
        <HouseType>{props.layout}</HouseType>
        <HouseType>{props.beds}</HouseType>
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
);
