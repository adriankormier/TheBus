import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import BusList from './BusList.jsx';
// import fetch from 'node-fetch';

const BusFinder = ({ findBuses, searching }) => {
  // const [input, setInput] = useEffect();

  const handleInputChange = (e) => {
    // setInput(e.target.value);
  };

  return (
    <div className="w-1/4 min-w-fit p-4 rounded-md shadow-[0.25em_0.55em_0.5em_0.05em_rgba(0,0,0,0.534)] bg-gradient-to-b from-[rgba(0,0,0,0.322)] to-[rgba(255,255,255,0)]">
      <form className="flex items-center justify-center space-x-2">
        <label htmlFor="stopNum" className="not-italic font-normal font-oswald">
          Stop:
        </label>
        <input
          type="text"
          id="stopNum"
          name="stopNum"
          // onChange={handleInputChange}
          className="font-oswald bg-slate-950 bg-opacity-20 border-2 pl-1 h-8 w-32 border-[rgba(255,255,255,0.199)] rounded-md text-slate-200 text-md shadow-[0.25em_0.55em_0.5em_0.05em_rgba(0,0,0,0.534)] placeholder:text-slate-200 placeholder:opacity-70"
          placeholder="Input stop # here..."
        ></input>
        <button
          className={`font-oswald flex justify-center items-center w-8 h-8 text-2xl rounded-md mt-4 mb-4 bg-slate-950 bg-opacity-20 shadow-[0.25em_0.2em_0.2em_0.05em_rgba(0,0,0,0.349)] ${
            searching ? 'text-green-700' : 'text-gray-200'
          }`}
          type="button"
          id="busButton"
          onClick={findBuses}
        >
          {/* {searching ? 'Searching...' : 'Search'} */}
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default BusFinder;
