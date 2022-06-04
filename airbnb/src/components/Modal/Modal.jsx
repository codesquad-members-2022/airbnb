import ReactDOM from 'react-dom';
import { Center } from '@chakra-ui/react';
import styled from 'styled-components';

function Modal({ className, children }) {
  return ReactDOM.createPortal(
    <Center>
      <ModalStyle className={className}>{children}</ModalStyle>
    </Center>,
    document.getElementById('modal'),
  );
}

const ModalStyle = styled.div`
  position: absolute;
  top: 190px;
  border-radius: 30px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default Modal;
