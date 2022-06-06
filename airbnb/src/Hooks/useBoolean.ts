import { useState } from 'react';

export function useBoolean() {
  const [boolState, setBoolState] = useState(false);

  const setTrue = () => setBoolState(true);
  const setFalse = () => setBoolState(false);
  const toggle = () => setBoolState(!boolState);

  return { boolState, setTrue, setFalse, toggle };
}
