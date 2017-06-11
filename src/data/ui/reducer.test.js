import uiReducer, { initialState } from './reducer';

it('returns the default state for the wrong action type', () => {
  expect(uiReducer()).toEqual(initialState);
});
