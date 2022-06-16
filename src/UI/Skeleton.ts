import { keyframes, css } from 'styled-components';

const SkeletonGradient = keyframes`
0% {
  background-color: rgba(165, 165, 165, 0.1);
}

50% {
  background-color: rgba(165, 165, 165, 0.3);
}

100% {
  background-color: rgba(165, 165, 165, 0.1);
}
`;

export const SkeletonAnimation = css`
  animation: ${SkeletonGradient} 1.8s infinite ease-in-out;
`;
