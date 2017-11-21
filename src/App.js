import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Landing} />
    </div>
  </BrowserRouter>
);

export default App;
