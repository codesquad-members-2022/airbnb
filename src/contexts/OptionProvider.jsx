import React, {useContext, useState} from "react";

const OptionContext = React.createContext();

export const useOptionContext = () => useContext(OptionContext);

const OptionProvider = ({children}) => {
    const [guestCount, setGuestCount] = useState(initialGuestState);
    const guestCountProps = {guestCount, setGuestCount};

    const optionProps = {guestCountProps};

    return <OptionContext.Provider value={optionProps}>{children}</OptionContext.Provider>;
};

const initialGuestState = {
    adult: 0,
    children: 0,
    infant: 0,
    companionAnimal: 0,
};

export default OptionProvider;
