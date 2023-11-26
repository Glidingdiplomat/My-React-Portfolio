import React from "react";

const MainContent = () => {
  const mainStyle = {
    padding: "20px",
    backgroundColor: "orange",
    color: "white",
    textAlign: "center",
  };

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "grey",
    display: "inline-block",
    marginBottom: "20px",
  };

  return (
    <main style={mainStyle}>
      <h2>About Me</h2>
      <div style={avatarStyle}></div>
      <p>Your bio goes here...</p>
    </main>
  );
};

export default MainContent;
