import React, { memo } from 'react';

import { Wrapper, WrapperError, Title } from './styles';

const Error = ({ errorMessage }) => (
  <Wrapper>
    <WrapperError>
      <i className="fas fa-frown"></i>
      <Title>
        {errorMessage || 'Oops, an error occurred, please try again later or contact our support'}
      </Title>
    </WrapperError>
  </Wrapper>
);

export default memo(Error);