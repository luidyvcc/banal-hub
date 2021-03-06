import React from 'react';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';

import Header from '../../../shared/components/Listing/Header';
import { Wrapper, Icon } from './styles';

const Dog = () => (
  <Wrapper>
    <Header
      title="Hot Dog"
      icon={faHotdog}
    />
    <Icon icon={faHotdog} />
  </Wrapper>
);

export default Dog;
