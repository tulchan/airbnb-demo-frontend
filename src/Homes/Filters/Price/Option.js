import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "./slider.css";

const Option = styled.div`
  margin-top: 24px;
  margin-left: 16px;
`;

const MonetaryValue = styled.p`
  font-weight: 300;
  line-height: normal;
  font-size: 16px;
  margin: 0;
  color: #383838;
  font-family: CircularAir-Light, sans-serif;
`;

const SubInfo = styled.p`
  font-weight: 300;
  line-height: normal;
  font-size: 12px;
  margin-top: 7px;
  color: #383838;
  font-family: CircularAir-Light, sans-serif;
`;

const RangeWithPicture = styled.div`
  position: relative;
  width: 100%;
  padding-top: 98px;
`;

const Img = styled.img`
  position: absolute;
  bottom: 6px;
  left: 37px;
`;

export default props => (
  <Option>
    <MonetaryValue>{props.money}</MonetaryValue>
    <SubInfo>{props.subInfo}</SubInfo>
    <RangeWithPicture>
      <Img src={props.img} alt="price" />
      <Rheostat />
    </RangeWithPicture>
  </Option>
);
