import React from "react";
import {searchBarTab} from "../../../helper/constants";
import CylindricalBox from "./CylindricalBox";

const PriceBox = () => {
    return <CylindricalBox title="요금" placeHolder="금액대 설정" style={priceBoxStyle} partId={searchBarTab.PRICEBOX} />;
};

const priceBoxStyle = {
    width: "256px",
    height: "100%",
};

export default PriceBox;
