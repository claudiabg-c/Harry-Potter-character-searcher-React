import { Link } from "react-router-dom";
import logo from "../images/hp-logo.png";
import "../styles/CharacterDetail.scss";

function CharacterDetail(props) {
  let img;
  if (props.character.img === "") {
    img = false;
  } else {
    img = true;
  }

  const getStatus = () => {
    return props.character.status === true ? (
      <span>
        Vivo <i className="fas fa-heart"></i>
      </span>
    ) : (
      <span>
        Muerto <i className="fas fa-heart-broken"></i>
      </span>
    );
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

  const getNickNames = props.character.nickName.map((eachNickName) => {
    return " " + eachNickName;
  });

  return (
    <div className="characterbody">
      <Link to="/" className="link">
        <i className="fas fa-arrow-left"></i> Volver al listado
      </Link>

      <section className={`sectiondetail ${props.characterHouse}background`}>
        <img
          src={img ? `${props.character.img}` : `${logo}`}
          alt={
            img
              ? `Foto de ${props.character.name}`
              : `Foto del personaje no disponible`
          }
          className="characterimg"
        />
        <section className={`charactercontent ${props.characterHouse}color`}>
          <h1>{props.character.name}</h1>
          <article className="details">
            <p>Estatus: {getStatus()}</p>
            <p>Especie: {getSpecies()}</p>
            <p>Género: {getGender()}</p>
            <p>
              Casa:{" "}
              {props.characterHouse.charAt(0).toUpperCase() +
                props.characterHouse.slice(1)}
            </p>
            <p>
              {props.character.nickName.length === 0
                ? null
                : `Otros nombres: ${getNickNames}`}
            </p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default CharacterDetail;
