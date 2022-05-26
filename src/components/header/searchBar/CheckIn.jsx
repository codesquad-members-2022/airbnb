import React from "react";
import { useClickedPartContext } from "../../../ClickedPartProvider";
import CylindricalBox from "./CylindricalBox";

const CheckIn = () => {
    const {clickedPart, setClickedPart} = useClickedPartContext();
    const checkInStyle = {
        width: "152px",
        height: "76px",
    };

    return (
        <CylindricalBox
            title="체크인"
            placeHolder="날짜 입력"
            style={checkInStyle}
            partId="CheckIn"
            clickedPart={clickedPart}
            setClickedPart={setClickedPart}
        />
    );
};

export default CheckIn;
