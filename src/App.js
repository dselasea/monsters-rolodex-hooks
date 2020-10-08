import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";

function App() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);
  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
