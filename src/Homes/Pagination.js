import React from "react";
import styled from "styled-components";
import Paginationarrow from "./pagetoright.svg";

const Pagination = styled.section`
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
  background-image: url(${Paginationarrow});
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
  margin-top: 20px;
`;

export default props => (
  <Pagination>
    <PageWrapper>
      <FirstPage>1</FirstPage>
      <Page>2</Page>
      <Page>3</Page>
      <Page>...</Page>
      <Page>17</Page>
      <NextPage />
    </PageWrapper>
    <FullPrice>
      <span>1 – 18 of 300+ Rentals</span>
      <Paragraph>
        Enter dates to see full pricing. Additional fees apply. Taxes may be
        added.
      </Paragraph>
    </FullPrice>
  </Pagination>
);
