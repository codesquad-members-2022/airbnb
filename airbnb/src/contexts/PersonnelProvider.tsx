import React, { createContext, useState } from 'react';

type PersonnelContextStateTypes = {
  adultsNum: number;
  childrenNum: number;
  babiesNum: number;
};

type PersonnelContextSetterTypes = {
  setAdultsNum: React.Dispatch<React.SetStateAction<number>>;
  setChildrenNum: React.Dispatch<React.SetStateAction<number>>;
  setBabiesNum: React.Dispatch<React.SetStateAction<number>>;
};

export const PersonnelContext =
  createContext<PersonnelContextStateTypes | null>(null);

export const PersonnelSetterContext =
  createContext<PersonnelContextSetterTypes | null>(null);

function PersonnelProvider({ children }: { children: React.ReactNode }) {
  const [adultsNum, setAdultsNum] = useState<number>(0);
  const [childrenNum, setChildrenNum] = useState<number>(0);
  const [babiesNum, setBabiesNum] = useState<number>(0);

  return (
    <PersonnelContext.Provider value={{ adultsNum, childrenNum, babiesNum }}>
      <PersonnelSetterContext.Provider
        value={{ setAdultsNum, setChildrenNum, setBabiesNum }}
      >
        {children}
      </PersonnelSetterContext.Provider>
    </PersonnelContext.Provider>
  );
}

export default PersonnelProvider;
