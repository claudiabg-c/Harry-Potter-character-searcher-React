import { useState, useEffect } from "react";
import callToApi from "../services/api";
import logo from "../images/Harry-Potter-Logo.png";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("gryffindor");

  useEffect(() => {
    callToApi(searchHouse).then((result) => {
      setCharacters(result);
    });
  }, [searchHouse]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setSearchName(data.value);
    } else if (data.key === "house") {
      setSearchHouse(data.value);
    }
  };

  return (
    <div>
      <header className="header">
        <img className="title" alt="Logo Harry Potter" src={logo}></img>
      </header>
      <main>
        <Filters handleFilter={handleFilter} searchHouse={searchHouse} />
        <CharacterList characters={characters} searchName={searchName} />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
