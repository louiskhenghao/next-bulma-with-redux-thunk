import { createSelector } from 'reselect';

export const selectState = (state) => state.get('Clock');

export const selectClockState = createSelector([selectState], (clock) => clock);
