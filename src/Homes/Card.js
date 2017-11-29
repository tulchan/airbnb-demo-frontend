import React from "react";
import CardWrapper from "./styled";
import image1 from "./homescard1.png";
import image2 from "./homescard2.png";
import image3 from "./homescard3.png";
import image4 from "./homescard4.png";
import image5 from "./homescard5.png";
import image6 from "./homescard6.png";

export default () => (
  <div className="row">
    <div className="col-xs-12 col-sm-6">
      <CardWrapper
        img={image1}
        description="La Salentina, see, nature & relax"
        price={82}
        houseType="Entire house"
        beds="9 beds"
        reviews={97}
        review="Superhost"
      />
    </div>
    <div className="col-xs-12 col-sm-6">
      <CardWrapper
        img={image2}
        description="Your private 3 bedr, riad and exclusive"
        price={82}
        houseType="Entire house"
        beds="5 beds"
        reviews={161}
        review="Superhost"
      />
    </div>
    <div className="col-xs-12 col-sm-6">
      <CardWrapper
        img={image3}
        description="Dreamy Tropical Tree House"
        price={200}
        houseType="Entire treehouse"
        beds="1 bed"
        reviews={364}
        review="Superhost"
      />
    </div>
    <div className="col-xs-12 col-sm-6">
      <CardWrapper
        img={image1}
        description="Best location old town luxury loft"
        price={110}
        houseType="Entire apartment"
        beds="1 bed"
        reviews={369}
        review="Superhost"
      />
    </div>
    <div className="col-xs-12 col-sm-6">
      <CardWrapper
        img={image2}
        description="Lussuosom Vista incantevole"
        price={83}
        houseType="Entire apartment"
        beds="6 beds"
        reviews={105}
        review="Superhost"
      />
    </div>
    <div className="col-xs-12 col-sm-6">
      <CardWrapper
        img={image3}
        description="In the historical center of Lecce"
        price={72}
        houseType="Entire house"
        beds="3 beds"
        reviews={221}
        review="Superhost"
      />
    </div>
  </div>
);
