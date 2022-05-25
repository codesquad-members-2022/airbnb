import React from "react";
import CylindricalBox from "./CylindricalBox";

// eslint-disable-next-line react/prop-types
const GuestBox = ({clickedPart, setClickedPart}) => {
    const cylindricalStyle = {
        width: "298px",
        height: "76px",
        border: "",
    };

    return (
        <CylindricalBox
            title={"인원"}
            placeHolder={"게스트 추가"}
            style={cylindricalStyle}
            partId={"GuestBox"}
            clickedPart={clickedPart}
            setClickedPart={setClickedPart}
            hasSearchButton={true}
        />
    );
};

export default GuestBox;
