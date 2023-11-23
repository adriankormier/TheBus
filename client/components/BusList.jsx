import React from 'react';

const BusList = ({ headsign, time, route }) => {
  return (
    <div className="border-b-2 border-[rgba(151,151,151,0.438)] ml-4">
      <p>
        Route # {route} Arriving at {time}
      </p>
      <p>{headsign}</p>
    </div>
  );
};

export default BusList;
