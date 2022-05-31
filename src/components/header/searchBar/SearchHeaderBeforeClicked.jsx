import React from "react";
import LoginButton from "../LoginButton";
import {HeaderBox, Logo} from "../Header";
import MiniSearchBar from "./MiniSearchBar";

const SearchHeaderBeforeClicked = ({clickedState, setClickedState, setClickedPart}) => {
    return (
        <HeaderBox>
            <Logo>LOGO</Logo>
            <MiniSearchBar
                clickedState={clickedState}
                setClickedState={setClickedState}
                setClickedPart={setClickedPart}
            />
            <LoginButton />
        </HeaderBox>
    );
};

export default SearchHeaderBeforeClicked;
