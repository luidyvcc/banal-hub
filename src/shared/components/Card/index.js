import React, { memo } from 'react';

import Header from './Header';
import { Wrapper } from './styles';

const Card = ({ title, icon, data = [], invertIcon, children }) => (
  <Wrapper>
    <Header
      title={title}
      icon={icon}
      data={data}
      invertIcon={invertIcon}
    />
    {children}
  </Wrapper>
);

export default memo(Card);