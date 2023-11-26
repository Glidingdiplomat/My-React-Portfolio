import React from "react";

const Header = () => {
  const navStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  return (
    <nav style={navStyle}>
      <h1>Lernantino</h1>
      <div>
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </div>
    </nav>
  );
};
export default Header;
