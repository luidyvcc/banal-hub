import React from 'react';

import { Wrapper } from './styles';

const Cell = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

export default Cell;