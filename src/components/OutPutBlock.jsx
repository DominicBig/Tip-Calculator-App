import React from "react";
import Button from "./Button";

const OutPutBlock = () => {
  return (
    <div className="output">
      <div className="lines-wrapper">
        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Tip Amount </div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">$4.27</div>
        </div>

        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Total </div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">$32.77</div>
        </div>
      </div>
      <Button styleName="btn-reset" value="Reset" />
    </div>
  );
};

export default OutPutBlock;
