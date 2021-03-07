import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: auto;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;

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
