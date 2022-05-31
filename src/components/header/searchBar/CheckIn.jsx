import React from "react";
import CylindricalBox from "./CylindricalBox";

const CheckIn = () => {
    return <CylindricalBox title="체크인" placeHolder="날짜 입력" style={checkInStyle} partId="CheckIn" />;
};

const checkInStyle = {
    width: "160px",
    height: "100%",
};

export default CheckIn;
