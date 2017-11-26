import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import price from "./price.png";
import Option from "./Option";

export default props => (
  <Option
    money="$10 — $1000+"
    subInfo="The average nightly price is $75."
    img={price}
    min={10}
    max={1000}
    values={[10, 999]}
  />
);
