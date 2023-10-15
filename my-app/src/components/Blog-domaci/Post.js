import React from "react";

function Post({ posts }) {
  return (
    <div className="post">
      <h1>
        <span className="keys">{posts.title}</span>
      </h1>
      <h3>
        <span className="keys">{posts.body}</span>
      </h3>
    </div>
  );
}

export default Post;
