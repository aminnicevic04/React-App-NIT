import React from "react";
import "./artikl.css";
const Artikl = ({ images, brand, title, category, description, price }) => {
  return (
    <div className="artikli">
      <img src={images[0]}></img>
      <h1>
        <label>Brand: </label>
        {brand}
      </h1>
      <h1>
        <label>Category: </label>
        {category}
      </h1>
      <h1>
        <label>Description: </label>
        {description}
      </h1>
      <h1>
        <label>Price: </label>
        {price}$
      </h1>
    </div>
  );
};

export default Artikl;
