import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  return (
    <div className="App">
      {monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
}

export default App;
