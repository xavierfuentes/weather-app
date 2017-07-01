import React from 'react';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';
/* eslint-enable import/first */

import ActivePrediction from '../../containers/ActivePrediction/ActivePrediction';
import PredictionsList from '../../containers/PredictionsList/PredictionsList';

const AppLayout = ({ isAppReady }) =>
  <main>
    {isAppReady
      ? <section>
          <ActivePrediction />
          <PredictionsList />
        </section>
      : <article>Loading...</article>}
  </main>;

export default AppLayout;
