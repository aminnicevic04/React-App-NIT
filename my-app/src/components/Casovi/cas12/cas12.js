import React, { useEffect, useState } from "react";
import axios from "axios";
import KarticaDomaci from "../cas11/KarticaDomaci";
import "../cas11/style.css";

function Cas12() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [singleCategory, setSingleCategory] = useState("");

  const BASE_URL = "https://dummyjson.com/products";

  const getData2 = () => {
    axios
      .get(`${BASE_URL}/search?q=${search}`)
      .then((res) => setData(res.data.products));
  };

  const getCategories = () => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((data) => setCategories(data.data));
  };

  const getDataByCategory = (category, searchParam = "") => {
    axios
      .get(`${BASE_URL}/category/${category}?q=${searchParam}`)
      // .get(`${BASE_URL}/category/${singleCategory}`)
      .then((res) => setData(res.data.products));
  };

  useEffect(() => {
    getData2();
    getCategories();
  }, []);

  return (
    <div className="container">
      <div className="searchWrapper">
        <input
          placeholder="Search..."
          className="searchInput"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            getDataByCategory(singleCategory, e.target.value);
          }}
        />
        <img
          onClick={getData2}
          src="search-svgrepo-com.svg"
          height={30}
          width={30}
        />

        <select
          placeholder="Izaberi kategoriju"
          style={{
            width: "200px",
          }}
          className="searchInput"
          onChange={(e) => {
            setSingleCategory(e.target.value);
            getDataByCategory(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
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

export default Cas12;
