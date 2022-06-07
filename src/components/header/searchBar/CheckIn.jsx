import React from "react";
import {usePeriodContext} from "../../../contexts/PeriodProvider";
import {searchBarTab} from "../../../helper/constants";
import CylindricalBox from "./CylindricalBox";

const CheckIn = () => {
    const {firstClickedDate} = usePeriodContext();

    return (
        <CylindricalBox
            title="체크인"
            placeHolder="날짜 입력"
            style={checkInStyle}
            partId={searchBarTab.CHECKIN}
            description={firstClickedDate && `${firstClickedDate.month}월 ${firstClickedDate.date}일`}
        />
    );
};

const checkInStyle = {
    width: "160px",
    height: "100%",
};

export default CheckIn;
