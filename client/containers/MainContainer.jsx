import React from 'react';
import fetch from 'node-fetch';

const MainContainer = () => {

  const findBuses = () => {
    fetch()
  }
  return (
    <div className="container">
      <button id="busButton" onClick={findBuses}>Click to see incoming buses!</button>
    </div>
  )
}

export default MainContainer;