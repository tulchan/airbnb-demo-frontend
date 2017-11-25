import React from "react";
import styled from "styled-components";
import Pagetoright from "./pagetoright.svg";

const Wrapper = styled.section`
  display: block;
  text-align: center;
  margin-top: 26px;
  margin-bottom: 40px;
  align-items: center;
  font-size: 16px;
`;

const Page = styled.a`
  width: 32px;
  height: 32px;
  display: inline-block;
  margin: 0 6px;
  color: #0f7276;
  font-size: 16px;
  line-height: 32px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
`;

const FirstPage = Page.extend`
  background: #0f7276;
  color: #fff;
`;

const NextPage = Page.extend`
  background-color: #fff;
  background-image: url(${Pagetoright});
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #0f7276;
`;

const PageWrapper = styled.div`
  margin-bottom: 15px;
`;

export const FullPrice = styled.div`
  text-align: center;
  font-size: 16px;
`;
export const Paragraph = styled.p`
  font-family: "CircularAir-Book", sans-serif;
  color: #636363;
  margin-top: 35px;
`;

const Rentals = styled.span`
  font-family: "CircularAir-Book", sans-serif;
  font-size: 16px;
  color: #383838;
`;

export default props => (
  <Wrapper>
    <PageWrapper>
      <FirstPage>1</FirstPage>
      <Page>2</Page>
      <Page>3</Page>
      <Page>...</Page>
      <Page>17</Page>
      <NextPage />
    </PageWrapper>
    <FullPrice>
      <Rentals>1 – 18 of 300+ Rentals</Rentals>
      <Paragraph>
        Enter dates to see full pricing. Additional fees apply. Taxes may be
        added.
      </Paragraph>
    </FullPrice>
  </Wrapper>
);
