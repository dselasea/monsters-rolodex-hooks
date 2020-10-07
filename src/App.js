import React, { useState } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([
    { name: "Frankenstein", id: "kadf" },
    { name: "Dracula", id: "adfa" },
    { name: "Zombie", id: "lajd" },
  ]);

  return (
    <div className="App">
      {monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
}

export default App;
