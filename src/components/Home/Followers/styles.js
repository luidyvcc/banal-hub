import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: min-content 1fr;
  height: 100%;
`;

export const Title = styled.div`
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

export const Content = styled.div`
  display: grid;
  grid-auto-rows: auto;
  gap: 1rem;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  ::-webkit-scrollbar-thumb {
    height: 6px;
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.colorA};
    border-radius: 0.3rem;
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
 `;

export const Item = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 1rem;
  align-items: center;
  background: ${props => props.theme.colorA};
  color: ${props => props.theme.colorE};
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50pc;
  border: 2px solid ${props => props.theme.colorE};
`;

export const Login = styled.div``;


