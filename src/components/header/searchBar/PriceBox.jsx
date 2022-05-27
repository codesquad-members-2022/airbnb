import React from "react";
import CylindricalBox from "./CylindricalBox";

const PriceBox = () => {
    return <CylindricalBox title="요금" placeHolder="금액대 설정" style={priceBoxStyle} partId="PriceBox" />;
};

const priceBoxStyle = {
    width: "256px",
    height: "76px",
    border: "",
};

export default PriceBox;
