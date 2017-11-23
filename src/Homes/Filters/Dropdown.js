import React from "react";
import styled from "styled-components";

const Filters = styled.div``;

const Button = styled.button`
  padding: 7px 15px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  font: 14px "CircularAir-Book", sans-serif;
  line-height: 16px;
  color: ${props => (props.isPressed ? "#ffffff" : "#383838")};
  background: ${props => (props.isPressed ? "#008489" : "#ffffff")};
  border-radius: 4px;
  cursor: pointer;
  margin-right: 12px;
`;

export const Dropdown = props => (
  <Filters>
    <Button>{props.name}</Button>
  </Filters>
);
