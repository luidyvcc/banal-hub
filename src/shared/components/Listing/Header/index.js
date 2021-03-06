import React, { memo } from 'react';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, Circle, Icon } from './styles';

const Listing = ({ title, icon, data = [], invertIcon }) => {
  const length = data.length;
  return (
    <Wrapper>
      <Icon icon={icon} invertIcon={invertIcon} />
      {title}
      {Boolean(length) && <>{
        length < 10 ? <Circle>{length}</Circle> : <Icon icon={faSurprise} />
      }</>}
    </Wrapper>
  );
}

export default memo(Listing);