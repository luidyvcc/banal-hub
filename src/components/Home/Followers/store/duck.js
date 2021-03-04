import { createActions, handleActions } from 'redux-actions';
import { FollowersRecord } from './record';

export const actions = createActions(
  {
    REQUEST: null,
    RECEIVE: items => items,
    FAILURE: error => error,
  },
  { prefix: 'HOME/FOLLOWERS' }
);

const INITIAL_STATE = new FollowersRecord();

export default handleActions({
  [actions.request]: state => state
    .set('isLoading', true)
    .set('errorMessage', '')
    .set('successMessage', ''),
  [actions.receive]: (state, action) => state
    .set('data', action.payload)
    .set('isLoading', false),
  [actions.failure]: (state, action) => state
    .set('isLoading', false)
    .set('errorMessage', '')
    .set('errorMessage', action.payload.message),
}, INITIAL_STATE);
