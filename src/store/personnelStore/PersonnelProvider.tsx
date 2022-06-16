import React, { useReducer } from 'react';
import { PersonnelStateContext, PersonnelDispatchContext } from './PersonnelContext';
import personnelReducer from './personnelReducer';
import { PersonnelStateType } from './personnelTypes';
import { getSearchParams } from '../../util/urlUtil';

const makeCurrPagePersonnelState = () => {
  const guestNumString = getSearchParams('personnel');
  //todo: query에 child, infant도 넘겨주도록.
  const personnelState: PersonnelStateType = {
    ADULT: Number(guestNumString) || 0,
    CHILD: 0,
    INFANT: 0,
  };
  return personnelState;
};

const PersonnelProvider = ({ children }: { children: React.ReactNode }) => {
  const currPageInitialPersonnelState = makeCurrPagePersonnelState();
  const [personnelState, dispatchPersonnel] = useReducer(
    personnelReducer,
    currPageInitialPersonnelState,
  );

  return (
    <PersonnelStateContext.Provider value={personnelState}>
      <PersonnelDispatchContext.Provider value={dispatchPersonnel}>
        {children}
      </PersonnelDispatchContext.Provider>
    </PersonnelStateContext.Provider>
  );
};

export default PersonnelProvider;
