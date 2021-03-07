import React from 'react';

import Header from '../../../shared/components/Listing/Header';
import { Wrapper, Icon } from './styles';

const Dog = () => (
  <Wrapper>
    <Header title="Hot Dog" icon="fas fa-hotdog" />
    <Icon icon="fas fa-hotdog" />
  </Wrapper>
);

export default Dog;
