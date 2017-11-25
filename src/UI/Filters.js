import React from "react";
import styled from "styled-components";
import iconMinus from "./minus.svg";
import iconPlus from "./plus.svg";

const Trigger = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${props => (props.minus ? "#008489" : "#008489")};
  border-radius: 50%;
  background-position: center;
  background-size: 10px;
  background-repeat: no-repeat;
  background-color: #ffff;
  background-image: url(${props => (props.minus ? iconMinus : iconPlus)});
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 114px;
  font-size: 18px;
  font-weight: 300;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 22px;
  line-height: 16px;
  text-align: center;
  color: #000;
`;

const Counter = props => {
  const increase = () => {
    props.onChange(props.value + 1, props.id);
  };

  const decrease = () => {
    props.onChange(props.value > 0 ? props.value - 1 : 0, props.id);
  };

  return (
    <Row>
      <Trigger minus onClick={decrease} />
      {props.value}
      <Trigger onClick={increase} />
    </Row>
  );
};

export default Counter;
