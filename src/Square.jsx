import React from "react";

const Square = ({ isGreen, onClick }) => {
  const style = {
    backgroundColor: isGreen ? "green" : "transparent",
    border: "1px solid black",
    width: "80px",
    height: "80px",
    marginLeft: "5px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  };
  return <div style={style} onClick={onClick}></div>;
};

export default Square;
