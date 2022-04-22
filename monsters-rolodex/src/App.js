import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import "./App.css";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filtered, setFiltered] = useState(monsters);

  const onSearchChange = e => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
  };

  // init
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setMonsters(data));
  }, []);

  // filter
  useEffect(() => {
    const filtered = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText)
    );
    setFiltered(filtered);
  }, [monsters, searchText]);

  return (
    <>
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monster-search-box"
        onChange={onSearchChange}
        placeholder="Search monsters..."
      />
      <CardList items={filtered} />
    </>
  );
};

export default App;
