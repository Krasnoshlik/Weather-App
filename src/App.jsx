import { useState } from "react";

const api = {
  key: "f9e92e0fdf338f8991e58ed830d7a097",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  const [city, setCity] = useState('');

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }

  return (
      <div className="container">
        <div className="left">
          <div className="input-wrapper">
          <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Input your city"/>
          <button onClick={searchPressed} className="input-button"><img src="./search.png" width='100%' alt="search"/></button>
          </div>
          <div className="img-wrapper">
            <img src="./Sun and cloud.png" alt="Sun and cloud" width='100%' />
          </div>

          <div className="general-info">
          <h1>31°C</h1>
          <h2>Mostly Cloudy</h2>
          </div>

          <span className="middle-line"></span>

          <div className="more-info">
            <h2>21-July-2023</h2>
            <h2>Friday, 12:44 PM</h2>
            <h2>Day</h2>
          </div>


        </div>
        <div className="right">
          <div className="buttons">
          <button className="today active">Today</button>
          <button className="tomorrow">Tomorrow</button>
          </div>
          <div className="info-grid">

            <div className="info">
              <h2>Wind</h2>
              <h1>6 km/h</h1>
              <h3>East</h3>
            </div>

            <div className="info">
              <h2>Humadity</h2>
              <h1>69%</h1>
            </div>

            <div className="info">
              <h2>Real Feel</h2>
              <h1>31 °C</h1>
            </div>

            <div className="info">
              <h2>UV Index</h2>
              <h1>3</h1>
              <h3>Moderate</h3>
            </div>

            <div className="info">
              <h2>Pressure</h2>
              <h1>1000 mb</h1>
            </div>

            <div className="info">
              <h2>Change of rain</h2>
              <h1>70%</h1>
            </div>

            <div className="info">
              <h2>Temperature History</h2>
              <h1>31 °C</h1>
            </div>

            <div className="info">
              <h2>Sun</h2>
              <h1>Rise 5.17 am</h1>
            </div>

            <div className="info">
              <h2>Moon</h2>
              <h1>Rise 5.17 am</h1>
            </div>

          </div>
        </div>
      </div>
  );
}

export default App;