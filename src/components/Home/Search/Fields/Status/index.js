import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/duck';

import { Form, Label, Select } from './styles';

const Status = ({ ...props }) => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.home.search.status);
  
  const onChange = e => {
    dispatch(actions.setStatus(e.target.value));
  }

  const options = [
    { id: 'none', title: 'None' },
    { id: 'loading', title: 'Loading' },
    { id: 'error', title: 'Error' },
    { id: 'empty', title: 'Empty' },
  ];

  return (
    <Form {...props} initialData={{ status }}>
      <Label>
        Simulate effect:
        <Select name="status" options={options} onChange={onChange} />
      </Label>
    </Form>
  );
};

export default Status;
