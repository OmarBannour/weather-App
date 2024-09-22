import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import img from "../assets/search.png";
import cloud from "../assets/cloud.png";
import clear from "../assets/clear.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const Weather = () => {

  const inputref=useRef();

const [weatherdata ,setWeatherdata] =useState(false)

const allIcons={
  "01d":clear,
  "01n":clear,
  "02d":cloud,
  "02n":cloud,
  "03d":cloud,
  "03dn":cloud,
  "04d":drizzle,
  "04n":drizzle,
  "09d":rain,
  "09n":rain,
  "10d":rain,
  "10n":rain,
  "13d":snow,
  "13n":snow,
}

  const search = async (city) => {
if(city===""){
  alert("Enter City Name");
  return;
}

    try {
      const apiKey = import.meta.env.VITE_APP_ID;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();
      if(response.status===404){
        alert("City not found ;Please enter a valid name.")
        return;
      }
      console.log(data);
      const icon= allIcons[data.weather[0].icon] || clear;
      setWeatherdata({
        humidity: data.main.humidity,
        windSpeed:data.wind.speed,
        temperture : Math.floor(data.main.temp),
        location : data.name,
        icon: icon


      })
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("canada");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputref} type="text" placeholder="Search" />
        <img src={img} alt="Search"  onClick={()=>search(inputref.current.value)} />
      </div>
      <img src={weatherdata.icon} alt="Weather Icon" className="weather-icon" />
      <p className="temp">{weatherdata.temperture}°c</p>
      <p className="location">{weatherdata.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="Humidity" />
          <div>
            <p>{weatherdata.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind} alt="Wind Speed" />
          <div>
            <p>{weatherdata.windSpeed}Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

