import { useState, useEffect } from "react";

const api = {
  key: "f9e92e0fdf338f8991e58ed830d7a097",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [img, setImg] = useState('./clouds.png')

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {setWeather(result)})
  }

  function DayCalc() {
    if(typeof weather.main !== 'undefined') {
      const datatime = new Date(weather.dt * 1000).toLocaleString('default');
      console.log(datatime)
      const datatimeSplited = datatime.split(',');
      const data = datatimeSplited[0];
      const time = datatimeSplited[1];
      setDay(data)
      setTime(time)
    } else {
      return undefined
    }
  }

  function WeatherImage() {
    if(weather.weather[0].main === 'Clouds') {
    setImg('./Sun and cloud.png')
    }
  }

console.log(weather)
  useEffect(() => {
    DayCalc();
  })
  return (
      <div className="container">
        <div className="left">
          <div className="input-wrapper">
          <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Input your city"/>
          <button onClick={searchPressed} className="input-button"><img src="./search.png" width='100%' alt="search"/></button>
          </div>
          <div className="img-wrapper">
            <img src={img} alt="Sun and cloud" width='100%' onC/>
          </div>

          <div className="general-info">
          <h1>{typeof weather.main !== 'undefined' ? (weather.main.temp) : 31}°C</h1>
          <h2>{typeof weather.main !== 'undefined' ? (weather.weather[0].main) : 'Clouds'}</h2>
          </div>

          <span className="middle-line"></span>

          <div className="more-info">
            <h2>Date and time of request <br/> information:</h2>
            <h2>{day.length > 0 ? (day) : '21-July-2023'}</h2>
            <h2>{time.length > 0 ? (time) : '15:04'}</h2>
          </div>


        </div>
        <div className="right">
          <div className="info-grid">

            <div className="info">
              <h2>Wind:</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.wind.speed) : 6}km/h</h1>
              <h3> Degree : {typeof weather.main !== 'undefined' ? (weather.wind.deg) : 200}</h3>
            </div>

            <div className="info">
              <h2>Humadity:</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.main.humidity) : 6}%</h1>
            </div>

            <div className="info">
              <h2>Real Feel:</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.main.feels_like) : 31 }°C</h1>
            </div>

            <div className="info">
              <h2>Min temp:</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.main.temp_min) : 9}°C</h1>
            </div>

            <div className="info">
              <h2>Pressure:</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.main.pressure) : 1000 } mb</h1>
            </div>

            <div className="info">
              <h2>Max temp:</h2>
              <h1>{typeof weather.main !== 'undefined' ? (weather.main.temp_max) : 8}°C</h1>
            </div>

          </div>
        </div>
      </div>
  );
}

export default App;