import React, { useEffect, useState } from "react";
import KarticaDomaci from "./KarticaDomaci";
import "./style.css";

function Cas11() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setcategory] = useState("");

  const getData = () => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((products) => setData(products.products));
  };
  const getDataByCategories = () => {
    fetch(`https://dummyjson.com/products/category/${category}`).then((res) =>
      res.json()
    );
    // .then((products) => setData(products.products));
  };

  useEffect(() => {
    getData();
    // getDataByCategories();
  }, []);

  console.log(data, "DATTA");
  console.log(search, "SEARCH");

  return (
    <div className="container">
      <div className="searchWrapper">
        <input
          placeholder="Search..."
          className="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          onClick={getData}
          src="search-svgrepo-com.svg"
          height={30}
          width={30}
        />
      </div>

      <div className="cardWrapper">
        {/* <KarticaDomaci />
        <KarticaDomaci /> */}
        {data.map((product) => (
          //   <KarticaDomaci
          //     title={product.title}
          //     brand={product.brand}
          //     category={product.category}
          //     description={product.description}
          //     key={product.id}
          //   />
          <KarticaDomaci product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Cas11;
