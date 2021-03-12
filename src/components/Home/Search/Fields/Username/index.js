import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/duck';

import { Form, Label, Input, WrapperIcon, Icon } from './styles';

const Username = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.home.search.username);

  const handleSubmit = useCallback(data => {
    dispatch(actions.setUsername(data.username));
  }, [dispatch]);

  return (
    <Form onSubmit={handleSubmit} initialData={{ username }}>
      <Label>
        Search:
        <Input name="username" defaultValue="mauro" />
      </Label>
      <WrapperIcon><Icon /></WrapperIcon>
    </Form>
  );
};

export default Username;
