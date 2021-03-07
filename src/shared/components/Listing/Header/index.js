import React, { memo } from 'react';

import { Wrapper, Circle, Icon } from './styles';

const Listing = ({ title, icon, data = [], invertIcon }) => {
  const length = data.length;
  return (
    <Wrapper>
      <Icon icon={icon} invertIcon={invertIcon} />
      {title}
      {Boolean(length) && <>{
        length < 10 ? <Circle>{length}</Circle> : <Icon icon='fas fa-surprise' />
      }</>}
    </Wrapper>
  );
}

export default memo(Listing);