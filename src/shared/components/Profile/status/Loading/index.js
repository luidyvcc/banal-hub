import React, { memo } from 'react';

import { Wrapper, Img, Skeleton } from './styles';

const Default = () => (
  <Wrapper>
    <Img />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton gridcolumn="1 / 3" />
    <Skeleton gridcolumn="1 / 3" />
  </Wrapper>
);

export default memo(Default);