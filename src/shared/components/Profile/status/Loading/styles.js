import styled from 'styled-components';
import SkeletonPulse from '../../../SkeletonPulse';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(3, min-content);
  grid-auto-rows: 1fr;
  gap: 1rem;
  color: ${props => props.theme.colorA};
  font-size: 1.6rem;
`;

export const Skeleton = styled(SkeletonPulse)`
  grid-column: ${props => props.gridcolumn};
`;

export const Img = styled(SkeletonPulse)`
  grid-row: 1 / 4;
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 50pc;
`;
