import React from "react";
import CylindricalBox from "./CylindricalBox";

const CheckOut = () => {
    return <CylindricalBox title="체크아웃" placeHolder="날짜 입력" style={checkOutStyle} partId="CheckOut" />;
};

const checkOutStyle = {
    width: "200px",
    height: "100%",
};

export default CheckOut;
