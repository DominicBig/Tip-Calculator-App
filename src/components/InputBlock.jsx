import React from "react";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import Button from "./Button";

const InputBlock = ({ billValue, inputChange }) => {
  const buttonClickHandler = (e) => {
    let tipValue = parseFloat(e.target.innerHTML) / 100; // find tips persentage
  };

  return (
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
            value={billValue}
            onChange={inputChange}
          />
          <img src={dollarIcon} alt="dollar icon" />
        </div>
      </div>

      <div className="tips-container">
        <div className="label-wrapper">
          <label htmlFor="inp-tips">Select Tip %</label>
        </div>
        <div className="button-wraper">
          <Button styleName="btn" value="5%" onClick={buttonClickHandler} />
          <Button styleName="btn " value="10%" onClick={buttonClickHandler} />
          <Button
            styleName="btn btn-active"
            value="15%"
            onClick={buttonClickHandler}
          />
          <Button styleName="btn" value="25%" onClick={buttonClickHandler} />
          <Button styleName="btn" value="50%" onClick={buttonClickHandler} />

          <input
            type="text"
            className="inp-text"
            name="inp-tip"
            id="inp-tip"
            placeholder="Custom"
          />
        </div>
      </div>
      <div className="people-container">
        <div className="label-wrapper">
          <label htmlFor="inp-people">Number of People</label>
          <div className="error-msg">Can`t be zero </div>
        </div>
        <div className="inp-wrapper">
          <input
            type="text"
            className="inp-text"
            name="inp-people"
            id="inp-people"
            placeholder="1"
          />
          <img src={personIcon} alt="person icon" />
        </div>
      </div>
    </div>
  );
};

export default InputBlock;
