import React, { useEffect, useState } from "react";
import Temprature from "./Temprature.jsx";
import Highlights from "./Highlights.jsx";
import axios from "axios";

const Weather = () => {

  const [city,setCity] = useState("New Delhi");
  const [weatherData,setWeatherData] = useState(null);
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=004d35bfb43e4eecbb581008240902&q=${city}&aqi=no`

  const dataFetch = async ()=>{
    await axios.get(apiURL)
    .then((response)=>{
      console.log(response.data)
      setWeatherData(response.data);
    }).catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    dataFetch()
    // eslint-disable-next-line
  },[city])



  return (
    <div className="div d-flex justify-content-center align-items-center">
      <div className="left">
    {weatherData && <Temprature 
        setCity={setCity}
        stats={weatherData ? {
          temp: weatherData.current.temp_c,
          condition: weatherData.current.condition.text,
          isday: weatherData.current.is_day,
          location: weatherData.location.name,
          time: weatherData.location.localtime
        }:null}
        />}
      </div>
      <div className="right p-4 ">
        <h5>Today's Highlights</h5>
        <div className="d-flex align-items-center flex-wrap gap-3">
          {/* condition data will be render after the weather data completelly fetch */}
          {
            weatherData &&
            <>
            <Highlights 
            stats={{
              title:"Wind Status",
              value:weatherData.current.wind_mph,
              unit:"mph",
              direction:weatherData.current.wind_dir
            }}
            />
              <Highlights 
              stats={{
                title:"Humidity",
                value:weatherData.current.humidity,
                unit:"%",
              }}
              />
            <Highlights 
            stats={{
              title:"Visibility",
              value:weatherData.current.vis_miles,
              unit:"miles"
            }}
            />
            <Highlights 
            stats={{
              title:"Air Pressure",
              value:weatherData.current.pressure_mb,
              unit:"mb"
            }}
            />            
            </>
          }
 
        </div>
      </div>
    </div>
  );
};

export default Weather;
