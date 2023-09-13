import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="kartica">
      <h1>Amin Nicevic</h1>
      <p>React Developer</p>
      <div className="describe">
        <p>+381291923</p>
        <p>linkedIn: Amin Nicevic</p>
        <p>github: Amin Nicevic</p>
      </div>
    </div>
  );
}

export default Card;
