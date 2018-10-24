import Immutable from 'immutable';
import { REQUEST_POSTS_START, REQUEST_POSTS_SUCCESS } from './actions';

const initialState = Immutable.fromJS({
  isFetching: false,
  items: [],
});

function construct(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS_START: {
      let newState = state;
      newState = newState.set('isFetching', true);
      return newState;
    }
    case REQUEST_POSTS_SUCCESS: {
      let newState = state;
      newState = newState.merge({
        isFetching: false,
        lastUpdated: action.receivedAt,
        items: Immutable.fromJS(action.posts),
      });
      return newState;
    }
    default:
      return state;
  }
}

export default (state = Immutable.Map(), action) => {
  switch (action.type) {
    case REQUEST_POSTS_SUCCESS:
    case REQUEST_POSTS_START: {
      const { subreddit } = action;
      let newState = state;
      newState = newState.set(
        subreddit,
        construct(state.get(subreddit), action)
      );
      return newState;
    }
    default: {
      return state;
    }
  }
};
