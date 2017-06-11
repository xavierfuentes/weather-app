import React from 'react';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';
/* eslint-enable import/first */

import City from '../../containers/City/City';

const AppLayout = ({ isAppReady }) =>
  <main>
    {isAppReady
      ? <section>
          <City />
        </section>
      : <article>Loading...</article>}
  </main>;

export default AppLayout;
