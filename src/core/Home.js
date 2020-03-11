import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <br />
      <br />
      <Link className="Link" to="/baseball">
        {" "}
        Baseball Cards
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/astros">
        {" "}
        Astros Cards
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/basketball">
        {" "}
        Baketball Cards
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/football">
        {" "}
        Football Cards
      </Link>
      <hr />
      <br />
    </div>
  );
};
