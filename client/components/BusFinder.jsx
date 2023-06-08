import React, {useEffect, useState} from 'react';
import BusList from './BusList.jsx'
// import fetch from 'node-fetch';

const BusFinder = () => {


  // TODO: Setup fetch request to send request to server.js which will route fetch request to api.js and then busStopController.js
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
        if (newBusList.length < 11) newBusList.push(<BusList key={el.id} headsign={el.headsign} time={el.stopTime} route={el.route} />);
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
      <form>
          <input type="text" id="stopNum" name="stopNum" placeholder='Input stop # here...'></input>
          <input type="button" id="busButton" value="Find Buses" onClick={findBuses}></input>
          {buses}
      </form>
      <div className='busList'>
      </div>
    </div>
  )
}

export default BusFinder;