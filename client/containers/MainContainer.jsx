import React, { useEffect, useState } from 'react';
import BusFinder from '../components/BusFinder.jsx';
import BusList from '../components/BusList.jsx';

const MainContainer = () => {
  const [buses, setBuses] = useState([]);
  const newBusList = [];

  const [searching, setSearching] = useState(false);

  const findBuses = () => {
    const stopNum = document.getElementById('stopNum').value;
    setSearching(true);
    fetch(`/api/getstopinfo/${stopNum}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error(`HTTP error! status: ${result.status}`);
        } else {
          return result.json();
        }
      })
      .then((result) => {
        result.arrivals.forEach((el) => {
          newBusList.push(
            <BusList
              headsign={el.headsign}
              time={el.stopTime}
              route={el.route}
              searching={searching}
            />,
          );
        });
        setBuses(newBusList);
        setSearching(false);
      })
      .catch((error) => {
        console.error({ message: error });
        setSearching(false);
      });
  };

  return (
    <div className="flex flex-col bg-bus-image justify-start items-center m-4 p-4 rounded-sm h-[93dvh] shadow-[0.25em_0.55em_0.5em_0.05em_rgba(0,0,0,0.534)] bg-cover bg-center overflow-hidden">
      <BusFinder findBuses={findBuses} searching={searching} />
      {buses.length > 0 && (
        <div className="p-2 mt-4 flex-col flex-grow justify-center items-center w-4/5 rounded-lg shadow-[0.25em_0.25em_1em_0.05em_rgba(0,0,0,0.534)] overflow-y-scroll scroll- bg-gradient-to-r from-[rgba(0,0,0,0.637)] to-[rgba(255,255,255,0)]">
          {buses}
        </div>
      )}
    </div>
  );
};

export default MainContainer;
