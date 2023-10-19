import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>home page</h1>
      {/* <Link to={"./about"}>idi na AboutPage </Link> */}
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
}

export default HomePage;

// navbar home product posts
// navbar izvan ruta, iznad browse route
