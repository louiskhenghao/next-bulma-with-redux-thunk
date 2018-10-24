import { createSelector } from 'reselect';
import Immutable from 'immutable';
import { selectCurrentSubreddit } from 'store/Filter/selectors';

export const selectState = (state) => state.get('Posts');

export const selectSubRedditPosts = createSelector(
  [selectState, selectCurrentSubreddit],
  (postsState, currentReddit) => postsState.get(currentReddit, Immutable.Map())
);
