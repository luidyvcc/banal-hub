import React, { memo } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, WrapperError, Title } from './styles';

const Error = ({ errorMessage }) => (
  <Wrapper>
    <WrapperError>
      <Icon icon={faFrown} />
      <Title>
        {errorMessage || 'Oops, an error occurred, please try again later or contact our support'}
      </Title>
    </WrapperError>
  </Wrapper>
);

export default memo(Error);