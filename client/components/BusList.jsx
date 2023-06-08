import React from 'react';


const BusList = ({ headsign, time, key, route}) => {



  return (
    <span>
      <p>{route} { time }</p>
     <p>{ headsign }</p>
    </span>
    
  )
}

export default BusList;