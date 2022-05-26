import React, {useContext, useState} from "react";

const ClickedPartContext = React.createContext();

export const useClickedPartContext = () => useContext(ClickedPartContext);

const ClickedPartProvider = ({children}) => {
    const [clickedPart, setClickedPart] = useState(null);
    const clickedPartProps = {clickedPart, setClickedPart};

    return <ClickedPartContext.Provider value={clickedPartProps}>{children}</ClickedPartContext.Provider>;
};

export default ClickedPartProvider;
