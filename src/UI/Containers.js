import styled from "styled-components";

export const MainWrapper = styled.section``;

export const Container = styled.div`
  width: 976px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 400px) {
    width: 640px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1184px;
    max-width: 100%;
  }
`;

export const FluidContainer = styled.div`
  width: 976px;
  max-width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 8px;
  padding-left: 8px;
  @media only screen and (max-width: 400px) {
    width: 640px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1184px;
    max-width: 100%;
  }
`;

export const ScrollContainer = styled.div`
  width: 976px;
  max-width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 8px;
  padding-left: 8px;
  position: relative;
  @media only screen and (max-width: 400px) {
    width: 640px;
  }
  @media only screen and (max-width: 1000px) {
    overflow-x: scroll;
  }
  @media only screen and (min-width: 1200px) {
    width: 1184px;
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
