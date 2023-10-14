import React, { useState, useEffect } from "react";
import "./post.css";

function Blog() {
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []); // Prazan niz znači da će se useEffect izvršiti samo jednom, nakon što se komponenta montira

  return <div></div>;
}

export default Blog;
