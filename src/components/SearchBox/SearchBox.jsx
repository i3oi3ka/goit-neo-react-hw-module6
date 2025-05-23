import style from "./SearchBox.module.css";

const SearchBox = ({ filter, changeFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        name="search"
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
};

export default SearchBox;
