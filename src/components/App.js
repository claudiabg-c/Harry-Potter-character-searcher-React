import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import callToApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/localStorage";
import logo from "../images/Harry-Potter-Logo.png";
import "../styles/App.scss";
import "../styles/Reset.scss";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("gryffindor");
  const [existingCharacter, setExistingCharacter] = useState(true);
  const [sortedCharacters, setSortedCharacters] = useState([]);

  useEffect(() => {
    const sortedList = [...characters].sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    setSortedCharacters(sortedList);
  }, [characters]);

  useEffect(() => {
    callToApi(searchHouse).then((result) => {
      setCharacters(result);
    });
  }, [searchHouse]);

  useEffect(() => {
    ls.set("characters", sortedCharacters);
  }, [sortedCharacters]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      const itsACharacter = sortedCharacters.find((character) =>
        character.name.toLowerCase().includes(data.value.toLowerCase())
      );
      if (data.code === 8) {
        setExistingCharacter(true);
      }
      if (itsACharacter === undefined) {
        setExistingCharacter(false);
      }
      setSearchName(data.value);
    } else if (data.key === "house") {
      setSearchHouse(data.value);
    }
  };

  const renderUserDetail = (props) => {
    const routeName = props.match.params.characterName;
    const decodeName = decodeURI(routeName);
    const foundUser = characters.find(
      (character) => character.name === decodeName
    );

    return (
      <CharacterDetail character={foundUser} characterHouse={searchHouse} />
    );
  };

  return (
    <div>
      <header className="header">
        <Link to="/">
          <img className="title" alt="Logo Harry Potter" src={logo} />
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Filters
              handleFilter={handleFilter}
              searchHouse={searchHouse}
              inputValue={`${searchName}`}
              selectValue={`${searchHouse}`}
            />
            <CharacterList
              characters={sortedCharacters}
              searchName={searchName}
              existingCharacter={existingCharacter}
            />
          </Route>
          <Route path="/character/:characterName" render={renderUserDetail} />
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
