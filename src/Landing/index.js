import React, { Component } from "react";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservation from "./Reservation";
import Destinations from "./Destinations";
import { MainWrapper } from "../UI/Containers";
import Footer from "../Footer";

const MainWrap = MainWrapper.extend``;

class MainPage extends Component {
  render() {
    return (
      <div>
        <MainWrap>
          <Explore />
          <Experiences />
          <Homes />
          <Reservation />
          <Destinations />
        </MainWrap>
        <Footer />
      </div>
    );
  }
}
export default MainPage;
