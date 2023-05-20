import React from "react";
import "./input.css";

const Input = ({ placeholder, color, label }) => {
  return (
    <div className="inputBox">
      <label>{label}</label>
      <br></br>
      <input
        type="text"
        placeholder={placeholder}
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default Input;
