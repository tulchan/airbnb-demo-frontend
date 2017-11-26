import React from "react";
import styled from "styled-components";
import { DropDown } from "./DropDown";
import Dates from "./Dates";
import Guests from "./Guests";
import RoomType from "./RoomType";
import Price from "./Price";
import InstantBook from "./InstantBook";

export const Filters = styled.div`
  padding: 12px 0;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: white;
  top: 80px;
  display: flex;
`;

export const DesktopButtons = styled.div`
  display: inherit;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 80px;
  display: flex;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  height: 57px;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <Filters>
          <DropDown name="Dates">
            <Dates />
          </DropDown>
          <DropDown name="Guests">
            <Guests />
          </DropDown>
          <DesktopButtons>
            <DropDown name="Room type">
              <RoomType />
            </DropDown>
            <DropDown name="Price">
              <Price />
            </DropDown>
            <DropDown name="Instant book">
              <InstantBook />
            </DropDown>
          </DesktopButtons>
          <DropDown name="More filters" />
        </Filters>
      </div>
    </Wrapper>
  );
}
