import React from "react";
import styled from "styled-components";
import { Card } from "../Cards";
import image1 from "./explore1.png";
import image2 from "./explore2.png";
import image3 from "./explore3.png";
import { Wrapper, Img, CardValue, Paragraph } from "./style";

export default function() {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-xs-4">
          <Card>
            <CardValue>
              <Img src={image1} alt="Homes" />
              <Paragraph>Homes</Paragraph>
            </CardValue>
          </Card>
        </div>
        <div className="col-xs-4">
          <Card>
            <CardValue>
              <Img src={image2} alt="Experiences" />
              <Paragraph>Experiences</Paragraph>
            </CardValue>
          </Card>
        </div>
        <div className="col-xs-4">
          <Card>
            <CardValue>
              <Img src={image3} alt="Restaurants" />
              <Paragraph>Restaurants</Paragraph>
            </CardValue>
          </Card>
        </div>
      </div>
    </Wrapper>
  );
}
