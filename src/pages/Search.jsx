import React, {useState} from "react";
import styled from "styled-components";
import SearchHeaderBeforeClicked from "../components/header/searchBar/SearchHeaderBeforeClicked";
import SearchHeaderAfterClicked from "../components/header/searchBar/SearchHeaderAfterClicked";
import AccomodationHeader from "../components/main/searchMain/AccomodationHeader";
import AccomodationList from "../components/main/searchMain/AccomodationList";
import DimLayer from "../components/DimLayer";

const Search = () => {
    const [isClicked, setClicked] = useState(false);

    return (
        <>
            <SearchPage
                isClicked={isClicked}
                onClick={() => {
                    setClicked(false);
                }}
            >
                {isClicked ? (
                    <SearchHeaderAfterClicked clickedState={isClicked} setClickedState={setClicked} />
                ) : (
                    <SearchHeaderBeforeClicked setClickedState={setClicked} />
                )}
            </SearchPage>
            {isClicked && <DimLayer closeModal={setClicked} />}
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
    width: 100%;
    height: ${({isClicked}) => (isClicked ? "190px" : "94px")};
    background-color: ${({theme}) => theme.color.white};
    user-select: none;
    border: 1px solid ${({theme}) => theme.color.gray4};
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
