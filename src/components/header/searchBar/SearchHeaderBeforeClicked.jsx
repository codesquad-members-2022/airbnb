import React from "react";
import LoginButton from "../LoginButton";
import {HeaderBox, Logo} from "../Header";
import MiniSearchBar from "./MiniSearchBar";

const SearchHeaderBeforeClicked = ({setClickedState}) => {
    return (
        <HeaderBox>
            <Logo>LOGO</Logo>
            <MiniSearchBar setClickedState={setClickedState} />
            <LoginButton />
        </HeaderBox>
    );
};

export default SearchHeaderBeforeClicked;
