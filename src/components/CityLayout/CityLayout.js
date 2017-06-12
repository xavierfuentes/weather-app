import React from 'react';

function formatDate(timestamp) {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${days[timestamp.getDay()]} - ${months[timestamp.getMonth()]} ${("0" + timestamp.getDate()).slice(-2)}`;
}

const CityLayout = ({ city, timestamp }) => (
  <main>
    <div>{city.name}</div>
    <div>{formatDate(timestamp)}</div>
  </main>
);

export default CityLayout;
