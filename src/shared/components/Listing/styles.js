import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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

export const Item = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 1rem;
  align-items: center;
  background: ${props => props.theme.colorA};
  color: ${props => props.theme.colorE};
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  height: 2.2rem;
  :hover {
    cursor: pointer;
    filter: brightness(0.9);
    Img {
      filter: unset;
    }
  }
`;

export const WrapperImg = styled.div`
  width: 2.2rem;
  height: 2.2rem;
`;

export const Img = styled(LazyLoadImage)`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50pc;
  filter: grayscale(100%);
`;

export const Login = styled.div``;
