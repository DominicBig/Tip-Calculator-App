import React from "react";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import Button from "./Button";

const InputBlock = (props) => {
  const {
    billValue,
    inputChange,
    peopleQty,
    setTip,
    peopleQtyChange,
    //setBtnActive,
    btnActive,
  } = props;

  const buttonClickHandler = (e) => {
    setTip(parseFloat(e.target.innerHTML) / 100); // find tips persentage
    //setBtnActive(true);
    e.currentTarget.className = "btn btn-active";
    // setBtnActive(false);
    // e.currentTarget.className = "btn ";

    // Need to work on Active styled button
    //Add logic to custom tip%
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
          <Button
            styleName={btnActive ? "btn btn-active" : "btn"}
            value="5%"
            onClick={buttonClickHandler}
          />
          <Button styleName="btn" value="10%" onClick={buttonClickHandler} />
          <Button styleName="btn" value="15%" onClick={buttonClickHandler} />
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
          {peopleQty <= 0 && <div className="error-msg">Can`t be zero</div>}
        </div>
        <div className="inp-wrapper">
          <input
            type="number"
            className="inp-text"
            name="inp-people"
            id="inp-people"
            value={+peopleQty}
            onChange={peopleQtyChange}
          />
          <img src={personIcon} alt="person icon" />
        </div>
      </div>
    </div>
  );
};

export default InputBlock;
