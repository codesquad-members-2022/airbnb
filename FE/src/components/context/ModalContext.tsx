import React, { useState, createContext } from 'react';

interface IModal {
  leftBtnValue?: number;
  setLeftBtnValue?: React.Dispatch<React.SetStateAction<number>>;
  rightBtnValue?: number;
  setRightBtnValue?: React.Dispatch<React.SetStateAction<number>>;
  isDateOpen?: boolean;
  setIsDateOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isPriceOpen?: boolean;
  setIsPriceOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isGuestOpen?: boolean;
  setIsGuestOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  lowPrice?: number;
  setLowPrice?: React.Dispatch<React.SetStateAction<number>>;
  highPrice?: number;
  setHighPrice?: React.Dispatch<React.SetStateAction<number>>;
  guestCounts?: number;
  setGuestCounts?: React.Dispatch<React.SetStateAction<number>>;
  infantCounts?: number;
  setInfantCounts?: React.Dispatch<React.SetStateAction<number>>;
  filteredData?: any;
  setFilteredData?: any;
  isClickSearch?: boolean;
  setIsClickSearch?: any;
}

const Context = createContext<IModal>({});

function ModalContext(props: { children: React.ReactNode }) {
  const [leftBtnValue, setLeftBtnValue] = useState(0);
  const [rightBtnValue, setRightBtnValue] = useState(100);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(0);
  const [guestCounts, setGuestCounts] = useState(1);
  const [infantCounts, setInfantCounts] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isClickSearch, setIsClickSearch] = useState(false);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const ModalInfo = {
    leftBtnValue,
    setLeftBtnValue,
    rightBtnValue,
    setRightBtnValue,
    isDateOpen,
    setIsDateOpen,
    isPriceOpen,
    setIsPriceOpen,
    isGuestOpen,
    setIsGuestOpen,
    lowPrice,
    setLowPrice,
    highPrice,
    setHighPrice,
    guestCounts,
    setGuestCounts,
    infantCounts,
    setInfantCounts,
    filteredData,
    setFilteredData,
    isClickSearch,
    setIsClickSearch,
  };

  // eslint-disable-next-line react/destructuring-assignment
  return <Context.Provider value={ModalInfo}>{props.children}</Context.Provider>;
}

export { ModalContext, Context };
