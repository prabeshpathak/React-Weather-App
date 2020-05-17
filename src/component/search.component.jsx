import React from "react";
import './search.styles.css'

const Search = (props) => {
  return (
    <div className="containerer">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadWeather}>
      <input
        type="text"
        className="searchbox"
        name="city"
        autoComplete="off"
        placeholder="City"
      />

      <input
        type="text"
        className="searchbox"
        name="country"
        autoComplete="off"
        placeholder="Country"
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
