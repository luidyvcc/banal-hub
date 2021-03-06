import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/duck';

import { Form, Label, Input, WrapperIcon, IconSearch } from './styles';

const Username = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.home.search.username);

  const handleSubmit = data => {
    dispatch(actions.setUsername(data.username));
  }

  return (
    <Form onSubmit={handleSubmit} initialData={{ username }}>
      <Label>
        Search:
        <Input name="username" defaultValue="mauro" />
      </Label>
      <WrapperIcon><IconSearch /></WrapperIcon>
    </Form>
  );
};

export default Username;
