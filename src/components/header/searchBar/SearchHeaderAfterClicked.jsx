import React from "react";
import Gnb from "../Gnb";
import LoginButton from "../LoginButton";
import {HeaderBox, Logo} from "../Header";
import SearchPageSearchBar from "./SearchPageSeacrhBar";

const SearchHeaderAfterClicked = ({clickedState, setClickedState, clickedPart}) => {
    return (
        <HeaderBox>
            <Logo>LOGO</Logo>
            <Gnb />
            <SearchPageSearchBar
                clickedclickedState={clickedState}
                setClickedState={setClickedState}
                clickedPart={clickedPart}
            />
            <LoginButton />
        </HeaderBox>
    );
};

export default SearchHeaderAfterClicked;
