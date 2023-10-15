import React, { useState, useEffect } from "react";
import "./post.css";
import Slika from "./slika.png";

function Post({ posts }) {
  const [likes, setLikes] = useState(posts.reactions);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Proveri lokalno skladište da li je korisnik već lajkovao ovaj post
    const hasLikedPost = localStorage.getItem(`liked_${posts.id}`);
    if (hasLikedPost) {
      setHasLiked(true);
    }
  }, [posts.id]);

  const handleLikeClick = () => {
    if (!hasLiked) {
      // Ako korisnik već nije lajkovao post
      setLikes(likes + 1);
      setHasLiked(true);

      // Sačuvaj informaciju u lokalnom skladištu da je korisnik lajkovao ovaj post
      localStorage.setItem(`liked_${posts.id}`, "true");
    }
  };

  return (
    <div className="post">
      <div className="naslov">
        <h1>
          <span className="keys">{posts.title}</span>
        </h1>
      </div>
      <div className="body">
        <h3>
          <span className="keys">{posts.body}</span>
        </h3>
      </div>
      <div className="likes">
        <img
          src={Slika}
          alt="like"
          onClick={handleLikeClick}
          style={{ cursor: "pointer" }}
        />
        <h4>{likes} users like this post.</h4>
      </div>
    </div>
  );
}

export default Post;
