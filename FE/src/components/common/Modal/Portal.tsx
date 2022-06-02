import ReactDOM from 'react-dom';

import { ElementTypes } from '@components/common/Modal/index';

interface PortalTypes {
  element: ElementTypes;
  children?: JSX.Element;
}

const Portal = ({ element, children }: PortalTypes) => {
  const wrapper = element || document.getElementById('portal');

  return ReactDOM.createPortal(children, wrapper as HTMLElement);
};

export default Portal;
