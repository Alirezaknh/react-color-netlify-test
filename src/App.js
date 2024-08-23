import Square from "./Square";
import ColorInput from "./ColorInput";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  return (
    <div className="App">
      <Square
        color={color}
        hexValue={hexValue}
      />
      <ColorInput
        setColor={setColor}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
