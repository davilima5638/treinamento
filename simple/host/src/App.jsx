import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";
import Main from "main/Main";

import "./index.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
