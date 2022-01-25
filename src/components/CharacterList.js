import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <ul>
      <CharacterCard
        characters={props.characters}
        searchName={props.searchName}
      />
    </ul>
  );
}

export default CharacterList;
