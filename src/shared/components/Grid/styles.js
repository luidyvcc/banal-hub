import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: max-content;
  grid-auto-rows: 300px;
  gap: 1.5rem;

  ${media.lessThan("large")`
    grid-template-columns: 3fr 3fr 3fr;
  `}

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  `}
`;
