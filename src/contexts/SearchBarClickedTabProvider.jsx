import React, {useContext, useState} from "react";

const SearchBarClickedTabContext = React.createContext();

export const useSearchBarClickedTabContext = () => useContext(SearchBarClickedTabContext);

const SearchBarClickedTabProvider = ({children}) => {
    const [searchBarClickedTab, setSearchBarClickedTab] = useState(null);
    const clickedTabProps = {searchBarClickedTab, setSearchBarClickedTab};

    return (
        <SearchBarClickedTabContext.Provider value={clickedTabProps}>{children}</SearchBarClickedTabContext.Provider>
    );
};

export default SearchBarClickedTabProvider;
