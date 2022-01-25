import { Link } from "react-router-dom";
import logo from "../images/hp-logo.png";

function CharacterCard(props) {
  const renderCharacters = () => {
    return props.characters
      .filter((character) => {
        return character.name
          .toLowerCase()
          .includes(`${props.searchName}`.toLowerCase());
      })
      .filter((character) => {
        if (props.searchHouse === "gryffindor") {
          return true;
        } else {
          return character.house === props.searchHouse;
        }
      })
      .map((character, index) => {
        let img;
        if (character.img === "") {
          img = false;
        } else {
          img = true;
        }
        return (
          <li key={index}>
            <Link to={`/character/${character.name}`}>
              {img ? (
                <img src={character.img} alt={`Foto de ${character.name}`} />
              ) : (
                <img src={logo} alt={`Foto del personaje no disponible`} />
              )}{" "}
              <h1>{character.name}</h1>
              <p>{character.species}</p>
            </Link>
          </li>
        );
      });
  };
  return <>{renderCharacters()}</>;
}

export default CharacterCard;
