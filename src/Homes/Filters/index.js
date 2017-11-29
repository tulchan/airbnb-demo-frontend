import React from "react";
import styled from "styled-components";
import { FluidContainer } from "../../UI/Containers";
import Dates from "./Dates/";
import Guests from "./Guests/";

const FilterWrapper = styled.div`
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

const FilterButton = styled.div`
  padding: 0.4rem 0.4rem;
  box-sizing: border-box;
  position: relative;
  display: ${props => (props.hiddenXs ? "none" : "block")};
  &:first-child {
    padding: 0.4rem 0.4rem 0.4rem 0;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Link = styled.button`
  font: 14px "CircularAir-Book", sans-serif;
  display: block;
  border: 1px solid;
  border-color: ${props => (props.active ? "#000" : "rgba(72, 72, 72, 0.2)")};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.4rem 0.78rem;
  white-space: nowrap;
  transition: 0.25s ease-out;
  background: ${props => (props.active ? "#000" : "#fff")};
  color: ${props => (props.active ? "#fff" : "#383838")};
  cursor: pointer;
`;

class Filter extends React.Component {
  state = {
    isOpen: false,
    openedFilter: null,
    dates: {
      startDate: null,
      endDate: null
    },
    guests: {
      adults: 0,
      children: 0,
      infants: 0
    }
  };

  openFilter = key => {
    this.setState({ openedFilter: key });
    console.log(this.state);
  };

  onDatesApply = (startDate, endDate) => {
    const dates = {
      startDate,
      endDate
    };

    this.setState({ dates });
    this.setState({ openedFilter: null });
  };

  onGuestsApply = (adults, children, infants) => {
    const guests = {
      adults,
      children,
      infants
    };

    this.setState({ guests });
    this.setState({ openedFilter: null });
  };

  render() {
    return (
      <FilterWrapper>
        <FluidContainer>
          <Wrapper>
            <FilterButton>
              {this.state.openedFilter === "dates" ? (
                <Dates
                  startDate={this.state.dates.startDate}
                  endDate={this.state.dates.endDate}
                  onApplyProp={this.onDatesApply}
                  onCancelProp={this.openFilter}
                />
              ) : (
                <Link onClick={() => this.openFilter("dates")}>Dates</Link>
              )}
            </FilterButton>

            <FilterButton>
              {this.state.openedFilter === "guests" ? (
                <Guests
                  adults={this.state.guests.adults}
                  children={this.state.guests.children}
                  infants={this.state.guests.infants}
                  onApplyProp={this.onGuestsApply}
                  onCancelProp={this.openFilter}
                />
              ) : (
                <Link onClick={() => this.openFilter("guests")}>Guests</Link>
              )}
            </FilterButton>
            <FilterButton>
              <Link onClick={() => this.openFilter(null)}>Room type</Link>
            </FilterButton>
            <FilterButton>
              <Link onClick={() => this.openFilter(null)}>Price</Link>
            </FilterButton>
            <FilterButton>
              <Link onClick={() => this.openFilter(null)}>Instant book</Link>
            </FilterButton>
            <FilterButton>
              <Link onClick={() => this.openFilter(null)}>More filters</Link>
            </FilterButton>
          </Wrapper>
        </FluidContainer>
      </FilterWrapper>
    );
  }
}
export default Filter;
