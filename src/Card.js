import styled from "styled-components";
import star from "./star.svg";
import React from "react";

export const Img = styled.img`
  margin-bottom: 10px;
`;

export const Card = styled.a.attrs({
  href: "#"
})`
  display: block;
`;

export const CardValue = styled.div`
  line-height: 18px;
  font-family: "CircularAir-Light", sans-serif;
`;

export const Price = styled.span`
  font-family: "CircularAir-Bold", sans-serif;
  margin-right: 5px;
`;

export const Description = styled.p`
  font-family: "CircularAir-Bold", sans-serif;
  margin-top: 4px;
`;

export const Star = styled.img.attrs({
  src: star
})`
  padding-right: 4px;
`;

export const Review = styled.span`
  font-family: "CircularAir-Book", sans-serif;
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
    margin-top: 5px;
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

export const StarsWrapper = props => (
  <Stars>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
  </Stars>
);
