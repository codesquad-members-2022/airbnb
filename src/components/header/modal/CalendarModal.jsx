import React from "react";
import Modal from "../../../Modal";
import styled from "styled-components";
import Calendar from "../../../lib/Calendar";

const CalendarModal = ({isClicked}) => {
    const dayStyle = {};
    const dayHoverStyle = {
        "border-radius": "50%",
        border: "1px solid black",
    };
    const dayClickHandler = (e) => {
        console.log(e.target.dataset.date);
        e.target.style.backgroundColor = "black";
        e.target.style.borderRadius = "50%";
        e.target.style.color = "white";
    };
    const periodStyle = {
        period: {periodStart: "2022 05 10", periodEnd: "2022 05 20"},
        style: {
            backgroundColor: "#e0e0e0",
            hoverColor: "black",
        },
    };
    return (
        <CalendarModalBox isClicked={isClicked}>
            <Calendar
                date={new Date(2022, 5, 31)}
                calendarWidth={380}
                dayStyle={dayStyle}
                dayHoverStyle={dayHoverStyle}
                dayClickHandler={dayClickHandler}
                periodStyle={periodStyle}
            />
            <Calendar
                date={"2022 06 29"}
                calendarWidth={380}
                dayStyle={dayStyle}
                dayHoverStyle={dayHoverStyle}
                dayClickHandler={dayClickHandler}
                periodStyle={periodStyle}
            />
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
