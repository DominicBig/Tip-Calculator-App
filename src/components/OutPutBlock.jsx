import React from "react";
import Button from "./Button";

const OutPutBlock = ({ totalValue, tipsValue, resetHandler, peopleQty }) => {
  return (
    <div className="output">
      <div className="lines-wrapper">
        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Tip Amount </div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">$ {peopleQty && tipsValue}</div>
        </div>

        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Total </div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">$ {peopleQty && totalValue}</div>
        </div>
      </div>
      <Button styleName="btn-reset" value="Reset" onClick={resetHandler} />
    </div>
  );
};

export default OutPutBlock;
