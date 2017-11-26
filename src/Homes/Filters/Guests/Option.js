import React from "react";
import styled from "styled-components";
import minus from "./minus.svg";
import plus from "./plus.svg";

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin-top: 18px;
`;

const Title = styled.div`
  line-height: normal;
  font-size: 20px;
  color: #383838;
`;

const Note = styled.div`
  font-family: CircularAir-Light, sans-serif;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
  margin-top: 7px;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.img`
  cursor: pointer;
`;

const Number = styled.div`
  font-family: CircularAir-Light, sans-serif;
  font-size: 18px;
  color: #383838;
  font-weight: 200;
  padding: 0px 19px;
`;

export default props => (
  <Option>
    <div>
      <Title>{props.title}</Title>
      {props.note && <Note>{props.note}</Note>}
    </div>
    <Options>
      <Button src={minus} />
      <Number>0</Number>
      <Button src={plus} />
    </Options>
  </Option>
);
