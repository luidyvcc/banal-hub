import React, { useEffect } from 'react';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { thunks } from './store/thunk';

import Listing from '../../../shared/components/Listing';

const Followers = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.home.followers.data);
  const errorMessage = useSelector(state => state.home.followers.errorMessage);
  const isLoading = useSelector(state => state.home.followers.isLoading);

  useEffect(() => {
    dispatch(thunks.getAll('luidyvcc'));
  }, [dispatch]);

  return (
    <Listing
      title="Followers"
      icon={faRunning}
      data={data}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
}

export default Followers;
