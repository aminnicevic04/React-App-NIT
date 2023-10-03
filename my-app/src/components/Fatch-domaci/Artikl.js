import React from "react";

const Artikl = ({ images, brand, title, category, description, price }) => {
  return (
    <div>
      <img src={images[0]}></img>
      <h1>{brand}</h1>
      <h1>{title}</h1>
      <h1>{category}</h1>
      <h1>{description}</h1>
      <h1>{price}</h1>
    </div>
  );
};

export default Artikl;
