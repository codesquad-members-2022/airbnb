import React, {useState} from "react";
import styled from "styled-components";
import Cylindrical from "../../../cylindrical";
import PriceBox from "./PriceBox";
import GuestBox from "./GuestBox";
import DateBox from "./DateBox";
import Boundary from "../../Boundary";

const SearchBar = ({size}) => {
    const [clickedPart, setClickedPart] = useState(null);
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
            <DateBox clickedPart={clickedPart} setClickedPart={setClickedPart} size={size} />
            <Boundary condition={boundaryCondition} />
            <PriceBox clickedPart={clickedPart} setClickedPart={setClickedPart} size={size} />
            <Boundary condition={boundaryCondition} />
            <GuestBox clickedPart={clickedPart} setClickedPart={setClickedPart} size={size} />
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
