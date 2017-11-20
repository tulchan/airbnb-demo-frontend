import styled from "styled-components";

export const Img = styled.img`
  margin-bottom: 10px;
`;

export const Card = styled.a.attrs({
  href: "#"
})``;

export const CardValue = styled.div`
  line-height: 18px;
  font-family: "CircularAir-Light", sans-serif;
`;

export const Price = styled.span`
  font-family: "CircularAir-Bold", sans-serif;
  margin-right: 5px;
`;

export const PriceDescr = styled.span`
  font-family: "CircularAir-Bold", sans-serif;
`;

export const Star = styled.img`
  margin-right: 3px;
  display: inline-block;
`;

export const Review = styled.span`
  font-size: 12px;
  margin-left: 8px;
  vertical-align: middle;
`;

export const ReviewAbout = styled.span`
  &:before {
    content: "·";
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
  }
  &:first-child {
    &:before {
      display: none;
    }
  }
`;

export const Stars = styled.span`
  vertical-align: middle;
`;

export const HouseInfo = styled.div`
  font-family: "CircularAir-Light", sans-serif;
`;

export const HouseType = styled.span`
  &:before {
    content: "·";
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
  }
  &:first-child {
    &:before {
      display: none;
    }
  }
`;

export const InstitutionType = styled.p`
  font: 10px "CircularAir-Bold", sans-serif;
  text-transform: uppercase;
`;

export const InstitutionName = styled.p`
  margin-top: 5px;
  margin-bottom: 2px;
  font: 18px "CircularAir-Bold", sans-serif;
`;

export const PricePerson = styled.p`
  font: 18px "CircularAir-Light", sans-serif;
  @media only screen and (max-width: 400px) {
    font: 12px "CircularAir-Light", sans-serif;
  }
`;

export const City = styled.p`
  font-family: "CircularAir-Bold", sans-serif;
`;
