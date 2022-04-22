import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
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
      <SearchBox
        className="monster-search-box"
        onChange={onSearchChange}
        placeholder="Search monsters..."
      />
      <CardList items={monsters.filter(filterMonsters)} />
    </div>
  );
}

export default App;
