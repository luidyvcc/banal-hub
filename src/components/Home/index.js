import React from 'react';

import Container from '../../shared/components/Container';
import Section from '../../shared/components/Section';
import Grid from '../../shared/components/Grid';
import Cell from '../../shared/components/Grid/Cell';

import Followers from './Followers';
import Following from './Following';
import Search from './Search';
import Profile from './Profile';

const Home = () => (
  <Section>
    <Container title="BanalHub Staging">
      <Grid>
        <Search />
        <Cell><Followers /></Cell>
        <Cell><Profile /></Cell>
        <Cell><Following /></Cell>
      </Grid>
    </Container>
  </Section>
);

export default Home;