import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = styled(FontAwesomeIcon)`
  transform: ${props => props.invertIcon && 'scaleX(-1)'};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  gap: 1rem; 
  font-size: 1.8rem;
`;

export const Circle = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.theme.colorA};
  color: ${props => props.theme.colorE};
  font-size: 1.4rem;
  line-height: 1;
`;
