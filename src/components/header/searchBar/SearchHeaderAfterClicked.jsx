import React from "react";
import Gnb from "../Gnb";
import LoginButton from "../LoginButton";
import {HeaderBox, Logo} from "../Header";
import SearchPageSearchBar from "./SearchPageSeacrhBar";

const SearchHeaderAfterClicked = ({clickedState, setClickedState}) => {
    return (
        <HeaderBox>
            <Logo>LOGO</Logo>
            <Gnb />
            <SearchPageSearchBar clickedState={clickedState} setClickedState={setClickedState} />
            <LoginButton />
        </HeaderBox>
    );
};

export default SearchHeaderAfterClicked;
