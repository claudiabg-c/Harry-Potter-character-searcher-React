import { Link } from "react-router-dom";
import logo from "../images/hp-logo.png";

function CharacterDetail(props) {
  let img;
  if (props.character.img === "") {
    img = false;
  } else {
    img = true;
  }

  const getStatus = () => {
    return props.character.status === true ? "Vivo" : "Muerto";
  };

  const getGender = () => {
    return props.character.gender === "female" ? "Mujer" : "Hombre";
  };

  const getSpecies = () => {
    if (props.character.species === "human") {
      return "Humano";
    } else if (props.character.species === "half-giant") {
      return "Medio gigante";
    } else if (props.character.species === "werewolf") {
      return "Hombre lobo";
    } else if (props.character.species === "ghost") {
      return "Fantasma";
    }
  };

  return (
    <div>
      <Link to="/">Volver</Link>
      {img ? (
        <img
          src={props.character.img}
          alt={`Foto de ${props.character.name}`}
        />
      ) : (
        <img src={logo} alt={`Foto del personaje no disponible`} />
      )}
      <h1>{props.character.name}</h1>
      <p>Estatus: {getStatus()}</p>
      <p>Especie: {getSpecies()}</p>
      <p>Género: {getGender()}</p>
      <p>
        Casa:{" "}
        {props.characterHouse.charAt(0).toUpperCase() +
          props.characterHouse.slice(1)}
      </p>
    </div>
  );
}

export default CharacterDetail;
