import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer, { intitialState } from './RootReducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export function configureStore(state = intitialState) {
  const store = createStore(
    RootReducer,
    state,
    bindMiddleware([thunkMiddleware])
  );
  return store;
}

export default configureStore;
