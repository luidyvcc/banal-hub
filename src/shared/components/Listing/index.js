import React, { memo } from 'react';

import { Wrapper } from './styles';
import Header from './Header';
import Body from './Body';

const Listing = ({ title, icon, data = [], errorMessage, isLoading, invertIcon }) => (
  <Wrapper>
    <Header
      title={title}
      icon={icon}
      data={data}
      invertIcon={invertIcon}
    />
    <Body
      data={data}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  </Wrapper>
);

export default memo(Listing);