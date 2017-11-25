import React, { Component } from "react";
import styled from "styled-components";
import { MainWrapper } from "../UI/Containers";
import Pagination from "./Pagination";
import Card from "./Card";
import GoogleMaps from "./Map";
import Filters from "./Filters";
import location from "./location.svg";

const HomesWrapper = MainWrapper.extend`
  margin-top: 139px;
`;

const MapTrigger = styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 24px;
  right: 8px;
  background-color: #fff;
  background-image: url(${location});
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid rgba(72, 72, 72, 0.16);
  border-radius: 50%;
`;

class MainPage extends Component {
  render() {
    return (
      <div>
        <HomesWrapper>
          <Filters />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <Card />
                <Pagination />
              </div>
              <GoogleMaps center={[69.931121, 30.388457]} zoom={9} />
            </div>
          </div>
          <MapTrigger />
        </HomesWrapper>
      </div>
    );
  }
}
export default MainPage;
