import React from "react";
import colorNames from "colornames";

const ColorInput = ({ setColor, setHexValue }) => {
  return (
    <input
      autoFocus
      className="colorInput"
      type="text"
      placeholder="Add color name"
      onChange={(e) => {
        setColor(e.target.value);
        setHexValue(colorNames(e.target.value));
      }}
    />
  );
};

export default ColorInput;
