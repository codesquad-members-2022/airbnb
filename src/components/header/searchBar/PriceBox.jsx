import React from "react";
import {useOptionContext} from "../../../contexts/OptionProvider";
import {searchBarTab} from "../../../helper/constants";
import {makePriceFormat} from "../../../helper/util";
import CylindricalBox from "./CylindricalBox";

const PriceBox = () => {
    const {priceRangeProps} = useOptionContext();
    const {priceRange} = priceRangeProps;
    const priceDescription = `${makePriceFormat(priceRange.min)} ~ ${makePriceFormat(priceRange.max)}`;

    return (
        <CylindricalBox
            title="요금"
            placeHolder="금액대 설정"
            style={priceBoxStyle}
            partId={searchBarTab.PRICEBOX}
            description={priceRange.min + priceRange.max && priceDescription}
        />
    );
};

const priceBoxStyle = {
    width: "256px",
    height: "100%",
};

export default PriceBox;
