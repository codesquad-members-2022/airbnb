import styled from 'styled-components';

type Size = {
  size: number;
};

function LoadingSpinner({ size }: Size) {
  return <Spinner size={size} />;
}

export default LoadingSpinner;

const Spinner = styled.div<Size>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 10px solid ${({ theme }) => theme.colors.grey1};
  border-top: 10px solid ${({ theme }) => theme.colors.grey5};
  border-radius: 50%;

  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
