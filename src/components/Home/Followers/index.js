import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { thunks } from './store/thunk';

import Card from '../../../shared/components/Card';
import Listing from '../../../shared/components/Listing';
import { actions } from '../Search/store/duck';

const Followers = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.home.followers.data);
  const errorMessage = useSelector(state => state.home.followers.errorMessage);
  const isLoading = useSelector(state => state.home.followers.isLoading);
  const username = useSelector(state => state.home.search.username);
  const status = useSelector(state => state.home.search.status);

  useEffect(() => {
    if (username) dispatch(thunks.getAll(username, status));
  }, [dispatch, username, status]);

  const changeProfile = useCallback(login => dispatch(actions.setUsername(login)),[dispatch]);

  return (
    <Card
      title="Followers"
      icon="fas fa-running"
      data={data}
      invertIcon
    >
      <Listing
        data={data}
        errorMessage={errorMessage}
        isLoading={isLoading}
        onClick={changeProfile}
      />
    </Card>
  );
}

export default Followers;
