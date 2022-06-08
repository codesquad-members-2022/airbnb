import { useEffect, useRef, useState } from 'react';

const useModal = <T extends HTMLElement>() => {

  const ref = useRef<T>(null);
  const [element, setElement] = useState<T | null>(null);

  useEffect(() => {
    setElement(ref.current);
  }, []);

  return [ref, element];
}

export default useModal;
