import React from "react";
import Modal from "../../../Modal";
import styled from "styled-components";

const CalendarModal = ({isClicked}) => {
    return <CalendarModalBox isClicked={isClicked}></CalendarModalBox>;
};

const CalendarModalBox = styled(Modal)`
    width: 850px;
    height: 512px;
    top: 345px;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${({isClicked}) => (isClicked ? "block" : "none")};
`;

export default CalendarModal;
