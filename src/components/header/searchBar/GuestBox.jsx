import React from "react";
import CylindricalBox from "./CylindricalBox";

const GuestBox = () => {
    return (
        <CylindricalBox
            title="인원"
            placeHolder="게스트 추가"
            style={guestBoxStyle}
            partId="GuestBox"
            hasSearchButton={true}
        />
    );
};

const guestBoxStyle = {
    width: "298px",
    height: "100%",
    border: "",
};

export default GuestBox;
