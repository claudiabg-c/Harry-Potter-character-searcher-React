import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import logo from "../images/Harry-Potter-Logo.png";
import "../styles/App.scss";
import CharacterDetail from "./CharacterDetail";

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
        <img className="title" alt="Logo Harry Potter" src={logo}></img>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Filters handleFilter={handleFilter} searchHouse={searchHouse} />
            <CharacterList characters={characters} searchName={searchName} />
          </Route>
          <Route path="/character/:characterName" render={renderUserDetail} />
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
