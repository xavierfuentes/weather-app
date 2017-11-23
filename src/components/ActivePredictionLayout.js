import React from 'react';
import styled from 'styled-components';

import CityNameStyled from './CityNameStyled';
import DateTimeStyled from './DateTimeStyled';

const ActivePredictionStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 .938em;
`;

function formatDate(timestamp) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = `${days[timestamp.getDay()]} | ${months[timestamp.getMonth()]} ${('0' + timestamp.getDate()).slice(-2)}`;
  const time = `${('0' + timestamp.getHours()).slice(-2)}:${('0' + timestamp.getMinutes()).slice(-2)}`;

  return `${date} | ${time}`;
}

const ActivePredictionLayout = ({ city, timestamp }) =>
  <ActivePredictionStyled>
    <CityNameStyled>
      {city.name}
    </CityNameStyled>
    {timestamp &&
      <DateTimeStyled>
        {formatDate(timestamp)}
      </DateTimeStyled>}
  </ActivePredictionStyled>;

export default ActivePredictionLayout;
