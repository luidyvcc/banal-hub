import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 75%;  
  padding: 2rem;
  margin: auto;

  ${media.lessThan("large")`
    width: 85%;
    padding: 0.5rem;
  `}
  
  ${media.lessThan("medium")`
    width: 95%;
  `}
`;

export const Title = styled.div`
  color: ${props => props.theme.colorA};
  font-size: 1.8rem;
  font-weight: 500;
  padding-bottom: 1rem;
`;

export const Content = styled.div`
  background: ${props => props.theme.colorA};
  border-radius: 0.5rem;
  padding: 2rem;
`;