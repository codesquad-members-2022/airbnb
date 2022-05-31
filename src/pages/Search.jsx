import React, {useState} from "react";
import styled from "styled-components";
import SearchHeaderBeforeClicked from "../components/header/searchBar/SearchHeaderBeforeClicked";
import SearchHeaderAfterClicked from "../components/header/searchBar/SearchHeaderAfterClicked";

const Search = () => {
    const [isClicked, setClicked] = useState(false);
    console.log(isClicked);

    return (
        <>
            <SearchPage isClicked={isClicked}>
                {isClicked ? (
                    <SearchHeaderAfterClicked clickedState={isClicked} setClickedState={setClicked} />
                ) : (
                    <SearchHeaderBeforeClicked clickedState={isClicked} setClickedState={setClicked} />
                )}
            </SearchPage>
        </>
    );
};

const SearchPage = styled.div`
    height: ${({isClicked}) => (isClicked ? "190px" : "94px")};
    user-select: none;
    box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
`;

export default Search;
