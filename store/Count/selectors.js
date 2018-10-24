import { createSelector } from 'reselect';

export const selectState = (state) => state.get('Count');

export const selectCountNumber = createSelector([selectState], (count) =>
  count.get('count')
);
