import React, { createContext, useState } from 'react';

export const PersonnelContext = createContext();
export const PersonnelSetterContext = createContext();

function PersonnelProvider({ children }) {
  const [adultsNum, setAdultsNum] = useState(0);
  const [childrenNum, setChildrenNum] = useState(0);
  const [babiesNum, setBabiesNum] = useState(0);

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
