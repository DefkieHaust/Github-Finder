import { useState } from "react";

const SearchBox = ({ setSearched}) => {

  const [query, setQuery] = useState("")
 
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setSearched(e.target.value.replace(" ", ""))
    }
  };

  return (
    <form className="form-inline my-2 my-lg-0 ml-auto input-group flex-nowrap small-width-input">
      <span className="input-group-text bg-dark" id="addon-wrapping">
        <i className="text-white fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        value={query}
        className="form-control mr-sm-2 bg-dark text-white"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </form>
  );
};

export default SearchBox;
