import React from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import styled from "styled-components";

const DateBox = ({size}) => {
    switch (size) {
        case "big": {
            return (
                <>
                    <CheckIn />
                    <CheckOut />
                </>
            );
        }
        case "small": {
            return <SmallDateBox>언제든 일주일</SmallDateBox>;
        }
        default: {
            return <div>잘못된 사이즈입니다!</div>;
        }
    }
};

const SmallDateBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center", "center")}
    width: 133px;
    height: 48px;
    font-size: 0.75rem;
    line-height: 17px;
`;

export default DateBox;
