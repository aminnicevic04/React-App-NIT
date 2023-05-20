import React from "react";
import "./button.css";

const Button = ({ text, color }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn1">
      {text}
    </button>
  );
};

export default Button;
