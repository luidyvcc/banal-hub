import React, { useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faRunning, faSurprise } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';

import { thunks } from './store/thunk';

import { Wrapper, Title, Content, Item, Login, Circle, Img } from './styles';

const Followers = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.home.followers.data);
  const { length } = items;

  useEffect(() => {
    dispatch(thunks.getAll('luidyvcc'));
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>
        <Icon icon={faRunning} />
        Followers
        {length < 10 ? <Circle>{length}</Circle> : <Icon icon={faSurprise} />}
      </Title>
      <Content>
        {items.map(item => {
          return (
            <Item key={item.id}>
              <Img src={item.avatar_url}/>
              <Login>{item.login}</Login>
            </Item>
          );
        })}
      </Content>
    </Wrapper>
  );
}

export default Followers;