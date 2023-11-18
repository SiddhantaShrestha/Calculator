import "./Calculator.css";

import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const manageClick = (value) => {
    if (value === "=") {
      try {
        const newSignsDisplay = display.replace(/÷/g, "/").replace(/×/g, "*");
        const result = eval(newSignsDisplay);
        setDisplay(result);
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else if (value === "Del") {
      setDisplay((prevOutput) => prevOutput.slice(0, -1) || "");
    } else if (value === "+/-") {
      setDisplay((prevDisplay) => prevDisplay * -1);
    } else if (value === "%") {
      setDisplay((prevDisplay) => prevDisplay / 100);
    } else if (value === "/") {
      setDisplay((prevDisplay) => prevDisplay / value);
    } else {
      if (value === "." && display.includes(".")) {
        return;
      }
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="btns">
        <button onClick={() => manageClick("C")} style={{ color: "#D86A53" }}>
          C
        </button>
        <button onClick={() => manageClick("+/-")} style={{ color: "#8FE156" }}>
          +/-
        </button>
        <button onClick={() => manageClick("%")} style={{ color: "#8FE156" }}>
          %
        </button>
        <button onClick={() => manageClick("÷")} style={{ color: "#8FE156" }}>
          ÷
        </button>
        <button onClick={() => manageClick("7")}>7</button>
        <button onClick={() => manageClick("8")}>8</button>
        <button onClick={() => manageClick("9")}>9</button>
        <button onClick={() => manageClick("×")} style={{ color: "#8FE156" }}>
          ×
        </button>
        <button onClick={() => manageClick("4")}>4</button>
        <button onClick={() => manageClick("5")}>5</button>
        <button onClick={() => manageClick("6")}>6</button>
        <button onClick={() => manageClick("-")} style={{ color: "#8FE156" }}>
          -
        </button>
        <button onClick={() => manageClick("1")}>1</button>
        <button onClick={() => manageClick("2")}>2</button>
        <button onClick={() => manageClick("3")}>3</button>
        <button onClick={() => manageClick("+")} style={{ color: "#8FE156" }}>
          +
        </button>
        <button onClick={() => manageClick("0")}>0</button>
        <button onClick={() => manageClick("Del")}>Del</button>
        <button onClick={() => manageClick(".")}>.</button>
        <button
          onClick={() => manageClick("=")}
          style={{ backgroundColor: "#58A621" }}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
