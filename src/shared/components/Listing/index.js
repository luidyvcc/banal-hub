import React, { memo, useCallback } from 'react';

import { Wrapper, WrapperImg, Item, Login, Img } from './styles';
import Error from './status/Error';
import Loading from './status/Loading';
import Empty from './status/Empty';

const Listing = ({ data, errorMessage, isLoading, onClick = () => {} }) => {
  const getItems = useCallback(() => (
    data.map(item => (
      <Item key={item.id} onClick={() => onClick(item.login)}>
        <WrapperImg><Img src={item.avatar_url} /></WrapperImg>        
        <Login>{item.login}</Login>
      </Item>
    ))
  ), [data, onClick]);

  return (
    <Wrapper>
      {isLoading ? <Loading /> : <>
        {errorMessage ? <Error /> : <>
          {data.length ? getItems() : <Empty />}
        </>}
      </>}
    </Wrapper>
  );
}

export default memo(Listing);