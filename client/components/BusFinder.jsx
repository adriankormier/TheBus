import React, {useEffect, useState} from 'react';
import BusList from './BusList.jsx'
// import fetch from 'node-fetch';

const BusFinder = ({ findBuses }) => {


  return (
    <div>
      <form>
          <input type="text" id="stopNum" name="stopNum" placeholder='Input stop # here...'></input>
          <input type="button" id="busButton" value="Find Buses" onClick={findBuses}></input>
      </form>
    </div>
  )
}

export default BusFinder;