import { useEffect, useState } from "react";

const api = {
  key: "f9e92e0fdf338f8991e58ed830d7a097",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});


  const searchPressed = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((data) => {setWeather(data)})
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
          <h1>{typeof weather.main !== 'undefined' ? (weather.main.temp) : 31}°C</h1>
          <h2>{typeof weather.main !== 'undefined' ? (weather.weather[0].main) : 'Clouds'}</h2>
          </div>

          <span className="middle-line"></span>

          <div className="more-info">
            <h2>21-July-2023</h2>
            <h2>Friday, 12:44 PM</h2>
            <h2>Day</h2>
          </div>


        </div>
        <div className="right">
          <div className="info-grid">

            <div className="info">
              <h2>Wind</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.wind.speed) : 6}km/h</h1>
              <h3> Degree : {typeof weather.main !== 'undefined' ? (weather.wind.deg) : 200}</h3>
            </div>

            <div className="info">
              <h2>Humadity</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.main.humidity) : 6}%</h1>
            </div>

            <div className="info">
              <h2>Real Feel</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.main.feels_like) : 31 }°C</h1>
            </div>

            <div className="info">
              <h2>Desctription:</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.weather[0].description) : 'Cloudy'}</h1>
            </div>

            <div className="info">
              <h2>Pressure</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.main.pressure) : 1000 }mb</h1>
            </div>

            <div className="info">
              <h2>Change of rain</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.rain) : 70 }%</h1>
            </div>

            <div className="info">
              <h2>Temperature History</h2>
              <h1>31 °C</h1>
            </div>

            <div className="info">
              <h2>Sun</h2>
              <h1>Rise {typeof weather.main !== 'undefined' ? (new Date( weather.sys.sunrise * 1000).getHours()) : 5.12 } am</h1>
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