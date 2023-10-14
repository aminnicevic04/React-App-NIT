import React from "react";

function Post() {
  return (
    <div className="post">
      <h1>
        <span className="keys">{}</span>
      </h1>
      <h3>
        <span className="keys">Prezime: </span>
        <span class="props-stil">{}</span>
      </h3>
    </div>
  );
}

export default Post;
