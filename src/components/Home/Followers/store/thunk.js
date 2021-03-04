import { actions } from './duck';
import { apis } from './apis';

export const thunks = {
  getAll: username => (dispatch, getState) => {
    dispatch(actions.request());
    console.log('getState: ', getState());
    apis.getAll(username).then(data => dispatch(actions.receive(data)));
    
  }
};
