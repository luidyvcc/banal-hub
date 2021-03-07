import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { thunks } from './store/thunk';

import Listing from '../../../shared/components/Listing';

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

  return (
    <Listing
      title="Followers"
      icon="fas fa-running"
      invertIcon
      data={data}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
}

export default Followers;
