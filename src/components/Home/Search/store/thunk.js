import { actions } from './duck';
import { apis } from './apis';

export const thunks = {
  getAll: username => (dispatch, getState) => {
    dispatch(actions.request());
    apis.getAll(username).then(data => dispatch(actions.receive(data)));    
  }
};
