import React from 'react';
import styled from 'styled-components';
import ModalPortal from 'Portal';

const BackGround = styled.div`
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

const ModalBlock = styled.div<{ position: number }>`
  width: 320px;
  height: 300px;
  position: absolute;
  top: 200px;
  border-radius: 60px;
  background: #fff;
`;

export default function Modal({
  children,
  shown,
  onClose,
}: {
  children: React.ReactNode;
  shown: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const blockEvent = (event: React.MouseEvent<HTMLButtonElement>) => event.stopPropagation();

  return (
    <ModalPortal>
      {shown && (
        <BackGround role="button" tabIndex={0} className="ModalBackGround" onClick={onClose} onKeyDown={onClose}>
          <ModalBlock onClick={blockEvent}>{children}</ModalBlock>
        </BackGround>
      )}
    </ModalPortal>
  );
}
