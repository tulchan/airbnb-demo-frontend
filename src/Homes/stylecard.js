import React from "react";
import star from "./star.png";
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
} from "../Cards";

const CardWrapper = Card.extend`
  margin-top: 20px;
  margin-bottom: 18px;
`;

export default props => (
  <CardWrapper>
    <Img src={props.img} alt="" />
    <CardValue>
      <Description>
        <Price>${props.price}</Price>
        {props.descr}
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
  </CardWrapper>
);
