import React from "react";
import { Img, CardValue, Price, Review, Card, StarsWrapper } from "../../Card";

export default props => (
  <Card>
    <Img src={props.img} alt="" />
    <CardValue>
      <Price>${props.price}</Price>
      <span>{props.title}</span>
    </CardValue>
    <div>
      <StarsWrapper count={props.count} />
      <Review>{props.reviews} reviews</Review>
    </div>
  </Card>
);
