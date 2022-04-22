import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onSearchChange = e => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
  };

  const filterMonsters = monster =>
    monster.name.toLowerCase().includes(searchText);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setMonsters(data));
  }, []);

  return (
    <div className="App">
      <input
        className="search-text"
        type="search"
        placeholder="Find monster..."
        onChange={onSearchChange}
      />

      {monsters.filter(filterMonsters).map(monster => (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
