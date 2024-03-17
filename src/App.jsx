import { useState, useEffect } from "react";

const api = {
  key: "f9e92e0fdf338f8991e58ed830d7a097",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [day, setDay] = useState('21-July-2023');
  const [time, setTime] = useState('15:04');
  const [img, setImg] = useState('./clouds.png');

  async function searchPressed() {
    await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {setWeather(result)})
    .then(() => {
      DayCalc();
    })
  }

  function DayCalc() {
      const datatime = new Date()
      const data = datatime.getFullYear()+'-'+(datatime.getMonth()+1)+'-'+datatime.getDate();
      const time = datatime.getHours() + ":" + datatime.getMinutes() + ":" + datatime.getSeconds();
      setDay(data)
      setTime(time)
  }

  function WeatherImage() {
    if(typeof weather.main !== 'undefined') {
    if(weather.weather[0].main === 'Clouds') {
    setImg('./Sun and cloud.png');
    } else if (weather.weather[0].main === 'Rain') {
      setImg('./rain.png');
    } else if (weather.weather[0].main === 'Tunder') {
      setImg('./tunder.png')
    }}}

    useEffect(() => {
      WeatherImage();
    },[])

  return (
      <div className="container">
        <div className="left">
          <div className="input-wrapper">
          <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Input your city"/>
          <button onClick={searchPressed} className="input-button"><img src="./search.png" width='100%' alt="search"/></button>
          </div>
          <div className="img-wrapper">
            <img src={img} alt="Sun and cloud" width='100%'/>
          </div>

          <div className="general-info">
          <h1>{typeof weather.main !== 'undefined' ? (weather.main.temp) : 31}°C</h1>
          <h2>{typeof weather.main !== 'undefined' ? (weather.weather[0].main) : 'Clouds'}</h2>
          </div>

          <span className="middle-line"></span>

          <div className="more-info">
            <h2>Date and time of request <br/> information:</h2>
            <h2>{day}</h2>
            <h2>{time}</h2>
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