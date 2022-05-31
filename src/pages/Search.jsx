import React, {useState} from "react";
import styled from "styled-components";
import SearchHeaderBeforeClicked from "../components/header/searchBar/SearchHeaderBeforeClicked";
import SearchHeaderAfterClicked from "../components/header/searchBar/SearchHeaderAfterClicked";
import AccomodationHeader from "../components/main/searchMain/AccomodationHeader";
import AccomodationList from "../components/main/searchMain/AccomodationList";

const Search = () => {
    const [isClicked, setClicked] = useState(false);
    const [clickedPart, setClickedPart] = useState(null);

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
            <SearchMain>
                <AccomodationBox>
                    <AccomodationHeader />
                    <AccomodationList />
                </AccomodationBox>
                <MapBox></MapBox>
            </SearchMain>
        </>
    );
};

const SearchPage = styled.div`
    height: ${({isClicked}) => (isClicked ? "190px" : "94px")};
    user-select: none;
    box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
`;

const SearchMain = styled.main`
    ${({theme}) => theme.layout.flexLayoutMixin()};
    user-select: none;
`;

const AccomodationBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("column")};
    width: 50%;
    background-color: ${({theme}) => theme.color.white};
    padding: 32px 24px;
    box-sizing: border-box;
    gap: 12px;
`;

const MapBox = styled.div`
    width: 50%;
    background-color: green;
`;

export default Search;
