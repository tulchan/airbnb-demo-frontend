import styled from "styled-components";
import React from "react";
import { Card } from "../../Cards";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;

  overflow: hidden;
  flex-direction: column;
  align-items: left;
  @media only screen and (min-width: 400px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const Categories = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 78px;
  object-fit: cover;
  @media only screen and (min-width: 400px) {
    width: 96px;
    height: 72px;
  }
`;

export const CardValue = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: left;
  }
`;

export const Paragraph = styled.p`
  font: 17px "CircularAir-Bold";
  color: #383838;
  margin-left: 12px;
  margin-top: 24px;
  margin-bottom: 24px;
  @media only screen and (min-width: 400px) {
    margin-left: 24px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default props => (
  <Card href={props.to}>
    <CardValue>
      <Img src={props.img} alt="Homes" />
      <Paragraph>{props.title}</Paragraph>
    </CardValue>
  </Card>
);
