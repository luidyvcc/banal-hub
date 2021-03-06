import { createActions, handleActions } from 'redux-actions';
import { Record } from './record';

export const actions = createActions(
  {
    SET_USERNAME: value => value,
    SET_STATUS: value => value,
  },
  { prefix: 'HOME/SEARCH' }
);

const INITIAL_STATE = new Record();

export default handleActions({
  [actions.setUsername]: (state, action) => state.set('username', action.payload),
  [actions.setStatus]: (state, action) => state.set('status', action.payload)
}, INITIAL_STATE);
