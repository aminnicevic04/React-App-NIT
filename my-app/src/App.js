import React, { useState } from "react";
import "./App.css";
import Cas6 from "./components/Casovi/cas6/cas6";
// import Card from "./components/Card/Card";
import Forma1 from "./components/Forma-domaci/forma1";
import Cas7 from "./components/Casovi/cas7/cas7";
import Cas8 from "./components/Casovi/cas8/Cas8";
import Main from "./components/Cond.Rend-domaci/main";
import Fatch from "./components/Fetch-domaci/Fatch";
import Cas9 from "./components/Casovi/cas9/cas9";
import Cas10 from "./components/Casovi/cas10/Cas10";
import Search from "./components/Search.Bar-doamci/Search";
import Cas11 from "./components/Casovi/cas11/cas11";
import Cas12 from "./components/Casovi/cas12/cas12";
import Cas13 from "./components/Casovi/cas13/Cas13";
import Blog from "./components/Blog-domaci/Blog";
import Cas15 from "./components/Casovi/cas15/Cas15";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";

//JSX
function App() {
  // const [ime, setIme] = useState("");
  // const [prezime, setPrezime] = useState("");
  // const [godiste, setGodiste] = useState("");
  // const [zanimanje, setZanimanje] = useState("");

  // const [cards, setCards] = useState([]);

  // const handleSubmit = () => {
  //   const objekat = {
  //     Ime: ime,
  //     Prezime: prezime,
  //     Godiste: godiste,
  //     Zanimanje: zanimanje,
  //   };
  //   console.log(objekat);
  // };

  // const addCard = (data) => {
  //   setCards((prevState) => {
  //     return [...prevState, data];
  //   });
  // };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <>
    //   <Blog></Blog>
    // </>
    // <>
    //   <Cas13></Cas13>
    // </>
    // <>
    //   <Cas12></Cas12>
    // </>
    // <>
    //   <Cas11 />
    // </>
    // <>
    //   <Search />
    // </>
    // <>
    //   <Cas10></Cas10>
    // </>
    // <>
    //   <Cas9></Cas9>
    // </>
    // <>
    //   <Fatch></Fatch>
    // </>
    // <>
    //   <Cas8></Cas8>
    // </>
    // <>
    //   <Main></Main>
    // </>
    // <>
    //   <Cas7></Cas7>
    // </>
    // <div className="main">
    //   <Cas6 />
    // </div>
    // <>
    //   <Forma1 addCard={addCard} cards={cards} />
    // </>

    // <div className="main">
    //   <div className="forma">
    //     <input
    //       placeholder="Ime"
    //       value={ime}
    //       onChange={(e) => setIme(e.target.value)}
    //     ></input>
    //     <input
    //       placeholder="Prezime"
    //       value={prezime}
    //       onChange={(e) => setPrezime(e.target.value)}
    //     ></input>
    //     <input
    //       placeholder="Godiste"
    //       value={godiste}
    //       onChange={(e) => setGodiste(e.target.value)}
    //     ></input>
    //     <input
    //       placeholder="Zanimanje"
    //       value={zanimanje}
    //       onChange={(e) => setZanimanje(e.target.value)}
    //     ></input>
    //     <div className="btn">
    //       <button onClick={handleSubmit}>submit</button>
    //     </div>
    //   </div>
    // </div>
  );
}
//use state sluzi da bi cuvali neko stanje koje cemo da menjamo
// forma ime prezime god i button submit na submit da console loga taj objekat radi se preko state defualt value prazan string za sve
// 2 konzologas ceo obj i vidi dal ispisuje na svki klik ako ispisuje izbegni trebace drugi statovi

export default App;
