import React from "react";
import {
  Img,
  InstitutionType,
  InstitutionName,
  PricePerson,
  Card
} from "../../Cards";

export default props => (
  <Card>
    <Img src={props.img} alt="" />
    <InstitutionType>{props.type}</InstitutionType>
    <InstitutionName>{props.name}</InstitutionName>
    <PricePerson>{props.check}</PricePerson>
  </Card>
);
