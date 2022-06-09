import { useContext } from 'react';
import { PersonnelSetterContext } from 'contexts/PersonnelProvider';

export function usePersonnelNumSetter() {
  const state = useContext(PersonnelSetterContext);
  if (!state) throw new Error();

  return {
    setAdultsNum: state.setAdultsNum,
    setChildrenNum: state.setChildrenNum,
    setBabiesNum: state.setBabiesNum,
  };
}
