import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <>
      {props.existingCharacter ? (
        <ul>
          <CharacterCard
            characters={props.characters}
            searchName={props.searchName}
            existingCharacter={props.existingCharacter}
          />
        </ul>
      ) : (
        <p>
          No hay ningún personaje que coincida con la palabra {props.searchName}
        </p>
      )}
    </>
  );
}

export default CharacterList;
