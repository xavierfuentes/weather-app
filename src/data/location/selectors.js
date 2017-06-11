import { createSelector } from 'reselect';

const locationSelector = (state) => state.location;

export const citySelector = createSelector(locationSelector, location => location.city && location.city.id && location.city);
