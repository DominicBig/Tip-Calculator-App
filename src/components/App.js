import React from "react";
import "./App.scss";
import logo from "../images/logo.svg";
import InputBlock from "./InputBlock";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card">
        <InputBlock />
      </div>
    </div>
  );
}

export default App;
