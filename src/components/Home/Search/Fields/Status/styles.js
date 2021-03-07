import styled from 'styled-components';
import media from 'styled-media-query';
import { Form as FormR, Select  as SelectR } from '@rocketseat/unform';

export const Form = styled(FormR)`
  background: ${props => props.theme.colorE};
  border-radius: 0.3rem;
  padding: 1rem;
  grid-column: ${props => props.gridcolumn};
  font-size: 1.6rem;

  position: absolute;
  right: 2rem;
  top: 2rem;

  ${media.lessThan("medium")`
    grid-column: unset;
    position: unset;
    right: unset;
    top: unset;
  `}
`;

export const Label = styled.label`
  font-weight: 600;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;
`;

export const Select = styled(SelectR)`
  border: none;  
  width: 100%;
  background-color: transparent;
  font-size: 1.6rem;
  option {
    background-color: ${props => props.theme.colorE};
    border: none;
  }
`;
