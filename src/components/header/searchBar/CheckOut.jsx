import React from "react";
import CylindricalBox from "./CylindricalBox";

const CheckOut = ({clickedPart, setClickedPart}) => {
    const checkOutStyle = {
        width: "152px",
        height: "76px",
        border: "",
    };

    return (
        <CylindricalBox
            title={"체크아웃"}
            placeHolder={"날짜 입력"}
            style={checkOutStyle}
            partId={"CheckOut"}
            clickedPart={clickedPart}
            setClickedPart={setClickedPart}
        />
    );
};

export default CheckOut;
