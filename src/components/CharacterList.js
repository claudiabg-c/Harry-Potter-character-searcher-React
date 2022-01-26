import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.scss";

function CharacterList(props) {
  const handleCheckBox = (ev) => {
    props.handleCheck(ev.target.checked);
  };

  return (
    <section className="check">
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={props.sort}
          onChange={handleCheckBox}
        />
        <label htmlFor="checkbox">Mostrar por oden alfabético</label>
      </div>
      {props.existingCharacter ? (
        <ul className="listtable">
          <CharacterCard
            characters={props.sort ? props.sortedCharacters : props.characters}
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
