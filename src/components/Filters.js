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

  const handleSelectGender = (ev) => {
    props.handleFilter({ key: "gender", value: ev.target.value });
  };

  const handleRadio = (ev) => {
    props.handleFilter({ key: "status", value: ev.target.value });
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
        className={`search input ${props.selectValue}`}
      />
      <label htmlFor="searchhouse" className="label house">
        Filtrar por casa:
      </label>
      <select
        id="searchhouse"
        defaultValue={props.selectValue}
        onChange={handleSelect}
        className={`search select ${props.selectValue}`}
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
        defaultValue={props.selectGenderValue}
        onChange={handleSelectGender}
        className={`search select ${props.selectValue}`}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
      <label htmlFor="all">Todos</label>
      <input
        type="radio"
        name="status"
        value="all"
        id="all"
        onChange={handleRadio}
        checked={props.status === "all"}
      />
      <label htmlFor="alive">Vivos</label>
      <input
        type="radio"
        name="status"
        value="alive"
        id="alive"
        onChange={handleRadio}
        checked={props.status === "alive"}
      />
      <label htmlFor="dead">Muertos</label>
      <input
        type="radio"
        name="status"
        value="dead"
        id="dead"
        onChange={handleRadio}
        checked={props.status === "dead"}
      />

      <button
        type="reset"
        onClick={props.handleReset}
        className={`reset ${props.selectValue}`}
      >
        <i className="fas fa-trash-alt"></i>Eliminar búsqueda
      </button>
    </form>
  );
}

export default Filters;
