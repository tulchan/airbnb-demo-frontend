import React, { Component } from "react";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservation from "./Reservation";
import Destinations from "./Destinations";
import { MainWrapper } from "../UI/Containers";
import Footer from "../Footer";

const LandingWrapper = MainWrapper.extend`
  margin-top: 80px;
`;

class MainPage extends Component {
  render() {
    return (
      <div>
        <LandingWrapper>
          <Explore />
          <Experiences />
          <Homes />
          <Reservation />
          <Destinations />
        </LandingWrapper>
        <Footer />
      </div>
    );
  }
}
export default MainPage;
