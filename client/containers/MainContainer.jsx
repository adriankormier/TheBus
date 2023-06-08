import React from 'react';
// import fetch from 'node-fetch';
import BusFinder, { buses } from '../components/BusFinder.jsx';
import BusList from '../components/BusList.jsx';

const MainContainer = () => {


  // TODO: Setup fetch request to send request to server.js which will route fetch request to api.js and then busStopController.js

  // const findBuses = () => {
  //   const stopNum = document.getElementById('stopNum').value;
  //   console.log(stopNum)
  //   fetch(`/api/getstopinfo/${stopNum}`, {
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //   .then(result => {
  //     if (!result.ok) {
  //       throw new Error(`HTTP error! status: ${result.status}`);
  //     } else {
  //       return result.json()
  //     }
  //   })
  //   .then(result => {
  //     console.log(result)
  //     //Build react component in here
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  //   console.log('Button Clicked!')
  // }



  return (
    <div className="container">
      <BusFinder />
      <div className='listContainer'>
        <BusList />
        {/* {buses} */}
      </div>
    </div>
  )
}

export default MainContainer;