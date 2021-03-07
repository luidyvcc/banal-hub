import React, { memo } from 'react';
import Default from './status/Default';

import { Wrapper } from './styles';
import Error from './status/Error';
import Loading from './status/Loading';
import Empty from './status/Empty';

const Profile = ({ data, errorMessage, isLoading }) => (
  <Wrapper>
    {isLoading ? <Loading /> : <>
      {errorMessage ? <Error /> : <>
        {data !== {} ? <Default data={data} /> : <Empty />}
      </>}
    </>}
  </Wrapper>
);

export default memo(Profile);