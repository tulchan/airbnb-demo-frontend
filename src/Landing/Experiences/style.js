import React from "react";
import { Img, CardValue, Price, Star, Review, Stars, Card } from "../../Cards";
import star from "./star.png";

export default props => (
  <Card>
    <Img src={props.img} alt="" />
    <CardValue>
      <Price>${props.price}</Price>
      <span>{props.title}</span>
    </CardValue>
    <div>
      <Stars>
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
      </Stars>
      <Review>props.reviews</Review>
    </div>
  </Card>
);
