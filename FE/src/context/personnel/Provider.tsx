import { useState, createContext, Dispatch, SetStateAction } from 'react';

export interface PersonnelContextTypes {
  numberOfAdults: number;
  setNumberOfAdults: Dispatch<SetStateAction<number>>;
  numberOfChildren: number;
  setNumberOfChildren: Dispatch<SetStateAction<number>>;
  numberOfBabies: number;
  setNumberOfBabies: Dispatch<SetStateAction<number>>;
  resetAllCount: () => void;
}

interface PersonnelProviderPropsTypes {
  children: JSX.Element;
}

export const PersonnelContext = createContext<PersonnelContextTypes | null>(null);

export const PersonnelProvider = ({ children }: PersonnelProviderPropsTypes) => {
  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [numberOfBabies, setNumberOfBabies] = useState(0);

  const resetAllCount = () => {
    setNumberOfAdults(0);
    setNumberOfChildren(0);
    setNumberOfBabies(0);
  }

  const value = {
    numberOfAdults,
    setNumberOfAdults,
    numberOfChildren,
    setNumberOfChildren,
    numberOfBabies,
    setNumberOfBabies,
    resetAllCount,
  };

  return <PersonnelContext.Provider {...{ value }}>{children}</PersonnelContext.Provider>;
};
