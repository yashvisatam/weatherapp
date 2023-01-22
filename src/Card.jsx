import React from 'react';


const Card = ({weather}) => {
  
  return (
    <div className="weathercard">
      <h6>{weather.name}</h6>
      <h6>{weather.state}</h6>
      <h6>{weather.lat}</h6>
      <h6>{weather.lon}</h6> 

    </div>
  )
}

export default Card;
