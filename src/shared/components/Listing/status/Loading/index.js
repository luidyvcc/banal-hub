import React, { memo } from 'react';
import Shimmer from "react-shimmer-effect";

import { Item } from './styles';
const data = [...Array(6).keys()];

const Loading = () => data.map(item => (
  <Item key={item}></Item>
));

export default memo(Loading);
