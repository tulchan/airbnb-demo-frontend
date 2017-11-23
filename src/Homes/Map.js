import React from "react";
import styled from "styled-components";

import GoogleMap from "google-map-react";

const MapWrapper = styled.div`
  position: fixed;
  top: 133px;
  bottom: 0;
  right: 0;
  left: calc(50% + 171px);
  @media screen and (min-width: 1200px) {
    left: calc(50% + 205px);
  }
`;

const GoogleMaps = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export default function(props) {
  return (
    <MapWrapper>
      <GoogleMaps>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAP_KEY
          }}
          center={props.center}
          zoom={props.zoom}
        />
      </GoogleMaps>
    </MapWrapper>
  );
}
