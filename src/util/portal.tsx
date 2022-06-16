import { useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({
  children,
  elementId,
}: {
  children: React.ReactNode;
  elementId: string;
}) => {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId],
  );

  return createPortal(children, rootElement);
};

export default Portal;
