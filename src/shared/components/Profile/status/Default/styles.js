import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr;
  gap: 1rem;
  color: ${props => props.theme.colorA};
  font-size: 1.6rem;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 1rem;
`;

export const Body = styled.div``;

export const Footer = styled.div`
  place-self: center;
`;

export const Name = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

export const Login = styled.div``;

export const Location = styled.div``;

export const SeeMore = styled.a.attrs(() => ({
  target: '__blank'
}))`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  :hover {
    filter: brightness(0.9);
  }
`;

export const Img = styled.img`
  grid-row: 1 / 4;
  height: 9.5rem;
  border-radius: 50pc;
`;
