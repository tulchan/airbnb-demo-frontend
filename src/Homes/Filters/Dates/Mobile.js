import React from "react";
import styled from "styled-components";
import { DayPickerRangeController } from "react-dates";
import close from "../../close.svg";
import arrow from "../../arrow-right.svg";

const Filter = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 4;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 16px;
  font-family: "CircularAir-Book";
  line-height: normal;
  font-size: 14px;
  position: absolute;
  width: 100%;
  z-index: 6;
  background: #fff;
`;

const CloseButton = styled.button`
  border: none;
  background: url(${close});
  background-repeat: no-repeat;
  background-position: center;
  height: 26px;
  width: 26px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #383838;
`;

const Reset = styled.div`
  color: #0f7276;
  cursor: pointer;
`;

const DatesRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0 0;
  position: absolute;
  width: 100%;
  top: 40px;
  background: #fff;
  z-index: 2;
`;

const Label = styled.div`
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

export default class extends React.Component {
  render() {
    return (
      <Filter>
        <Header>
          <CloseButton onClick={this.props.closeFilter} />
          <Title>When</Title>
          <Reset>Reset</Reset>
        </Header>
        <DatesRow>
          <Label isActive>Check-in</Label>
          <Arrow src={arrow} alt="arrow" />
          <Label>Check-out</Label>
        </DatesRow>
        <DayPickerRangeController
          hideKeyboardShortcutsPanel
          initialVisibleMonth={null}
          numberOfMonths={3}
          orientation="verticalScrollable"
        />
      </Filter>
    );
  }
}
