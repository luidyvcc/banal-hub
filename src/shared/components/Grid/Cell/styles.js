import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => props.theme.colorA};
  background: ${props => props.theme.colorE};
  padding: 1rem;
  border-radius: 0.5rem;
  grid-column: ${props => props.gridcolumn};
`;
