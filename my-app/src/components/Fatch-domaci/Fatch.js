import React, { useState } from "react";
function Fatch() {
  const getData = () =>
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log());

  return (
    <div>
      <button onClick={getData}>Uzmi podatke</button>
    </div>
  );
}

export default Fatch;
