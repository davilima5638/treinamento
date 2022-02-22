import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from 'nav/Header'


import Main from "./Main";
const App = () => (
  <div className="container">
    <Header/>
    <Main />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
