import React from 'react'
import "./Weather.css"
import img from "../assets/search.png"
import cloud from "../assets/cloud.png"
import clear from "../assets/clear.png"
import drizzle from "../assets/drizzle.png"
import humidity from "../assets/humidity.png"
import rain from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"


const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img src={img} alt="" />
        </div>
        <img src={clear}alt="" className='weather-icon' />
        <p className='temp'>16°c</p>
        <p>London</p>
      
    </div>
  )
}

export default Weather 
