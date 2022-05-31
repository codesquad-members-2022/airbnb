import { createContext, useState } from 'react';

const SearchBarContext = createContext({});

function SearchBarProvider({ children }) {
  const [currentInput, setCurrentInput] = useState(null);
  
  const isFocus = currentInput === null ? false : true;

  const resetFocusState = () => {
    setCurrentInput(null);
  };

  const updateFocusState = label => {
    setCurrentInput(label);
  };

  return (
    <SearchBarContext.Provider value={{ isFocus, resetFocusState, updateFocusState, currentInput }}>
      {children}
    </SearchBarContext.Provider>
  );
}

export { SearchBarContext, SearchBarProvider };
