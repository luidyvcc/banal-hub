import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form as FormR, Input as InputR } from '@rocketseat/unform';

export const Form = styled(FormR)`
  display: grid;
  grid-template-columns: 1fr max-content;
  place-items: center;
  background: ${props => props.theme.colorE};;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.6rem;
`;

export const Label = styled.label`
  font-weight: 600;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;
  width: 100%;
`;

export const Input = styled(InputR)`
  border: none;
  width: 100%;
  background-color: transparent;
`;

export const WrapperIcon = styled.button.attrs(() => ({
  type: 'submit'
}))`
  display: flex;
  place-items: center;
  margin-left: 1rem;
  width: 1.8rem;
  height: 1.8rem;
  padding: 0;
  border: none;
  background: none;
  :focus {
    outline: none !important;
  }
`;

export const IconSearch = styled(Icon).attrs(() => ({
  icon: faSearch
}))`
  color: ${props => props.theme.colorA};
  :hover {
    cursor: pointer;
    font-size: 2.5rem;
    position: fixed;
    transform: translateX(-25%);
  }
`;


