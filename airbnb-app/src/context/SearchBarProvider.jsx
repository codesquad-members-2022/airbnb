import { createContext, useState } from 'react';

const SearchBarContext = createContext({});

function SearchBarProvider({ children }) {
  const [currentInput, setCurrentInput] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  
  const resetFocusState = () => {
    setCurrentInput(null);
    setIsFocus(false);
  };

  const updateFocusState = label => {
    setCurrentInput(label);
    setIsFocus(true);
  };

  return (
    <SearchBarContext.Provider value={{ isFocus, resetFocusState, updateFocusState, currentInput }}>
      {children}
    </SearchBarContext.Provider>
  );
}

export { SearchBarContext, SearchBarProvider };
