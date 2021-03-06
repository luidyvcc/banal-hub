import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: min-content 1fr;
  height: 100%;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 10rem;
  align-self: center;
  justify-self: center;
`;
