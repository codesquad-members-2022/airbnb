import React, {useState} from "react";
import styled from "styled-components";
import Cylindrical from "../../../cylindrical";
import PriceBox from "./PriceBox";
import GuestBox from "./GuestBox";
import DateBox from "./DateBox";
import Boundary from "../../Boundary";

const SearchBar = () => {
    const cylindricalStyle = {
        height: "76px",
        border: "1px #BDBDBD solid",
    };

    const boundaryCondition = {
        direction: "vertical",
        weight: "1px",
        length: "44px",
        backgroundColor: "#E0E0E0",
    };
    const [clickedPart, setClickedPart] = useState(null);

    return (
        <SearchBarBox style={cylindricalStyle}>
            <DateBox clickedPart={clickedPart} setClickedPart={setClickedPart} />
            <Boundary condition={boundaryCondition} />
            <PriceBox clickedPart={clickedPart} setClickedPart={setClickedPart} />
            <Boundary condition={boundaryCondition} />
            <GuestBox clickedPart={clickedPart} setClickedPart={setClickedPart} />
        </SearchBarBox>
    );
};

const SearchBarBox = styled(Cylindrical)`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "flex-start", "center")}
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.color.white};
    user-select: none;
`;

export default SearchBar;
