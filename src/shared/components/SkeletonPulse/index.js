import styled from 'styled-components';

const SkeletonPulse = styled.span`
  background: linear-gradient(-90deg, #6F85AB  0%, #283E65 50%, #6F85AB 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% { background-position: 0% 0%; }
    100% { background-position: -135% 0%;}
  }
`;

export default SkeletonPulse;
