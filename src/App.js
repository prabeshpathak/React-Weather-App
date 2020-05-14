import React, { Component } from "react";
import Weather from "./component/weather.component";
import Search from "./component/search.component";
import "../node_modules/weather-icons-master/css/weather-icons.css";

const api = "429736441cf3572838aa10530929f7cd";
// (`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api}`);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idForIcon: "",
      city: "Kathmandu",
      country: "",
      temperature: "",
      description: "",
      temperature_max: "",
      temperature_min: "",
      icons: "",
    };
  }
  handleInput = (e) => {
    let searchVal = e.target.value;

    this.setState({
      city: searchVal,
    });

    console.log(searchVal);
  };

  componentDidMount = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${api}`
    );
    const response = await api_call.json();
    console.log(response);

    this.setState({
      idForIcon: response.weather[0].id,
      city: response.name,
      country: response.sys.country,
      temperature: this.toCelsius(response.main.temp),
      description: response.weather[0].description,
      temperature_max: this.toCelsius(response.main.temp_max),
      temperature_min: this.toCelsius(response.main.temp_min),
    });

    this.fontIcon(response.weather[0].id);
  };

  toCelsius = (temperature) => {
    return (temperature - 273).toFixed(1);
  };

  fontIcon(rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icons: "wi wi-thunderstorm" });
        // this.setState({ icon: this.weatherIcon.thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icons: "wi wi-sprinkle" });
        // this.setState({ icon: this.weatherIcon.drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icons: "wi wi-rain" });
        // this.setState({ icon: this.weatherIcon.rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icons: "wi wi-snow" });
        // this.setState({ icon: this.weatherIcon.snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icons: "wi wi-fog" });
        // this.setState({ icon: this.weatherIcon.atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icons: "wi wi-day-sunny" });
        // this.setState({ icon: this.weatherIcon.clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icons: "wi wi-cloud" });
        // this.setState({ icon: this.weatherIcon.clouds });
        break;
      default:
        this.setState({ icons: "wi wi-day-cloudy-high" });
    }
  }

  render() {
    return (
      <div>
        <Search handleInput={this.handleInput} />
        <Weather
          idForIcon={this.state.idForIcon}
          city={this.state.city}
          country={this.state.country}
          avgTemp={this.state.temperature}
          description={this.state.description}
          temp_max={this.state.temperature_max}
          temp_min={this.state.temperature_min}
          icons={<i className={this.state.icons}></i>}
        />
      </div>
    );
  }
}

export default App;
