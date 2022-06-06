import React from "react";
import {usePeriodContext} from "../../../contexts/PeriodProvider";
import CylindricalBox from "./CylindricalBox";

const CheckOut = () => {
    const {secondClickedDate} = usePeriodContext();

    return (
        <CylindricalBox
            title="체크아웃"
            placeHolder="날짜 입력"
            style={checkOutStyle}
            partId="CheckOut"
            description={secondClickedDate && `${secondClickedDate.month}월 ${secondClickedDate.date}일`}
        />
    );
};

const checkOutStyle = {
    width: "200px",
    height: "100%",
};

export default CheckOut;
