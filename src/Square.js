import React from "react";

const Square = ({ color, hexValue }) => {
  return (
    <div
      style={{ background: color }}
      className="square"
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default Square;
