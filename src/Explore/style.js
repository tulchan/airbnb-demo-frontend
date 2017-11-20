import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled.img`
  width: 96px;
  height: 72px;
  @media only screen and (max-width: 400px) {
    width: auto;
    height: auto ${""};
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

export const Paragraph = styled.div`
  margin-left: 24px;
  @media only screen and (max-width: 400px) {
    margin-left: 12px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
