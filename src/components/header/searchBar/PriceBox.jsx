import React from "react";
import CylindricalBox from "./CylindricalBox";

// eslint-disable-next-line react/prop-types
const PriceBox = ({clickedPart, setClickedPart}) => {
    const cylindricalStyle = {
        width: "256px",
        height: "76px",
        border: "",
    };

    return (
        <CylindricalBox
            title={"요금"}
            placeHolder={"금액대 설정"}
            style={cylindricalStyle}
            partId={"PriceBox"}
            clickedPart={clickedPart}
            setClickedPart={setClickedPart}
        />
    );
};

export default PriceBox;
