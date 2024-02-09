import React from 'react';
import { GoPaperAirplane } from "react-icons/go";
import ProgressBar from 'react-bootstrap/ProgressBar';


const Highlights = ({stats}) => {
  return (
    <div className='highlight-box p-2 m-1'>

      <h2 className='small' style={{color:"white"}}>{stats.title}</h2>
      
      <div className='status'>
        <span className='fw-bold degree-span'>{stats.value}</span>
        <span className='status-span'>{stats.unit}</span>
      </div>

      {
        stats.direction ? (
        <div className="direaction d-flex">
            <div className='d'>
                <GoPaperAirplane className='direction-icon'/>
            </div>
            <div className='ms-1 fw-bold ' style={{color:"white"}}>{stats.direction}</div>
        </div>
        ):null
      }
      {
        stats.title === "Humidity" ? (

            <ProgressBar  animated variant="info" now={stats.value} style={{width:"120px"}}/>
        ): null
      }

    </div>
  )
}

export default Highlights
