import { Md, Sm, Xs } from "../../../UI/Responsive";
import React from "react";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./CalendarReactStyles.css";
import Mobile from "./Mobile";

export default props => (
  <div>
    <Md>
      <DayPickerRangeController
        hideKeyboardShortcutsPanel
        initialVisibleMonth={null}
        numberOfMonths={2}
        onOutsideClick={this.onOutsideClick}
        onPrevMonthClick={this.onPrevMonthClick}
        onNextMonthClick={this.onNextMonthClick}
      />
    </Md>
    <Sm>
      <DayPickerRangeController
        hideKeyboardShortcutsPanel
        initialVisibleMonth={null}
        numberOfMonths={1}
        onOutsideClick={this.onOutsideClick}
        onPrevMonthClick={this.onPrevMonthClick}
        onNextMonthClick={this.onNextMonthClick}
      />
    </Sm>
    <Xs>
      <Mobile
        autoFocus
        hideKeyboardShortcutsPanel
        initialVisibleMonth={null}
        numberOfMonths={12}
        daySize={43}
        orientation="verticalScrollable"
        onOutsideClick={this.onOutsideClick}
        onPrevMonthClick={this.onPrevMonthClick}
        onNextMonthClick={this.onNextMonthClick}
      />
    </Xs>
  </div>
);
