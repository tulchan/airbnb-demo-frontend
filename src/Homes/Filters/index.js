import React from "react";
import styled from "styled-components";
import { FluidContainer } from "../../UI/Containers";
import { Dropdown } from "./Dates/Dropdown";
import { Dates } from "./Dates/Dates";

const Filter = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 80px;
  width: 100%;
  height: 53px;
  border-bottom: 0.5px rgba(72, 72, 72, 0.3) solid;
  background-color: #fff;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
`;

const defaultState = {
  isDatesOpen: false
};

class Filters extends React.Component {
  state = defaultState;

  closeMenu = () => {
    this.setState(defaultState);
  };

  openDates = () => {
    this.setState({ isDatesOpen: true });
  };

  render() {
    return (
      <Filter>
        <FluidContainer>
          <Wrapper>
            <Dropdown
              name="Dates"
              activeName="Check in — Check out "
              onClick={this.openDates}
              isActive={this.state.isDatesOpen}
            >
              <Dates closeMenu={this.closeMenu} />
            </Dropdown>
            <Dropdown name="Guests" hiddenXs />
            <Dropdown name="Room type" hiddenXs />
            <Dropdown name="Price" hiddenXs />
            <Dropdown name="Instant Book" hiddenXs />
            <Dropdown name="More filters" />
          </Wrapper>
        </FluidContainer>
      </Filter>
    );
  }
}
export default Filters;
