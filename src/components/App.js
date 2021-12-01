import React, { useState } from "react";
import "./App.scss";
import logo from "../images/logo.svg";
import InputBlock from "./InputBlock";
import OutPutBlock from "./OutPutBlock";

function App() {
  const [billValue, setBillValue] = useState(0);
  const [totalValue, setTotal] = useState("");
  const [tipsValue, setTipsValue] = useState("");
  const [peopleQty, setPeopleQty] = useState(1);
  const [btnActive, setBtnActive] = useState(false);

  const [tip, setTip] = useState(0.05);

  const peopleChangeHandler = (e) => {
    setPeopleQty(parseFloat(e.target.value));

    let total = ((billValue + tip * billValue) / +peopleQty).toFixed(2); // total amount
    let tips = ((tip * billValue) / peopleQty).toFixed(2); // tips per person amount
    console.log(tip);
    console.log(total);
    console.log(tips);

    setTotal(total);
    setTipsValue(tips);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card">
        <InputBlock
          setTip={setTip}
          billValue={billValue}
          setTipsValue={setTipsValue}
          setTotal={setTotal}
          peopleQty={peopleQty}
          setBillValue={setBillValue}
          setPeopleQty={setPeopleQty}
          btnActive={btnActive}
          setBtnActive={setBtnActive}
          inputChange={(e) => setBillValue(parseFloat(e.target.value))}
          peopleQtyChange={peopleChangeHandler}
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
          }}
        />
      </div>
    </div>
  );
}

export default App;
