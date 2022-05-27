import React from "react";
import Gnb from "./Gnb";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import MiniSearchBar from "./searchBar/MiniSearchBar";
import {useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const path = location?.pathname.slice(1);

    return (
        <Background>
            <HeaderBox>
                <Logo>LOGO</Logo>
                {path === "search" ? <MiniSearchBar /> : <Gnb />}
                <LoginButton />
            </HeaderBox>
        </Background>
    );
};

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

export default Header;
