import { useState } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);

  return (
    <div className="App">
      {monsters.map(monster => (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
