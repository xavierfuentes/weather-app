import React from 'react';
import styled from 'styled-components';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
/* eslint-enable import/first */

import ActivePrediction from '../containers/ActivePrediction';
import PredictionsList from '../containers/PredictionsList';

const AppStyled = styled.main`
  font-size: 16px;
  font-family: Lato, sans-serif;
`;

const AppLayout = ({ isAppReady }) => (
  <AppStyled>
    {isAppReady ? (
      <section>
        <ActivePrediction />
        <PredictionsList />
      </section>
    ) : (
      <article>Loading...</article>
    )}
  </AppStyled>
);

export default AppLayout;
