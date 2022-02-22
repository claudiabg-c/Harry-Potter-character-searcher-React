import { useState, useEffect } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import callToApi from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/localStorage";
import logo from "../images/harry-potter-logo(1).png";
import "../styles/App.scss";
import "../styles/Reset.scss";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("gryffindor");
  const [gender, setGender] = useState("all");
  const [existingCharacter, setExistingCharacter] = useState(true);
  const [sortedCharacters, setSortedCharacters] = useState([]);
  const [sort, setSort] = useState(false);

  const handleCheck = (value) => {
    setSort(value);
  };

  useEffect(() => {
    callToApi(searchHouse).then((result) => {
      setCharacters(result);
    });
  }, [searchHouse]);

  useEffect(() => {
    const sortedList = [...characters].sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    setSortedCharacters(sortedList);
  }, [characters]);

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

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
    } else if (data.key === "gender") {
      setGender(data.value);
    }
  };

  const handleReset = () => {
    setExistingCharacter(true);
    setSearchName("");
    setSearchHouse("gryffindor");
    setGender("all");
    setSort(false);
  };

  const routeInfo = useRouteMatch("/character/:characterName/:house");

  const reRenderCharacterList = () => {
    if (routeInfo) {
      const routeName = routeInfo.params.characterName;
      const decodeName = decodeURI(routeName);
      const house = routeInfo.params.house;
      if (house !== searchHouse) {
      } else {
        const foundUser = characters.find(
          (character) => character.name === decodeName
        );
        return foundUser;
      }
    }
  };

  return (
    <div className={`home ${searchHouse}`}>
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
              handleReset={handleReset}
              searchHouse={searchHouse}
              inputValue={`${searchName}`}
              selectValue={`${searchHouse}`}
              selectGenderValue={`${gender}`}
              characters={characters}
            />
            <CharacterList
              characters={characters}
              sortedCharacters={sortedCharacters}
              handleCheck={handleCheck}
              sort={sort}
              searchName={searchName}
              existingCharacter={existingCharacter}
              gender={gender}
            />
          </Route>
          <Route path="/character/:characterName/:house">
            <CharacterDetail
              character={reRenderCharacterList()}
              characterHouse={searchHouse}
            />
          </Route>
          <Route>
            <section className="notfound">
              <h1>404 - Página no encontrada</h1>
              <Link to="/" className="link">
                <i className="fas fa-arrow-left"></i> Volver al inicio
              </Link>
            </section>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
