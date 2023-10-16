import React, { useState, useEffect } from "react";
import Post from "./Post";

export function Blog() {
  const [defaultData, setDefaultData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 100;
  const [buttonsArray, setButtonsArray] = useState([]);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/posts?limit=${blogsPerPage}&skip=${
        (currentPage - 1) * blogsPerPage
      }&select=title,reactions,body`
    )
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.posts);
      })
      .catch((error) => {
        console.error("Greška prilikom dobijanja podataka:", error);
      });
  }, [currentPage]);

  const pageNumbers = [];
  useEffect(() => {
    for (let i = 1; i <= Math.ceil(defaultData.length / blogsPerPage); i++) {
      pageNumbers.push(i);
    }
    // const newButtonsArray = Array.from(
    //   { length: totalPage },
    //   (_, index) => index + 1
    // );
    setButtonsArray(newButtonsArray);
  }, [defaultData, blogsPerPage]);

  function next() {
    setCurrentPage(currentPage + 1);
  }

  function prev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="blog">
      {defaultData?.length > 0 ? (
        defaultData?.map((posts) => <Post posts={posts} />)
      ) : (
        <h1>Nema trenutno podataka </h1>
      )}

      <div>
        <button onClick={prev}>Prev</button>
        {pageNumbers.map((button) => (
          <button key={button} onClick={() => setCurrentPage(button)}>
            {button}
          </button>
        ))}
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
