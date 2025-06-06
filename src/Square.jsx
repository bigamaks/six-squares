import React from "react";

const Square = ({ isGreen, onClick }) => {
  const style = {
    backgroundColor: isGreen ? "green" : "transparent",
    border: "2px solid #333",
    width: "80px",
    height: "80px",
    marginLeft: "5px",

  transition: "backgroundColor 0.3s",
  cursor: "pointer"
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  };
  return <div style={style} onClick={onClick}></div>;
};

export default Square;
