import React from "react";
import styled from "styled-components";

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 16px;
  color: #383838;
  font-weight: 200;
  margin-left: 12px;
`;

const Description = styled.div`
  font-size: 12px;
  font-family: CircularAir-Light, sans-serif;
  width: 195px;
  line-height: 14px;
  color: #383838;
  font-weight: 200;
  margin-left: 36px;
  margin-top: 2px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export default props => (
  <Option>
    <div>
      <Row>
        <CheckBox />
        <Title>{props.title}</Title>
      </Row>
      <Description>{props.description}</Description>
    </div>
    <Icon src={props.icon} />
  </Option>
);
