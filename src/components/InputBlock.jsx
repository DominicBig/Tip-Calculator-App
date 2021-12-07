import React, { useState, useEffect } from "react";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import Button from "./Button";

const InputBlock = () => {
  const [tipAmount, setTipAmount] = useState("");
  const [total, setTotal] = useState("");
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState();
  const [customTip, setCustomTip] = useState("");
  const [peopleQty, setPeopleQty] = useState(1);

  //validation
  function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
  }

  function validateInt(s) {
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
  }

  //Setting Bill Value
  function setBillValue(e) {
    let bill = e.target.value;
    if (bill.includes(",")) {
      bill = bill.replace(",", ".");
    }

    if (!validateFloat(bill)) {
      bill = bill.substring(0, bill.length - 1);
    }
    setBill(parseFloat(bill));
  }

  //Setting Custom Tip Value
  function setTipCustomValue(e) {
    let customTip = e.target.value;
    if (!validateInt(customTip)) {
      customTip = customTip.substring(0, customTip.length - 1);
    }
    setCustomTip(parseFloat(customTip / 100));
  }

  //Setting People Qty Value
  function setPeopleValue(e) {
    let people = e.target.value;
    if (!validateInt(people)) {
      people = people.substring(0, people.length - 1);
    }
    if (isNaN(people)) {
      people = 1;
    }
    setPeopleQty(parseFloat(people));
  }

  const handleClick = (e) => {
    document
      .querySelectorAll(".btn")
      .forEach((btn) => btn.classList.remove("btn-active"));

    if (e.target.className === "btn") {
      setTip(parseFloat(e.target.innerHTML) / 100); // find tips persentage
      setCustomTip("");
      e.target.className = "btn btn-active";
    }
  };

  useEffect(() => {
    if (customTip) {
      let tipAmount = ((bill * customTip) / peopleQty).toFixed(2);
      let total = ((bill * (customTip + 1)) / peopleQty).toFixed(2);
      setTipAmount(tipAmount);
      setTotal(total);
    } else {
      let tipAmount = ((bill * tip) / peopleQty).toFixed(2);
      let total = ((bill * (tip + 1)) / peopleQty).toFixed(2);
      setTipAmount(tipAmount);
      setTotal(total);
    }
  }, [bill, tip, customTip, peopleQty]);

  const resetHandler = () => {
    setTipAmount("");
    setTotal("");
    setBill("");
    setCustomTip("0");
    setTip();
    setPeopleQty(1);
  };

  return (
    <>
      <div className="input">
        <div className="bill-container">
          <div className="label-wrapper">
            <label htmlFor="inp-bill">Bill</label>
          </div>
          <div className="inp-wrapper">
            <input
              type="text"
              className="inp-text"
              name="inp-bill"
              id="inp-bill"
              placeholder="0.0"
              value={bill}
              onInput={setBillValue}
            />
            <img src={dollarIcon} alt="dollar icon" />
          </div>
        </div>

        <div className="tips-container">
          <div className="label-wrapper">
            <label htmlFor="inp-tips">Select Tip %</label>
          </div>
          <div className="button-wraper" onClick={handleClick}>
            <Button styleName="btn" value="5%" />
            <Button styleName="btn" value="10%" />
            <Button styleName="btn" value="15%" />
            <Button styleName="btn" value="25%" />
            <Button styleName="btn" value="50%" />

            <input
              type="text"
              className="inp-text"
              name="inp-tip"
              id="inp-tip"
              placeholder="Custom"
              value={customTip * 100}
              onInput={setTipCustomValue}
            />
          </div>
        </div>
        <div className="people-container">
          <div className="label-wrapper">
            <label htmlFor="inp-people">Number of People</label>
            {!peopleQty && <div className="error-msg">Can`t be zero</div>}
          </div>
          <div className="inp-wrapper">
            <input
              type="text"
              className="inp-text"
              name="inp-people"
              id="inp-people"
              placeholder="0.0"
              value={peopleQty}
              onInput={setPeopleValue}
            />
            <img src={personIcon} alt="person icon" />
          </div>
        </div>
      </div>
      <div className="output">
        <div className="lines-wrapper">
          <div className="line-output">
            <div className="title-wrapper">
              <div className="title">Tip Amount </div>
              <div className="desc">/ person</div>
            </div>
            <div className="value">$ {tipAmount} </div>
          </div>

          <div className="line-output">
            <div className="title-wrapper">
              <div className="title">Total </div>
              <div className="desc">/ person</div>
            </div>
            <div className="value">$ {total} </div>
          </div>
        </div>
        <Button styleName="btn-reset" value="Reset" onClick={resetHandler} />
      </div>
    </>
  );
};

export default InputBlock;
