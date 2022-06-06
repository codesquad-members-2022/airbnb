import React from "react";
import Modal from "../../../Modal";
import styled from "styled-components";
import Calendar from "../../../lib/Calendar";

const CalendarModal = ({isClicked}) => {
    return (
        <CalendarModalBox isClicked={isClicked}>
            <Calendar />
        </CalendarModalBox>
    );
};

const CalendarModalBox = styled(Modal)`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center")};
    width: 916px;
    height: 512px;
    top: 345px;
    left: 50%;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    display: ${({isClicked}) => (isClicked ? "flex" : "none")};
    gap: 68px;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1);
`;

export default CalendarModal;
