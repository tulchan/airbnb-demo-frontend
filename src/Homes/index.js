import React, { Component } from "react";
import styled from "styled-components";
import { MainWrapper } from "../UI/Containers";
import Pagination from "./Pagination";
import Maincards from "./maincards";
import GoogleMaps from "./Map";
import Filters from "./Filters";

const FullPrice = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
`;

const HomesWrapper = MainWrapper.extend`
  margin-top: 139px;
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
                <Maincards />
                <Pagination />
              </div>
              <GoogleMaps center={[69.931121, 30.388457]} zoom={9} />
            </div>
          </div>
        </HomesWrapper>
      </div>
    );
  }
}
export default MainPage;
