import React from 'react';

import Status from './Fields/Status';
import Username from './Fields/Username';
import { Wrapper } from './styles';

const Search = () => {

  return (
    <Wrapper>
      <Username />
      <Status gridcolumn="3 / 3"/>
    </Wrapper>
  );
};

export default Search;
