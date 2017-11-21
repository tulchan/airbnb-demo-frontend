import React from "react";
import { Img, City, Card } from "../../Cards";

export default props => (
  <Card>
    <Img src={props.img} alt="" />
    <City>{props.city}</City>
  </Card>
);
