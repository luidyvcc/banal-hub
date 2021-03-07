import React, { memo } from 'react';

import { Wrapper, Header, Body, Footer, Img, Login, Name, Location, SeeMore } from './styles';

const Default = ({ data }) => (
  <Wrapper>
    <Header>
      <Img src={data.avatar_url} />
      <Name>{data.name}</Name>
      <Login><b>Login:</b> {data.login}</Login>
      {data.location && <Location><b>Location:</b> {data.location}</Location>}
    </Header>
    <Body>
      {data.bio && <><b>Bio:</b> {data.bio}</>}
    </Body>
    <Footer>
      <SeeMore href={data.html_url}>See more</SeeMore>
    </Footer>
  </Wrapper>
);

export default memo(Default);