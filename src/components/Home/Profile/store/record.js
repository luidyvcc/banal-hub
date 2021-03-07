import { Record as RecordImmutable } from 'immutable';

export const Record = RecordImmutable({
  isLoading: false,
  errorMessage: '',
  successMessage: '',
  data: {},
});
