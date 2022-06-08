import { PersonnelContext } from 'contexts/PersonnelProvider';
import { useContext } from 'react';

export function usePersonnelNumState() {
  const state = useContext(PersonnelContext);
  if (!state) throw new Error();

  return {
    adultsNum: state.adultsNum,
    childrenNum: state.childrenNum,
    babiesNum: state.babiesNum,
  };
}
