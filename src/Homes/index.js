import React, { Component } from "react";
import styled from "styled-components";
import { MainWrapper } from "../UI/Containers";
import Filters from "./Filter";
import Cards from "./Cards";
import MyMap from "./Map";
import Pagination from "./Pagination";
import locationIcon from "./location.svg";

const Hint = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
`;

const MapTrigger = styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 24px;
  right: 8px;
  background-color: #fff;
  background-image: url(${locationIcon});
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid rgba(72, 72, 72, 0.16);
  border-radius: 50%;
`;

const MainWrap = MainWrapper.extend`
  margin-top: 139px;
`;

class MainPage extends Component {
  render() {
    return (
      <div>
        <MainWrap>
          <Filters />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <Cards />
                <Pagination />
                <Hint>
                  Enter dates to see full pricing. Additional fees apply. Taxes
                  may be added.
                </Hint>
              </div>
              <MyMap center={[69.931121, 30.388457]} zoom={9} />
            </div>
          </div>
          <MapTrigger />
        </MainWrap>
      </div>
    );
  }
}
export default MainPage;
