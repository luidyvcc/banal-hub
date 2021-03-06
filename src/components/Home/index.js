import React from 'react';

import Container from '../../shared/components/Container';
import Section from '../../shared/components/Section';
import Grid from '../../shared/components/Grid';
import Cell from '../../shared/components/Grid/Cell';

import Followers from './Followers';
import Following from './Following';
import Search from './Search';
import Dog from './Dog';

const Home = () => (
  <Section>
    <Container title="BanalHub">
      <Grid>
        <Search gridcolumn="1 / span 3"/>
        <Cell><Followers /></Cell>
        <Cell><Dog /></Cell>
        <Cell><Following /></Cell>
      </Grid>
    </Container>
  </Section>
);

export default Home;