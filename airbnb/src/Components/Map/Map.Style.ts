import styled from 'styled-components';

export const PriceMarkerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 12px;
  height: 28px;
  background: #ffffff;

  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5),
    0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 999px;
  z-index: 100;

  transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;

  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #333333;

  &:hover {
    transform: scale(1.1);
    z-index: 999;
  }
`;
