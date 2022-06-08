import styled from 'styled-components';

export const BackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalBlock = styled.div<{ position: number }>`
  width: ${({ width }) => width}px;
  height: max-content;
  padding: 55px;
  position: absolute;
  top: 200px;
  border-radius: 60px;
  background: #fff;
`;
