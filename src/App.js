import React, { Component } from "react";

const api = "429736441cf3572838aa10530929f7cd";
// (`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api}`);

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate = async () => {
    const api_call = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api}`
    );
    const response = (await api_call).json()
  };
  render() {
    return <div>a</div>;
  }
}

export default App;
