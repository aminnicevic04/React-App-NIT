import "./App.css";
import "./components/Card";
import Card from "./components/Card";

//JSX
function App() {
  const odeljenje = [
    {
      ime: "amin nicevic",
      godine: 2004,
      obrazovanje: "DUNP",
      zanimanje: "React",
    },
    {
      ime: "hasan mujanovic",
      godine: 2005,
      obrazovanje: "DUNP",
      zanimanje: "Angular",
    },
  ];
  return (
    <div className="mainDiv">
      {/* <Card ime={"Amin Nicevic"} obrazovanje={"DUNP"} />
      <Card ime={"Jedan drugi decko"} obrazovanje={"DUNP"} /> */}
      {/* <Card /> */}
      {/* <Card ime={}/> */}
      {odeljenje.map((el) => {
        if (el.godine > 18) {
          return (
            <Card
              ime={el.ime}
              obrazovanje={el.obrazovanje}
              godine={el.godine}
            />
          );
        }
      })}
    </div>
  );
}

export default App;
