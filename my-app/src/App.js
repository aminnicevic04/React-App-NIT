import "./App.css";
// import Card from "./components/Card/Card";
import React, { useState, useTransition } from "react";

//JSX
function App() {
  // const odeljenje = [
  // {
  //   ime: "Ahmed",
  //   prezime: "Hasanovic",
  //   redniBroj: 1,
  //   vladanje: "odlicno",
  //   uspeh: "4.5",
  // },
  // {
  //   ime: "Jovan",
  //   prezime: "Petrovic",
  //   redniBroj: 2,
  //   vladanje: "odlicno",
  //   uspeh: "3.7",
  // },
  // {
  //   ime: "Lejla",
  //   prezime: "Dizdarevic",
  //   redniBroj: 3,
  //   vladanje: "odlicno",
  //   uspeh: "5.0",
  // },
  // {
  //   ime: "Ana",
  //   prezime: "Markovic",
  //   redniBroj: 4,
  //   vladanje: "vrlodobro",
  //   uspeh: "3.3",
  // },
  // {
  //   ime: "Amir",
  //   prezime: "Begovic",
  //   redniBroj: 5,
  //   vladanje: "odlicno",
  //   uspeh: "5.0",
  // },
  // {
  //   ime: "Maja",
  //   prezime: "Ivanovic",
  //   redniBroj: 6,
  //   vladanje: "vrlodobro",
  //   uspeh: "4.1",
  // },
  // {
  //   ime: "Nikola",
  //   prezime: "Stojanovic",
  //   redniBroj: 7,
  //   vladanje: "dobro",
  //   uspeh: "3.9",
  // },
  // {
  //   ime: "Stefan",
  //   prezime: "Stojanovic",
  //   redniBroj: 8,
  //   vladanje: "dobro",
  //   uspeh: "3.2",
  // },
  // {
  //   ime: "Fatima",
  //   prezime: "Mehic",
  //   redniBroj: 9,
  //   vladanje: "odlicno",
  //   uspeh: "5.0",
  // },
  // {
  //   ime: "Jovana",
  //   prezime: "Djordjevic",
  //   redniBroj: 10,
  //   vladanje: "odlicno",
  //   uspeh: "4.7",
  // },
  // {
  //   ime: "Haris",
  //   prezime: "Suljic",
  //   redniBroj: 11,
  //   vladanje: "vrlodobro",
  //   uspeh: "4.3",
  // },
  // {
  //   ime: "Samir",
  //   prezime: "Avdic",
  //   redniBroj: 12,
  //   vladanje: "vrlodobro",
  //   uspeh: "4.1",
  // },
  // {
  //   ime: "Katarina",
  //   prezime: "Pavlovic",
  //   redniBroj: 13,
  //   vladanje: "odlicno",
  //   uspeh: "4.9",
  // },
  // {
  //   ime: "Dzevad",
  //   prezime: "Mujanovic",
  //   redniBroj: 14,
  //   vladanje: "dobar",
  //   uspeh: "3.1",
  // },
  // {
  //   ime: "Ivan Stevanovic",
  //   prezime: "Simic",
  //   redniBroj: 15,
  //   vladanje: "odlicno",
  //   uspeh: "4.5",
  // },
  // {
  //   ime: "Selma",
  //   prezime: "Omeragic",
  //   redniBroj: 16,
  //   vladanje: "odlicno",
  //   uspeh: "4.9",
  // },
  // {
  //   ime: "Katarina",
  //   prezime: "Pavlovic",
  //   redniBroj: 17,
  //   vladanje: "vrlodobro",
  //   uspeh: "4.4",
  // },
  // {
  //   ime: "Marija",
  //   prezime: "Popovic",
  //   redniBroj: 18,
  //   vladanje: "vrlodobro",
  //   uspeh: "4.1",
  // },
  // {
  //   ime: "Djordje",
  //   prezime: "Lukic",
  //   redniBroj: 19,
  //   vladanje: "vrlodobro",
  //   uspeh: "3.9",
  // },
  // {
  //   ime: "Lejla",
  //   prezime: "Ibrahimovic",
  //   redniBroj: 20,
  //   vladanje: "vrlodobro",
  //   uspeh: "4.1",
  // },
  // {
  //   ime: "Adnan",
  //   prezime: "Durakovic",
  //   redniBroj: 21,
  //   vladanje: "odlicno",
  //   uspeh: "4.5",
  // },
  // ];

  // let myNumber = 9;
  // const [mojBroj, setMojBroj] = useState(3);
  // console.log("promena");

  // const [prviString, setPrviString] = useState("");
  // const [drugiString, setDrugiString] = useState("");
  // const [treciString, setTreciString] = useState("");
  // const [cetvrtiString, setCetvrtiString] = useState("");

  const [inputValue, setInputValue] = useState("");
  const [djak, setDjak] = useState("Mehmed");

  const [brojevi, setBroj] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10]);
  const [noviBroj, setNoviBroj] = useState("");
  console.log(brojevi);

  return (
    // <div className="mainDiv">
    //   {odeljenje.map((el) => {
    //     return (
    //       <Card
    //         ime={el.ime}
    //         prezime={el.prezime}
    //         vladanje={el.vladanje}
    //         uspeh={el.uspeh}
    //         redniBroj={el.redniBroj}
    //       />
    //     );
    //   })}
    // </div>
    // <>
    //   {" "}
    //   <button onClick={() => setMojBroj((prev) => prev - 5)}>-5</button>
    //   <button onClick={() => setMojBroj((prev) => prev - 1)}>-1</button>
    //   <div className="container">
    //     {mojBroj}
    //     <button onClick={() => setMojBroj((prev) => prev + 1)}>+1</button>
    //     <button onClick={() => setMojBroj((prev) => prev + 5)}>+5</button>
    //   </div>
    // </>

    <div className="main">
      {/* <div className="btns">
        <button
          onClick={() => setPrviString((prev) => prev + "ovo ")}
          first
          click
        >
          first click
        </button>
        <button onClick={() => setDrugiString((prev) => prev + "je ")}>
          second click
        </button>
        <button onClick={() => setTreciString((prev) => prev + "IT ")}>
          third click
        </button>
        <button onClick={() => setCetvrtiString((prev) => prev + "kamp")}>
          {" "}
          fourth click
        </button>
      </div>
      <div className="outputs">
        <div className="first">{prviString}</div>
        <div className="second">{drugiString}</div>
        <div className="third">{treciString}</div>
        <div className="fourth">{cetvrtiString}</div>
      </div> */}
      {/* <input
        type="text"
        value={djak}
        onChange={(e) => setDjak(e.target.value)}
      ></input>\q
      <button onClick={() => alert(`cao ${djak}`)}>Hello</button> */}
      {/* <input
        placeholder="dodaj broj"
        value={noviBroj}
        onChange={(e) => setNoviBroj(e.target.value)}
      ></input> */}
      <input
        placeholder="dodaj broj"
        value={noviBroj}
        onChange={(e) => setNoviBroj(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setBroj((prev) => [...prev, noviBroj]);
          setNoviBroj();
        }}
      >
        Dodaj broj
      </button>
    </div>
  );
}
//use state sluzi da bi cuvali neko stanje koje cemo da menjamo
// forma ime prezime god i button submit na submit da console loga taj objekat radi se preko state defualt value prazan string za sve
// 2 konzologas ceo obj i vidi dal ispisuje na svki klik ako ispisuje izbegni trebace drugi statovi

export default App;
