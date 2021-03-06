import { actions } from './duck';
import { apis } from './apis';
import { FETCH_DELAY } from '../../../../shared/constants/times';

export const thunks = {
  getAll: (username, status) => dispatch => {
    dispatch(actions.request());
    
    switch (status) {
      case 'loading':
        dispatch(actions.receive([]));
        dispatch(actions.request());
        break;

      case 'error':
        dispatch(actions.failure(new Error('Error')));
        break;

      case 'empty':
        dispatch(actions.receive([]));
        break;
    
      default:
        setTimeout(() => {
          apis.getAll(username)
            .then(res => dispatch(actions.receive(res)))
            .catch(err => dispatch(actions.failure(new Error(err))));
        }, FETCH_DELAY);
        break;
    }
  }
};
