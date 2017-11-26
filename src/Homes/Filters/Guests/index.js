import React from "react";
import styled from "styled-components";
import Option from "./Option";

const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 14px;
  padding-top: 13px;
  padding-bottom: 16px;
`;

const Infants = styled.div`
  padding-top: 5px;
`;

export default props => (
  <Wrapper>
    <Option title="Adults" />
    <Option title="Children" note="Ages 2 — 12" />
    <Infants>
      <Option title="Infants" note="Under 2" />
    </Infants>
  </Wrapper>
);
