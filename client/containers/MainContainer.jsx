import React, { useEffect, useState } from 'react';
// import fetch from 'node-fetch';
import BusFinder from '../components/BusFinder.jsx';
import BusList from '../components/BusList.jsx';
// import e from 'express';

const MainContainer = () => {

  const [buses, setBuses] = useState([]);
  const newBusList = [];

  const findBuses = () => {
    const stopNum = document.getElementById('stopNum').value;
    console.log(stopNum)
    fetch(`/api/getstopinfo/${stopNum}`, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(result => {
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      } else {
        return result.json()
      }
    })
    .then(result => {
      console.log(result)
      result.arrivals.forEach(el => {
        console.log(el.headsign);
        if (newBusList.length < 24) newBusList.push(<BusList key={el.id} headsign={el.headsign} time={el.stopTime} route={el.route} />);
      })
      setBuses(newBusList);
    })
      //Build react component in here
    .catch(error => {
      console.log(error);
    })
    console.log('Button Clicked!')
  }


  return (
    <div className="busFinderContainer">
      <div className="buttonContainer">
        <BusFinder findBuses={findBuses} />
      </div>
      <div className='listContainer'>
        {buses}
      </div>
    </div>
  )
}

export default MainContainer;