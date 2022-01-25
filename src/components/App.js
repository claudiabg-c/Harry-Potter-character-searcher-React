import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import logo from "../images/Harry-Potter-Logo.png";
import "../styles/App.scss";
import "../styles/Reset.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("gryffindor");
  const [existingCharacter, setExistingCharacter] = useState(true);

  useEffect(() => {
    callToApi(searchHouse).then((result) => {
      setCharacters(result);
    });
  }, [searchHouse]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      const itsACharacter = characters.find((character) =>
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
        <img className="title" alt="Logo Harry Potter" src={logo} />
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
              characters={characters}
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
