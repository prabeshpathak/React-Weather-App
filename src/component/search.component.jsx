import React from "react";

const Search = (props) => {
  return (
    <div>
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadWeather}>
      <input
        type="text"
        className="searchbox"
        name="city"
        autoComplete="off"
      />

      <input
        type="text"
        className="searchbox"
        name="country"
        autoComplete="off"
      />
      <button>Get weather</button>
      </form>
    </div>
  );
};


function error(){
  alert
  ("Please enter city and country")
}

export default Search;
