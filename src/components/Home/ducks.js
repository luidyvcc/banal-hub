import { combineReducers } from 'redux';
import followers from './Followers/store/duck';
import following from './Following/store/duck';
import search from './Search/store/duck';

export default combineReducers({
  search,
  followers,
  following,
});
