import React, { memo } from 'react';

import { Item } from './styles';
const data = [...Array(6).keys()];

const Loading = () => data.map(item => (
  <Item key={item}></Item>
));

export default memo(Loading);
