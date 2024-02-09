import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";



const Temprature = ({ setCity , stats}) => {

    const handleCity = (e) => {
        // console.log(e.target.value);
        setCity(e.target.value);
    }

  return (
    <>
    <div className='d-flex justify-content-between'>
        <div className="input">

         <input type="text" className='input-city p-2  rounded-1 w-60'  placeholder='Enter Your City Name:' onChange={handleCity} defaultValue="New Delhi" />
        </div>

         <div className="m-1">
          <FaLocationDot className='icon' />
        </div>
        
    </div>
    <div className='moon-icon'>
      {stats.isday !== 0 ?(

        <IoSunnyOutline className='sun'/>
      ):
      (
        <FiMoon className='moon'/>
      )
      }
    </div>

    <div className="d-flex justify-content-center mt-3 degree">
      <p>{stats.temp}</p><span>°C</span>
    </div>

    <div className="d-flex justify-content-center mt-2 weather-type">
      <p>{stats.condition}</p>
    </div>

    <div className="d-flex justify-content-center  mt-2 date">
      <p>Today : {stats.time} | {stats.location}</p>
    </div>
    </>
  )
}

export default Temprature
