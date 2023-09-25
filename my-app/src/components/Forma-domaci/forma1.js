import Output from "./Output";
import "./forma1.css";
import React, { useState } from "react";

function Forma1() {
  const [selectedOption, setSelectedOption] = useState("da");

  return (
    <div className="login">
      <h2>Unesite podatke</h2>
      <form>
        <div className="user">
          <input type="text" id="txt" />
          <label for="txt">Ime i prezime</label>
        </div>
        <div className="password">
          <input type="number" id="pass" />
          <label for="pass">Godine</label>
        </div>
        <div className="user">
          <input type="text" id="pass" />
          <label for="pass">Grad</label>
        </div>
        <div className="user">
          <input type="text" id="pass" />
          <label for="pass">Hobi</label>
        </div>
        <div className="checkbox">
          <p>Zauzet?</p>
          <div className="child-checkbox">
            <label>
              <input
                type="radio"
                value="da"
                checked={selectedOption === "da"}
                onChange={() => setSelectedOption("da")}
              />
              <p>Da</p>
            </label>
            <label>
              <input
                type="radio"
                value="ne"
                checked={selectedOption === "ne"}
                onChange={() => setSelectedOption("ne")}
              />
              <p>Ne</p>
            </label>
          </div>
        </div>
        <div className="button">
          <a className="submit" href="#">
            Submit
          </a>
        </div>
      </form>
      <Output />
    </div>
  );
}

export default Forma1;
