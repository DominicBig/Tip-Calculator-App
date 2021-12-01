import React from "react";

const Button = ({ styleName, value, onClick }) => {
  return (
    <button className={styleName} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
