import React from "react";

const Button = ({ styleName, value }) => {

  return <button className={styleName}>{value}</button>;
};

export default Button;
