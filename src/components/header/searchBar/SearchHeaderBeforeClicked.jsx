import React from "react";
import LoginButton from "../LoginButton";
import {HeaderBox, Logo} from "../Header";
import MiniSearchBar from "./MiniSearchBar";

const SearchHeaderBeforeClicked = ({clickedState, setClickedState}) => {
    return (
        <HeaderBox>
            <Logo>LOGO</Logo>
            <MiniSearchBar clickedState={clickedState} setClickedState={setClickedState} />
            <LoginButton />
        </HeaderBox>
    );
};

export default SearchHeaderBeforeClicked;
