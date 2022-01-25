import { useState, useEffect } from "react";
import callToApi from "../services/api";
import logo from "../images/Harry-Potter-Logo.png";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    callToApi().then((result) => {
      setCharacters(result);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setSearchName(data.value);
    }
  };

  return (
    <div>
      <header className="header">
        <img className="title" alt="Logo Harry Potter" src={logo}></img>
      </header>
      <main>
        <Filters handleFilter={handleFilter} />
        <CharacterList characters={characters} searchName={searchName} />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
