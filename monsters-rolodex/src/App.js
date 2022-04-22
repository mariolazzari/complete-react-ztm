import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const onSearchChange = e => {
    const searchTerm = e.target.value;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMonsters(filteredMonsters);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setMonsters(data);
        setFilteredMonsters(data);
      });
  }, []);

  return (
    <div className="App">
      <input
        className="search-text"
        type="search"
        placeholder="Find monster..."
        onChange={onSearchChange}
      />

      {filteredMonsters.map(monster => (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
