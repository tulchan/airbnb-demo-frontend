import React from "react";
import styled from "styled-components";
import Responsive from "react-responsive";

export const Md = props => <Responsive {...props} minWidth={1124} />;
export const Sm = props => (
  <Responsive {...props} minWidth={768} maxWidth={1124} />
);
export const Xs = props => <Responsive {...props} maxWidth={767} />;
