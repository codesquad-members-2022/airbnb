import React, {useContext, useState} from "react";

const ClickedTabContext = React.createContext();

export const useClickedTabContext = () => useContext(ClickedTabContext);

const ClickedTabProvider = ({children}) => {
    const [clickedTab, setClickedTab] = useState(null);
    const clickedTabProps = {clickedTab, setClickedTab};

    return <ClickedTabContext.Provider value={clickedTabProps}>{children}</ClickedTabContext.Provider>;
};

export default ClickedTabProvider;
