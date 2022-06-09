import ReactDOM from 'react-dom';

interface PortalTypes {
  children?: JSX.Element;
}

const Portal = ({ children }: PortalTypes) => {
  const wrapper = document.getElementById('portal');
  return ReactDOM.createPortal(children, wrapper as HTMLElement);
};

export default Portal;
