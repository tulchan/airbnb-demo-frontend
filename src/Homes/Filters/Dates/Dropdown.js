import React from "react";
import styled from "styled-components";

const Filter = styled.div`
  display: ${props => (props.hiddenXs ? "none" : "block")};
  @media screen and (min-width: 767px) {
    display: block;
  }
`;

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

const ModalWrapper = styled.div`
  top: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  background: #fff;
  position: relative;
  height: calc(100% - 18px);
  width: 100%;
  display: ${props => (props.isActive ? "block" : "none")};
  @media screen and (min-width: 767px) {
    height: inherit;
    width: inherit;
    position: absolute;
  }
`;

export const Dropdown = props => (
  <Filter hiddenXs={props.hiddenXs}>
    <Button isPressed={props.isActive} onClick={props.onClick}>
      {props.isActive ? props.activeName : props.name}
    </Button>
    <ModalWrapper isActive={props.isActive}>
      {props.isActive && props.children}
    </ModalWrapper>
  </Filter>
);
