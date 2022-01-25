import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <ul>
      <CharacterCard characters={props.characters} />
    </ul>
  );
}

export default CharacterList;
