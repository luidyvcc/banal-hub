import React, { memo, useCallback } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, Title, Content, Item, Login, Circle, Img } from './styles';
import Error from './status/Error';
import Loading from './status/Loading';
import Empty from './status/Empty';

const Listing = ({ title, icon, data, errorMessage, isLoading }) => {
  const length = data.length;

  const getItems = useCallback(() => (
    data.map(item => (
      <Item key={item.id}>
        <Img src={item.avatar_url} />
        <Login>{item.login}</Login>
      </Item>
    ))
  ), [data]);

  return (
    <Wrapper>
      <Title>
        <Icon icon={icon} />
        {title}
        {length < 10 ? <Circle>{length}</Circle> : <Icon icon={faSurprise} />}
      </Title>
      <Content>
        {isLoading ? <Loading /> : <>
          {errorMessage ? <Error /> : <>
            {length ? getItems() : <Empty />}
          </>}
        </>}
      </Content>
    </Wrapper>
  );
}

export default memo(Listing);