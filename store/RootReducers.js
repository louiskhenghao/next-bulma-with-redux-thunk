import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import Clock from './Clock/reducers';
import Count from './Count/reducers';
import Posts from './Posts/reducers';
import Filter from './Filter/reducers';

export const intitialState = Immutable.Map();

export default combineReducers({
  Clock,
  Count,
  Posts,
  Filter,
});
