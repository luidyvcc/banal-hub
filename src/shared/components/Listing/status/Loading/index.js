import React, { memo } from 'react';

import { Item, Login, Img } from '../../styles';
const data = [...Array(10).keys()];

const Loading = () => data.map(item => (
  <Item key={item}>
    <Img isLoading />
    <Login isLoading />
  </Item>
));

export default memo(Loading);
