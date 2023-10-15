import React, { useState, useEffect } from "react";
import "./post.css";
import "./blog.css";
import Post from "./Post";

function Blog() {
  const [defaultData, setDefaultData] = useState([]);
  useEffect(() => {
    fetch(
      "https://dummyjson.com/posts?limit=9&skip=0&select=title,reactions,body"
    )
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.posts);
        console.log(data);
      });
    console.log(defaultData);
  }, []);

  return (
    <div className="blog">
      {defaultData?.length > 0 ? (
        defaultData?.map((posts) => <Post posts={posts} />)
      ) : (
        <h1>Nema trenutno podataka </h1>
      )}

      <div className="paginaton"></div>
    </div>
  );
}

export default Blog;
