import React, {useState} from "react";
import styled from "styled-components";
import SearchHeaderBeforeClicked from "../components/header/searchBar/SearchHeaderBeforeClicked";
import SearchHeaderAfterClicked from "../components/header/searchBar/SearchHeaderAfterClicked";

const Search = () => {
    const [isClicked, setClicked] = useState(false);
    const [clickedPart, setClickedPart] = useState(null);
    console.log(clickedPart);
    return (
        <>
            <SearchPage isClicked={isClicked}>
                {isClicked ? (
                    <SearchHeaderAfterClicked clickedState={isClicked} setClickedState={setClicked} />
                ) : (
                    <SearchHeaderBeforeClicked
                        clickedState={isClicked}
                        setClickedState={setClicked}
                        setClickedPart={setClickedPart}
                    />
                )}
            </SearchPage>
            <Temp />
        </>
    );
};

const SearchPage = styled.div`
    height: ${({isClicked}) => (isClicked ? "190px" : "94px")};
    user-select: none;
    box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
`;

const Temp = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.color.gray1};
`;

export default Search;
