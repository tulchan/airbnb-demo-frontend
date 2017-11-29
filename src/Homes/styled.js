import React from "react";
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
  Card,
  StarsWrapper
} from "../Card";

const CardWrapper = Card.extend`
  margin-top: 20px;
  margin-bottom: 18px;
`;

const HouseInformation = HouseInfo.extend`
  margin-bottom: 4px;
`;

const PriceDescription = Description.extend`
  color: #383838;
  font-size: 15px;
`;

export default props => (
  <CardWrapper>
    <Img src={props.img} alt="" />
    <CardValue>
      <PriceDescription>
        <Price>${props.price}</Price>
        {props.description}
      </PriceDescription>
      <HouseInformation>
        <HouseType>{props.houseType}</HouseType>
        <HouseType>{props.beds}</HouseType>
      </HouseInformation>
    </CardValue>
    <div>
      <StarsWrapper count={props.count} />
      <Review>
        <ReviewAbout>97</ReviewAbout>
        <ReviewAbout>Superhost</ReviewAbout>
      </Review>
    </div>
  </CardWrapper>
);
