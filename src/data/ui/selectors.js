import { createSelector } from 'reselect';

import { citySelector } from '../location/selectors';

// const uiSelector = state => state.ui;

export const isAppReady = createSelector(citySelector, city => city && !!city.id);
