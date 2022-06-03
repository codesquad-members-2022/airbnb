import styled from "styled-components";

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 257px;
  height: 76px;
  padding: 0 24px;
  cursor: pointer;
`;

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
  backdrop-filter: opacity(0.2);
  z-index: 100;
  background-color: transparent;
`;
