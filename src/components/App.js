import { useState, useEffect } from "react";
import callToApi from "../services/api";
import logo from "../images/Harry-Potter-Logo.png";
import "../styles/App.scss";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    callToApi().then((result) => {
      setCharacters(result);
    });
  }, []);

  return (
    <div>
      <header className="header">
        <img className="title" alt="Logo Harry Potter" src={logo}></img>
      </header>
      <main>
        <CharacterList characters={characters} />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
