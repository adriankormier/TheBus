import React from 'react';
// import fetch from 'node-fetch';

const MainContainer = () => {

  const findBuses = () => {
    const stopNum = document.getElementById('stopNum').value;
    console.log(stopNum)
    fetch(`http://api.thebus.org/arrivalsJSON/?key=44D9A6F4-5C07-47B8-9F63-75977C7D713E&stop=${stopNum}`, {
      headers: { 'Content-Type': 'application/json' },
      // mode: 'no-cors'
    })
    .then(result => result.json())
    .then(result => {
      console.log(result)
      // res.locals.stopInfo = result;
      // res.status(200).send(res.locals.stopInfo)
    })
    .catch(error => {
      console.log(error);
    })
    console.log('Button Clicked!')
  }


  return (
    <div className="container">
      <form>
          <input type="text" id="stopNum" name="stopNum" placeholder='Input stop # here...'>
          </input>
          <input type="button" id="busButton" value="Find Buses" onClick={findBuses}></input>
      </form>
      
    </div>
  )
}

export default MainContainer;