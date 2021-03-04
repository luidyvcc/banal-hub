import React from 'react';

import { Wrapper, Title, Content } from './styles';

const Container = ({ children, title }) => 
  <Wrapper>
    {Boolean(title) && <Title>{title}</Title>}
    <Content>{children}</Content>
  </Wrapper>;

export default Container;