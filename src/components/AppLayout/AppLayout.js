import React from 'react';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
/* eslint-enable import/first */

import AppStyled from './AppStyled';
import ActivePrediction from '../../containers/ActivePrediction/ActivePrediction';
import PredictionsList from '../../containers/PredictionsList/PredictionsList';

const AppLayout = ({ isAppReady }) =>
  <AppStyled>
    {isAppReady
      ? <section>
          <ActivePrediction />
          <PredictionsList />
        </section>
      : <article>Loading...</article>}
  </AppStyled>;

export default AppLayout;
