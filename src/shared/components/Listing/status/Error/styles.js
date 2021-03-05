import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperError = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(2, min-content);
  justify-items: center;
  align-items: flex-end;
  text-align: center;
  font-size: 2.5rem;
`;

export const Title = styled.div`
  gap: 1rem; 
  font-size: 1.5rem;
  align-self: flex-start;
`;
