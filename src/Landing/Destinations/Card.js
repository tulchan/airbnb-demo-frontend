import React from "react";
import { Img, City, Card } from "../../Card";

export default props => (
  <Card>
    <Img src={props.img} alt="" />
    <City>{props.city}</City>
  </Card>
);
