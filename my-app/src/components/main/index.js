import React from "react";
import "./main.css";
import Button from "../button";
import Input from "../input";

const Main = () => {
  return (
    <div className="main">
      <div className="card1">
        <Input
          placeholder={"Enter username"}
          label={"username"}
          color={"white"}
        />
        <Input
          placeholder={"Enter password"}
          label={"password"}
          color={"white"}
        />
        <Button color={"white"} text={"Register now"} />
        <Button color={"white"} text={"Log in"} />
      </div>
    </div>
  );
};

export default Main;
