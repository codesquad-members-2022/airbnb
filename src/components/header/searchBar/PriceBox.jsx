import React from "react";
import {usePriceContext} from "../../../contexts/PriceProvider";
import {searchBarTab} from "../../../helper/constants";
import {makePriceFormat} from "../../../helper/util";
import CylindricalBox from "./CylindricalBox";

const PriceBox = () => {
    const {
        priceRange,
        setPriceRange,
        setMinValue,
        setMaxValue,
        setLeftPointerPercent,
        setRightPointerPercent,
        setPriceMinIdx,
        setPriceMaxIdx,
        priceDataLength,
    } = usePriceContext();
    const priceDescription = `${makePriceFormat(priceRange.min)} ~ ${makePriceFormat(priceRange.max)}`;
    const resetPriceRange = (e) => {
        setPriceRange({min: 0, max: 0});
        setMinValue(0);
        setMaxValue(100);
        setLeftPointerPercent(0);
        setRightPointerPercent(3);
        setPriceMinIdx(0);
        setPriceMaxIdx(priceDataLength - 1);
        e.stopPropagation();
    };

    return (
        <CylindricalBox
            title="요금"
            placeHolder="금액대 설정"
            style={priceBoxStyle}
            partId={searchBarTab.PRICEBOX}
            description={priceRange.min + priceRange.max && priceDescription}
            crossClickHandler={resetPriceRange}
        />
    );
};

const priceBoxStyle = {
    width: "256px",
    height: "100%",
};

export default PriceBox;
