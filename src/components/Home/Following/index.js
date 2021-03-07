import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { thunks } from './store/thunk';

import Listing from '../../../shared/components/Listing';

const Following = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.home.following.data);
  const errorMessage = useSelector(state => state.home.following.errorMessage);
  const isLoading = useSelector(state => state.home.following.isLoading);
  const username = useSelector(state => state.home.search.username);
  const status = useSelector(state => state.home.search.status);

  useEffect(() => {
    if (username) dispatch(thunks.getAll(username, status));
  }, [dispatch, username, status]);

  return (
    <Listing
      title="Following"
      icon="fas fa-running"
      data={data}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
}

export default Following;
