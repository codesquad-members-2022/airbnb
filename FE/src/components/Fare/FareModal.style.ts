import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 6.5rem 8.8rem;
  position: fixed;
  top: 21rem;
  left: 50%;
  transform: translateX(-50%);
  width: 49.3rem;
  height: 36.4rem;
  border-radius: 4rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1),
    0px 0px 4px rgba(51, 51, 51, 0.05);
  box-sizing: border-box;
`;
export const PriceRange = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const Average = styled.span`
  font-size: 1.4rem;
  color: #828282;
  margin-bottom: 3rem;
`;
