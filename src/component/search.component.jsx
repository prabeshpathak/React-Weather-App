import React from "react";

const Search = (props) => {
  return (
    <div>
      <input type="text" className="searchbox" onChange={props.handleInput} />
    </div>
  );
};

export default Search;
