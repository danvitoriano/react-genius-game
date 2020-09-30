import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const order = ["red", "blue", "red", "green", "yellow", "yellow"];
  const [color, setColor] = useState([]);

  const isEqual = function () {
    if (order.length !== color.length) return "False";
    // if length is not equal
    else {
      for (
        var i = 0;
        i < order.length;
        i++ // comapring each element of array
      )
        if (order[i] !== color[i]) return "False";
      return "True";
    }
  };

  const handleClick = (e) => {
    e.persist();
    setColor([...color, e.target.id]);
    e.target.style.backgroundColor = "black";
    setTimeout(() => (e.target.style.backgroundColor = ""), 30);
  };

  if (isEqual() === "True") {
    console.log("ganhou");
    setColor([]);
  }

  return (
    <>
      <h1>Sequência: {color}</h1>
      <button onClick={() => setColor([])}>Zerar</button>
      <div className="Genius">
        <div onClick={(e) => handleClick(e)} id="blue">
          blue
        </div>
        <div onClick={(e) => handleClick(e)} id="red">
          red
        </div>
        <div onClick={(e) => handleClick(e)} id="yellow">
          yellow
        </div>
        <div onClick={(e) => handleClick(e)} id="green">
          green
        </div>
      </div>
    </>
  );
}
