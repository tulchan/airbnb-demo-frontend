import React from "react";
import styled from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./CalendarDates.css";
import moment from "moment";
import { DayPickerRangeController } from "react-dates";
import { Sm, Md } from "../../../UI/Responsive";

const Footer = styled.div`
  width: 100%;
  display: flex;
  margin-top: -24px;
  justify-content: space-between;
  background: #fff;
`;

const Button = styled.button`
  width: 110px;
  height: 64px;
  background: none;
  border: none;
  font: 16px "CircularAir-Book";
  color: ${props => (props.isApply ? "#0F7276" : "#383838")};
  cursor: pointer;
  outline: none;
`;

export const Dates = props => (
  <div>
    <Sm>
      <DayPickerRangeController
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
        isDayBlocked={day => day.isBefore(moment(), "day")}
      />
      <Footer>
        <Button onClick={props.closeMenu}>Cancel</Button>
        <Button isApply>Apply</Button>
      </Footer>
    </Sm>
    <Md>
      <DayPickerRangeController
        numberOfMonths={2}
        hideKeyboardShortcutsPanel
        isDayBlocked={day => day.isBefore(moment(), "day")}
      />
      <Footer>
        <Button onClick={props.closeMenu}>Cancel</Button>
        <Button isApply>Apply</Button>
      </Footer>
    </Md>
  </div>
);
