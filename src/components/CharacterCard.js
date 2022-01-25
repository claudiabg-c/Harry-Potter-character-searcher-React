function CharacterCard(props) {
  const renderCharacters = () => {
    return props.characters.map((character, index) => {
      return (
        <li key={index}>
          <img src={character.img} alt={`Foto de ${character.name}`} />
          <h2>{character.name}</h2>
          <p>{character.species}</p>
        </li>
      );
    });
  };
  return <>{renderCharacters()}</>;
}

export default CharacterCard;
