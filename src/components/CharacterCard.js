import { Link } from "react-router-dom";
import logo from "../images/hp-logo.png";
import "../styles/CharacterCard.scss";

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
      .filter((character) => {
        if (props.gender === "all") {
          return true;
        } else {
          return character.gender === props.gender;
        }
      })
      .filter((character) => {
        if (props.status === "alive") {
          return character.status === true;
        } else if (props.status === "dead") {
          return character.status === false;
        } else {
          return true;
        }
      })
      .map((character, index) => {
        let img;
        if (character.img === "") {
          img = false;
        } else {
          img = true;
        }

        const renderSpecies = () => {
          if (character.species === "human") {
            return "Humano";
          } else if (character.species === "half-giant") {
            return "Medio gigante";
          } else if (character.species === "werewolf") {
            return "Hombre lobo";
          } else if (character.species === "ghost") {
            return "Fantasma";
          }
        };

        return (
          <li key={index} className="list">
            <Link
              to={`/character/${character.name}/${character.houseOf}`}
              className={character.houseOf}
            >
              <img
                src={img ? `${character.img}` : `${logo}`}
                alt={
                  img
                    ? `Foto de ${character.name}`
                    : `Foto del personaje no disponible`
                }
                className={`imglist ${character.houseOf}`}
              />
              <h1 className="charactername">{character.name}</h1>
              <p className="characterspecies">{renderSpecies()}</p>
            </Link>
          </li>
        );
      });
  };
  return <>{renderCharacters()}</>;
}

export default CharacterCard;
