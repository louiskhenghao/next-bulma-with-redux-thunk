import Immutable from 'immutable';
import { SELECT_SUBREDDIT } from './actions';

const initialState = Immutable.fromJS({
  post: 'reactjs',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT: {
      const { subreddit } = action;
      let newState = state;
      newState = newState.set('post', subreddit);
      return newState;
    }
    default:
      return state;
  }
};
