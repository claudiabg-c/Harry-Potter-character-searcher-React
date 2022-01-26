import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.scss";

function CharacterList(props) {
  return (
    <section>
      {props.existingCharacter ? (
        <ul className="listtable">
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
    </section>
  );
}

export default CharacterList;
