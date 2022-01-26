import "../styles/Filters.scss";

function Filters(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
      code: ev.keyCode,
    });
  };

  const handleSelect = (ev) => {
    props.handleFilter({ key: "house", value: ev.target.value });
  };

  const handleSelectSex = (ev) => {
    props.handleFilter({ key: "sex", value: ev.target.value });
  };

  return (
    <form onSubmit={(ev) => ev.preventDefault()} className="form">
      <label htmlFor="searchname" className="label name">
        Buscar personaje:
      </label>
      <input
        type="text"
        id="searchname"
        placeholder={`Ej.: Remus Lupin`}
        onKeyUp={handleInput}
        defaultValue={props.inputValue}
        className="search input"
      />
      <label htmlFor="searchhouse" className="label house">
        Buscar casa:
      </label>
      <select
        id="searchhouse"
        defaultValue={props.selectValue}
        onChange={handleSelect}
        className="search select"
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
      <label htmlFor="searchhouse" className="label house">
        Filtrar por género:
      </label>
      <select
        id="searchhouse"
        defaultValue={props.selectSexValue}
        onChange={handleSelectSex}
        className="search select"
      >
        <option value="todos">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </form>
  );
}

export default Filters;
