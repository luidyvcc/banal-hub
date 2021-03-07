import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { thunks } from './store/thunk';

import Card from '../../../shared/components/Card';
import Profile from '../../../shared/components/Profile';

const CurrentProfile = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.home.profile.data);
  const errorMessage = useSelector(state => state.home.profile.errorMessage);
  const isLoading = useSelector(state => state.home.profile.isLoading);
  const username = useSelector(state => state.home.search.username);
  const status = useSelector(state => state.home.search.status);

  useEffect(() => {
    if (username) dispatch(thunks.fetchProfile(username, status));
  }, [dispatch, username, status]);

  return (
    <Card
      title="Profile"
      icon="fas fa-user"
      data={data}
    >
      <Profile
        data={data}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </Card>
  );
}

export default CurrentProfile;
