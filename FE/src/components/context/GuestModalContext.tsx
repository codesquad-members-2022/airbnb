import React, { useState, createContext } from 'react';

interface IGuest {
  adultCount?: number;
  setAdultCount?: React.Dispatch<React.SetStateAction<number>>;
  childrenCount?: number;
  setChildrenCount?: React.Dispatch<React.SetStateAction<number>>;
  infantCount?: number;
  setInfantCount?: React.Dispatch<React.SetStateAction<number>>;
}
const GuestContext = createContext<IGuest>({});

function GuestModalContext(props: { children: any }) {
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const GuestInfo = {
    adultCount,
    setAdultCount,
    childrenCount,
    setChildrenCount,
    infantCount,
    setInfantCount,
  };

  // eslint-disable-next-line react/destructuring-assignment
  return <GuestContext.Provider value={GuestInfo}>{props.children}</GuestContext.Provider>;
}

export { GuestModalContext, GuestContext };
