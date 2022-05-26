import React from "react";
import CylindricalBox from "./CylindricalBox";

// eslint-disable-next-line react/prop-types
const CheckOut = ({clickedPart, setClickedPart}) => {
    const cylindricalStyle = {
        width: "152px",
        height: "76px",
        border: "",
    };
    return (
        <CylindricalBox
            title={"체크아웃"}
            placeHolder={"날짜 입력"}
            style={cylindricalStyle}
            partId={"CheckOut"}
            clickedPart={clickedPart}
            setClickedPart={setClickedPart}
        />
    );
};

export default CheckOut;
