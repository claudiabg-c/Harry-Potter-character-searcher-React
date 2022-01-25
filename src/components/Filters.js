function Filters(props) {
  const handleInput = (ev) => {
    props.handleFilter({ key: "name", value: ev.target.value });
  };

  return (
    <form>
      <label>
        Buscar personaje:
        <input type="text" onChange={handleInput} />
      </label>
      <label>
        Buscar casa:
        <select defaultValue="gryffindor">
          <option value="gryffindor">Gryffindor</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="slytherin">Slytherin</option>
        </select>
      </label>
    </form>
  );
}

export default Filters;
