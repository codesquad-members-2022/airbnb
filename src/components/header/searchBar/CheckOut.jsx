import React from "react";
import {usePeriodContext} from "../../../contexts/PeriodProvider";
import {useSearchBarClickedTabContext} from "../../../contexts/SearchBarClickedTabProvider";
import {searchBarTab} from "../../../helper/constants";
import CylindricalBox from "./CylindricalBox";

const CheckOut = () => {
    const {setFirstClickedDate, secondClickedDate, setSecondClickedDate} = usePeriodContext();
    const {setSearchBarClickedTab} = useSearchBarClickedTabContext();
    const crossClickHandler = (e) => {
        setFirstClickedDate(null);
        setSecondClickedDate(null);
        setSearchBarClickedTab(searchBarTab.CHECKIN);
        e.stopPropagation();
    };

    return (
        <CylindricalBox
            title="체크아웃"
            placeHolder="날짜 입력"
            style={checkOutStyle}
            partId={searchBarTab.CHECKOUT}
            description={secondClickedDate && `${secondClickedDate.month}월 ${secondClickedDate.date}일`}
            crossClickHandler={crossClickHandler}
        />
    );
};

const checkOutStyle = {
    width: "200px",
    height: "100%",
};

export default CheckOut;
