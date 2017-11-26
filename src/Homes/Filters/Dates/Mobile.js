import React from "react";
import styled from "styled-components";
import cross from "./close.svg";
import arrow from "./arrow-right.svg";
import { DayPickerRangeController } from "react-dates";

const Background = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 16px;
  line-height: normal;
  font-size: 14px;
  position: absolute;
  width: 100%;
  z-index: 10;
  background-color: white;
`;

const CloseButton = styled.button`
  border: none;
  background-image: url(${cross});
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  height: 26px;
  width: 26px;
  cursor: pointer;
`;

const Title = styled.span`
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 14px;
  color: #383838;
`;

const Reset = styled.button`
  font-family: CircularAir, sans-serif;
  line-height: normal;
  margin: 0px;
  border: none;
  background: white;
  font-size: 14px;
  color: #0f7276;
  cursor: pointer;
  padding: 0px 8px;
`;

const DatesRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0 0;
  position: absolute;
  width: 100%;
  top: 40px;
  background: #fff;
  z-index: 5;
`;

const Seleted = styled.div`
  font-family: "CircularAir-Light";
  line-height: normal;
  font-size: 18px;
  color: ${props => (props.isActive ? `#0F7276` : `#636363`)};
  border-bottom: ${props => (props.isActive ? 1 : 0)}px #008489 solid;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 200;
`;

const Arrow = styled.img`
  margin-left: 8px;
  margin-right: 8px;
`;

export default props => (
  <Background>
    <Header>
      <CloseButton />
      <Title>When</Title>
      <Reset>Reset</Reset>
    </Header>
    <DatesRow>
      <Seleted isActive>Check-in</Seleted>
      <Arrow src={arrow} alt="arrow" />
      <Seleted>Check-out</Seleted>
    </DatesRow>
    <DayPickerRangeController {...props} />
  </Background>
);
