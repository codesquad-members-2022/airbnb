import React, {useState} from "react";
import Modal from "./Modal";
import styled from "styled-components";
import Calendar from "../../../lib/Calendar";

const CalendarModal = ({isClicked}) => {
    const [firstClickedDate, setFirstClickedDate] = useState(null);
    const [secondClickedDate, setSecondClickedDate] = useState(null);
    const periodStyle = {
        period: {
            periodStart: firstClickedDate,
            periodEnd: secondClickedDate,
        },
        style: {
            backgroundColor: "#F5F5F7",
            hoverColor: "black",
        },
    };
    const dateClickHandler = (e) => {
        const clickedYear = e.target.dataset.year;
        const clickedMonth = e.target.dataset.month;
        const clickedDate = e.target.dataset.date;
        if (
            !firstClickedDate ||
            new Date(firstClickedDate.year, firstClickedDate.month - 1, firstClickedDate.date) > new Date(clickedYear, clickedMonth - 1, clickedDate)
        ) {
            setFirstClickedDate({
                year: clickedYear,
                month: clickedMonth,
                date: clickedDate,
            });
            setSecondClickedDate(null);
        } else {
            setSecondClickedDate({
                year: clickedYear,
                month: clickedMonth,
                date: clickedDate,
            });
        }
    };
    return (
        <CalendarModalBox isClicked={isClicked}>
            <Calendar dateClickHandler={dateClickHandler} periodStyle={periodStyle} />
            <Calendar date={{year: 2022, month: 6}} dateClickHandler={dateClickHandler} periodStyle={periodStyle} />
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
