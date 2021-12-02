import React, { useState } from "react";
import "./App.scss";
import logo from "../images/logo.svg";
import InputBlock from "./InputBlock";
import OutPutBlock from "./OutPutBlock";

function App() {
  const [billValue, setBillValue] = useState("");
  const [totalValue, setTotal] = useState("");
  const [tipsValue, setTipsValue] = useState("");
  const [peopleQty, setPeopleQty] = useState("");
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(null);

  const inputChangeHandler = (e) => {
    setBillValue(parseFloat(e.target.value));
  };

  const peopleChangeHandler = (e) => {
    setPeopleQty(parseFloat(e.target.value));

    let tips = ((tip * billValue) / peopleQty).toFixed(2); // tips per person amount
    let total = ((billValue + +tips) / peopleQty).toFixed(2); // total amount
    setTotal(total);
    setTipsValue(tips);
  };
  const customTipsValueHandler = (e) => {
    if (e.target.value !== "") {
      setTip(parseFloat(e.target.value) / 100);
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card">
        <InputBlock
          billValue={billValue}
          peopleQty={peopleQty}
          setTip={setTip}
          inputChange={inputChangeHandler}
          peopleQtyChange={peopleChangeHandler}
          customTipsChange={customTipsValueHandler}
        />
        <OutPutBlock
          totalValue={totalValue}
          tipsValue={tipsValue}
          peopleQty={peopleQty}
          resetHandler={() => {
            setBillValue("");
            setTotal("");
            setTipsValue("");
            setPeopleQty(0);
            setCustomTip(null);
          }}
        />
      </div>
    </div>
  );
}

export default App;
