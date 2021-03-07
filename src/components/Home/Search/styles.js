import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  gap: 1.5rem;
  grid-column: ${props => props.gridcolumn};

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    grid-column: unset;
  `}
`;
