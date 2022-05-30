import React from "react";
import styled from "styled-components";
import LoginButton from "../components/header/LoginButton";
import SearchBar from "../components/header/searchBar/SearchBar";
import AccomodationHeader from "../components/main/searchMain/AccomodationHeader";
import AccomodationList from "../components/main/searchMain/AccomodationList";

const Search = () => {
    return (
        <>
            <Background>
                <HeaderBox>
                    <Logo>LOGO</Logo>
                    <SearchBar size="small" />
                    <LoginButton />
                </HeaderBox>
            </Background>
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

const Background = styled.div`
    background-color: ${({theme}) => theme.transparentColor.gray1};
    height: 640px;
    user-select: none;
`;

const HeaderBox = styled.header`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between", "center")}
    padding: 24px 80px;
`;

const Logo = styled.h1`
    color: ${({theme}) => theme.color.gray1};
    cursor: pointer;
    font-weight: 900;
    font-size: 32px;
    line-height: 46px;
`;

export default Search;
