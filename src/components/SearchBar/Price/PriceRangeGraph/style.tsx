import styled from "styled-components";

export const Slider = styled.div`
  position: relative;
  height: 24px;
  top: -18px;
`;

export const LeftButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  z-index: 105;
`;

export const RightButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 0;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  z-index: 105;
`;

export const GraphContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 389px;
  background-color: transparent;
`;

export const CanvasContainer = styled.div`
  width: 365px;
  padding-left: 12px;
  background-color: transparent;
`;

export const LeftFilter = styled.div`
  position: absolute;
  height: 127.5px;
  left: 64px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const RightFilter = styled.div`
  position: absolute;
  height: 127.5px;
  right: 64px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const applyButton = styled.button`
  display: block;
  padding: 5px 10px;
  opacity: 0.8;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 10px;
  margin: auto;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const GraphTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 16px;
`;

export const GraphRangeDesc = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.gray1};
  margin-bottom: 4px;
`;

export const GraphAverageDesc = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.gray3};
  margin-bottom: 8px;
`;
