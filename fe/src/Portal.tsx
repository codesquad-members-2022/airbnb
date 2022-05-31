import ReactDOM from 'react-dom';

export default function ModalPortal({ children }) {
  const modal = document.getElementById('modal') as HTMLElement;
  return ReactDOM.createPortal(children, modal);
}
