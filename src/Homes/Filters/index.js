import React from "react";
import styled from "styled-components";
import { FluidContainer } from "../../UI/Containers";
import { Dropdown } from "./Dropdown";

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

class Filters extends React.Component {
  render() {
    return (
      <Filter>
        <FluidContainer>
          <Wrapper>
            <Dropdown name="Dates" />
            <Dropdown name="Guests" />
            <Dropdown name="Room type" />
            <Dropdown name="Price" />
            <Dropdown name="Instant Book" />
            <Dropdown name="More filters" />
          </Wrapper>
        </FluidContainer>
      </Filter>
    );
  }
}
export default Filters;
