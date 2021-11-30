import React, { useState, useEffect } from "react";
import "./App.scss";
import logo from "../images/logo.svg";
import InputBlock from "./InputBlock";
import OutPutBlock from "./OutPutBlock";

function App() {
  const [billValue, setBillValue] = useState("");
  console.log(billValue);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card">
        <InputBlock
          billValue={billValue}
          setBillValue={setBillValue}
          inputChange={(e) => setBillValue(e.target.value)}
        />
        <OutPutBlock billValue={billValue} />
      </div>
    </div>
  );
}

export default App;
