import React, { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Hello Khemikal");
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <button onClick={() => setGreeting("Hello Senam")}>
        Change Greeting
      </button>
    </div>
  );
}

export default App;
