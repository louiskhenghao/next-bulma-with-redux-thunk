import Immutable from 'immutable';
import { TICK_CLOCK, START_CLOCK, STOP_CLOCK } from './actions';

const initialState = Immutable.fromJS({
  lastUpdate: 0,
  status: 'stopped',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case START_CLOCK:
    case TICK_CLOCK:
      const isRunning = action.type === TICK_CLOCK;
      return state
        .set('status', isRunning ? 'running' : 'start')
        .set('lastUpdate', action.ts);
    case STOP_CLOCK:
      return state.set('status', 'stopped');
    default: {
      return state;
    }
  }
};
