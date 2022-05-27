import React from "react";
import styled from "styled-components";
import PriceBox from "./PriceBox";
import GuestBox from "./GuestBox";
import DateBox from "./DateBox";
import Boundary from "../../Boundary";
import CalendarModal from "../modal/CalendarModal";
import PriceModal from "../modal/PriceModal";
import GuestModal from "../modal/GuestModal";
import {useClickedPartContext} from "../../../ClickedPartProvider";

const SearchBar = () => {
    const {clickedPart} = useClickedPartContext();

    return (
        <SearchBarBox>
            <DateBox />
            <Boundary condition={boundaryCondition} />
            <PriceBox />
            <Boundary condition={boundaryCondition} />
            <GuestBox />
            <CalendarModal isClicked={clickedPart === "CheckIn" || clickedPart === "CheckOut"} />
            <PriceModal isClicked={clickedPart === "PriceBox"} />
            <GuestModal isClicked={clickedPart === "GuestBox"} />
        </SearchBarBox>
    );
};

const SearchBarBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "flex-start", "center")}
    position: absolute;
    top: 170px;
    height: 76px;
    border: 1px #bdbdbd solid;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.color.white};
    user-select: none;
    border-radius: 999px;
`;

const boundaryCondition = {
    direction: "vertical",
    weight: "1px",
    length: "44px",
    backgroundColor: "#E0E0E0",
};

export default SearchBar;
