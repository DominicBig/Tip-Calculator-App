import React, { useState, useEffect } from "react";
import "./App.scss";
import logo from "../images/logo.svg";
import InputBlock from "./InputBlock";
import OutPutBlock from "./OutPutBlock";

function App() {
  const [billValue, setBillValue] = useState("");
  const [totalValue, setTotal] = useState("");
  const [tipsValue, setTipsValue] = useState("");

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card">
        <InputBlock
          billValue={billValue}
          totalValue={totalValue}
          setTotal={setTotal}
          setBillValue={setBillValue}
          inputChange={(e) => setBillValue(parseFloat(e.target.value))}
        />
        <OutPutBlock totalValue={totalValue} />
      </div>
    </div>
  );
}

export default App;
