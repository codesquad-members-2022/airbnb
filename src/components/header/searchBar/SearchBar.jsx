import React from "react";
import styled from "styled-components";
import Cylindrical from "../../../cylindrical";
import PriceBox from "./PriceBox";
import GuestBox from "./GuestBox";
import DateBox from "./DateBox";
import Boundary from "../../Boundary";
import CalendarModal from "../modal/CalendarModal";
import PriceModal from "../modal/PriceModal";
import GuestModal from "../modal/GuestModal";
import { useClickedPartContext } from "../../../ClickedPartProvider";

const SearchBar = ({size}) => {
    const {clickedPart} = useClickedPartContext();
    const getCylindricalStyle = () => {
        switch (size) {
            case "big": {
                return {
                    top: "170px",
                    height: "76px",
                    border: "1px #BDBDBD solid",
                };
            }
            case "small": {
                return {
                    top: "50px",
                    width: "410px",
                    height: "48px",
                    border: "1px #BDBDBD solid",
                };
            }
            default: {
                return null;
            }
        }
    };
    const getBoundaryCondition = () => {
        switch (size) {
            case "big": {
                return {
                    direction: "vertical",
                    weight: "1px",
                    length: "44px",
                    backgroundColor: "#E0E0E0",
                };
            }
            case "small": {
                return {
                    direction: "vertical",
                    weight: "1px",
                    length: "20px",
                    backgroundColor: "#E0E0E0",
                };
            }
        }
    };

    const searchBoxStyle = getCylindricalStyle();
    const boundaryCondition = getBoundaryCondition();

    return (
        <SearchBarBox style={searchBoxStyle}>
            <DateBox size={size} />
            <Boundary condition={boundaryCondition} />
            <PriceBox size={size} />
            <Boundary condition={boundaryCondition} />
            <GuestBox size={size} />
            <CalendarModal isClicked={clickedPart === "CheckIn" || clickedPart === "CheckOut"} />
            <PriceModal isClicked={clickedPart === "PriceBox"} />
            <GuestModal isClicked={clickedPart === "GuestBox"} />
        </SearchBarBox>
    );
};

const SearchBarBox = styled(Cylindrical)`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "flex-start", "center")}
    position: absolute;
    top: ${({style}) => style.top};
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.color.white};
    user-select: none;
`;

export default SearchBar;
