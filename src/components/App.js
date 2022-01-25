import { useState, useEffect } from "react";
import callToApi from "../services/api";
import logo from "../images/Harry-Potter-Logo.png";
import "../styles/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    callToApi().then((result) => {
      setCharacters(result);
    });
  }, []);

  console.table(characters);

  return (
    <div>
      <header className="header">
        <img className="title" alt="Logo Harry Potter" src={logo}></img>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default App;
