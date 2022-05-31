import ReactDOM from 'react-dom';
import { Center } from '@chakra-ui/react';

const Modal = ({ className, children }) => {
  return ReactDOM.createPortal(
    <Center>
      <div className={className}>{children}</div>
    </Center>,
    document.getElementById('modal'),
  );
};

export default Modal;
