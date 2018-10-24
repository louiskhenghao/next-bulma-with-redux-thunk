import Immutable from 'immutable';
import { INCREMENT, DECREMENT } from './actions';

const initialState = Immutable.fromJS({
  count: 0,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state.set('count', state.get('count') + 1);
    }
    case DECREMENT: {
      return state.set('count', state.get('count') - 1);
    }
    default: {
      return state;
    }
  }
};
