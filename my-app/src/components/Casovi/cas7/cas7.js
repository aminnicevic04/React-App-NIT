import { useState } from "react";
import Products from "./Products";

function Cas7() {
  const [randomNumber, setRandomNumber] = useState();
  const [products, setProducts] = useState([
    { name: "Adidas", price: 200, inCart: false },
    { name: "Puma", price: 190, inCart: false },
    { name: "Nike", price: 120, inCart: false },
    { name: "Jordan", price: 300, inCart: false },
  ]);

  const inCartProducts = products.filter((product) => product.inCart);
  return (
    <div style={{ textAlign: "center" }}>
      {inCartProducts.length > 0 ? (
        inCartProducts.map((product) => (
          <Products ime={product.name} cena={product.price} />
        ))
      ) : (
        <h1>Nemate proizvoda u korpi</h1>
      )}

      <button
        onClick={() =>
          setProducts((prev) => [
            ...prev,
            (prev[2] = { ...prev[2], inCart: true }),
          ])
        }
      >
        Dodaj u korpu
      </button>
    </div>
  );
}

export default Cas7;
// es7
