import { Record } from 'immutable';

export const FollowersRecord = Record({
  isLoading: false,
  errorMessage: '',
  successMessage: '',
  data: [],
});
