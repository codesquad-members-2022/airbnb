import React from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";

// eslint-disable-next-line react/prop-types
const DateBox = ({clickedPart, setClickedPart}) => {
    return (
        <>
            <CheckIn clickedPart={clickedPart} setClickedPart={setClickedPart} />
            <CheckOut clickedPart={clickedPart} setClickedPart={setClickedPart} />
        </>
    );
};

export default DateBox;
