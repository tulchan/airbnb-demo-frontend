import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Homes from "./Homes";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/homes" component={Homes} />
    </div>
  </BrowserRouter>
);

export default App;
