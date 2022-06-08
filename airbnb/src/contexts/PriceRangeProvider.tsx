import React, { useState, useContext, createContext } from 'react';

interface UserChoiceForm {
  minPrice: number;
  maxPrice: number;
}

const UserInputPriceResultContext = createContext<UserChoiceForm | null>(null);

function UserPriceResultProvider({ children }: { children: React.ReactNode }) {
  const [finalInput, setFinalInput] = useState({ minPrice: 0, maxPrice: 100 });

  return (
    <UserInputPriceResultContext.Provider value={finalInput}>
      {children}
    </UserInputPriceResultContext.Provider>
  );
}

export default { UserPriceResultProvider };
