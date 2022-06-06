import React, {useContext, useState} from "react";

const PeriodContext = React.createContext();

export const usePeriodContext = () => useContext(PeriodContext);

const PeriodProvider = ({children}) => {
    const [firstClickedDate, setFirstClickedDate] = useState(null);
    const [secondClickedDate, setSecondClickedDate] = useState(null);
    const periodProps = {firstClickedDate, setFirstClickedDate, secondClickedDate, setSecondClickedDate};

    return <PeriodContext.Provider value={periodProps}>{children}</PeriodContext.Provider>;
};

export default PeriodProvider;
