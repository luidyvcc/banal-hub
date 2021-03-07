import React, { memo } from 'react';

import { Wrapper, WrapperError, Title } from './styles';

const Empty = ({ emptyMessage }) => (
  <Wrapper>
    <WrapperError>
      <i className="fas fa-wind"></i>
      <Title>
        {emptyMessage || 'There\'s nothing here'}
      </Title>
    </WrapperError>
  </Wrapper>
);

export default memo(Empty);