import React from 'react';


const BusList = ({ headsign, time, key, route}) => {



  return (
    <div className='listItem'>
      <p>Route #  {route} Arriving at  { time }</p>
     <p>{ headsign }</p>
    </div>
  )
}

export default BusList;