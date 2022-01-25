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
        //return filterGender === '' ? true : user.gender === filterGender;
        if (props.searchHouse === "gryffindor") {
          return true;
        } else {
          return character.house === props.searchHouse;
        }
      })
      .map((character, index) => {
        if (character.img !== "") {
          return (
            <li key={index}>
              <img src={character.img} alt={`Foto de ${character.name}`} />
              <h2>{character.name}</h2>
              <p>{character.species}</p>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <img src={logo} alt={`Foto del personaje no disponible`} />
              <h2>{character.name}</h2>
              <p>{character.species}</p>
            </li>
          );
        }
      });
  };
  return <>{renderCharacters()}</>;
}

export default CharacterCard;
