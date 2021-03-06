import styled from 'styled-components';
import SkeletonPulse from '../../../SkeletonPulse';

export const Item = styled(SkeletonPulse)`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  height: 3.2rem;
`;
