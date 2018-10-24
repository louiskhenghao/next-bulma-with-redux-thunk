import { createSelector } from 'reselect';

export const selectState = (state) => state.get('Filter');

export const selectCurrentSubreddit = createSelector(
  [selectState],
  (filter) => {
    return filter.get('post', 'reactjs');
  }
);
