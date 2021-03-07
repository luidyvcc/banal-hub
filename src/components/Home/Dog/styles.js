import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: min-content 1fr;
  height: 100%;
`;

export const Icon = styled.i.attrs(props => ({
  className: props.icon
}))`
  font-size: 10rem;
  align-self: center;
  justify-self: center;
`;
