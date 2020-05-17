import React from "react";

const Weather = (props) => {
  return (
    <div>
      <div className="name-container">
        <h1>{props.city}</h1>
      </div>
      <div className="avg-temp">
        {props.avgTemp ? <h2>{props.avgTemp}&deg;c</h2> : null}
      </div>
      <div className="description">
        <span></span>
        <h2>
          {props.icons} {props.description}
        </h2>
      </div>
      <div className="min-max">
        {props.temp_max ? (<h2 className="max">{props.temp_max}&deg;c</h2>): null}
        {props.temp_min ? (<h2 className="min">{props.temp_min}&deg;c</h2>): null}
      </div>
    </div>
  );
};

export default Weather;
