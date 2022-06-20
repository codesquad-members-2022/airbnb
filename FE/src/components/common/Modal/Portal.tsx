import ReactDOM from 'react-dom';

interface PortalPropsTypes {
  children?: JSX.Element;
}

const Portal = ({ children }: PortalPropsTypes) => {
  const wrapper = document.getElementById('portal');
  return ReactDOM.createPortal(children, wrapper as HTMLElement);
};

export default Portal;
