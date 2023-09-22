import "./App.css";
// import Card from "./components/Card/Card";
import React, { useState, useTransition } from "react";

//JSX
function App() {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [godiste, setGodiste] = useState("");
  const [zanimanje, setZanimanje] = useState("");

  const handleSubmit = () => {
    const objekat = {
      Ime: ime,
      Prezime: prezime,
      Godiste: godiste,
      Zanimanje: zanimanje,
    };
    console.log(objekat);
  };

  return (
    <div className="main">
      <div className="forma">
        <input
          placeholder="Ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        ></input>
        <input
          placeholder="Prezime"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
        ></input>
        <input
          placeholder="Godiste"
          value={godiste}
          onChange={(e) => setGodiste(e.target.value)}
        ></input>
        <input
          placeholder="Zanimanje"
          value={zanimanje}
          onChange={(e) => setZanimanje(e.target.value)}
        ></input>
        <div className="btn">
          <button onClick={handleSubmit}>submit</button>
        </div>
      </div>
    </div>
  );
}
//use state sluzi da bi cuvali neko stanje koje cemo da menjamo
// forma ime prezime god i button submit na submit da console loga taj objekat radi se preko state defualt value prazan string za sve
// 2 konzologas ceo obj i vidi dal ispisuje na svki klik ako ispisuje izbegni trebace drugi statovi

export default App;
