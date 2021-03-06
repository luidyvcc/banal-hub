import { createActions, handleActions } from 'redux-actions';
import { Record } from './record';

export const actions = createActions(
  {
    REQUEST: null,
    RECEIVE: items => items,
    FAILURE: error => error,
  },
  { prefix: 'HOME/FOLLOWING' }
);

const INITIAL_STATE = new Record();

export default handleActions({
  [actions.request]: state => state
    .set('isLoading', true)
    .set('errorMessage', '')
    .set('successMessage', ''),
  [actions.receive]: (state, action) => state
    .set('data', action.payload)
    .set('isLoading', false),
  [actions.failure]: (state, action) => {
    return state
    .set('errorMessage', action.payload.message)
    .set('successMessage', '')
    .set('isLoading', false)
  },
}, INITIAL_STATE);
