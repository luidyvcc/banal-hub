import React, { memo } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, WrapperError, Title } from './styles';

const Empty = ({ emptyMessage }) => (
  <Wrapper>
    <WrapperError>
      <Icon icon={faWind} />
      <Title>
        {emptyMessage || 'There\'s nothing here'}
      </Title>
    </WrapperError>
  </Wrapper>
);

export default memo(Empty);