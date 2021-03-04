import React from 'react';
import Container from '../../shared/components/Container';
import Section from '../../shared/components/Section';
import Grid from '../../shared/components/Grid';
import Cell from '../../shared/components/Grid/Cell';
import Followers from './Followers';

const Home = () => (
  <Section>
    <Container title="Home">
      <Grid>
        <Cell><Followers /></Cell>
        <Cell>Fowlow</Cell>
        <Cell>Fowlow</Cell>
        <Cell>Fowlow</Cell>
        <Cell>Fowlow</Cell>
      </Grid>
    </Container>
  </Section>
);

export default Home;