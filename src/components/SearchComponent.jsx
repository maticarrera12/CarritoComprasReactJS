import { useState } from "react";

export const SearchComponent = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value); // Llama a la función de búsqueda cuando el valor cambia
  };

  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search"
        aria-label="Search"
      />
      {/* <button className="btn btn-outline-success" type="submit">
        Search
      </button> */}
    </form>
  );
};

