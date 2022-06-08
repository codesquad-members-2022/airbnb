import React from "react";
import styled from "styled-components";
import {CalendarContext} from "./CalendarContext";
import Days from "./Calendar/Days";
import Month from "./Calendar/Month";
import Week from "./Calendar/Week";

const Calendar = ({
    date = {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
    },
    calendarWidth = 336,
    dateStyle = {},
    hoverDateStyle = {
        "border-radius": "50%",
        border: "1px solid black",
    },
    clickedDateStyle = {
        backgroundColor: "#000",
        borderRadius: "50%",
        color: "white",
    },
    dateClickHandler,
    dateHoverHandler,
    periodStyle = {
        period: {
            periodStart: null,
            periodEnd: null,
        },
        style: {
            backgroundColor: "#F5F5F7",
        },
    },
}) => {
    date = {
        year: new Date(date.year, date.month - 1).getFullYear(),
        month: new Date(date.year, date.month - 1).getMonth() + 1,
    };
    return (
        <CalendarContext.Provider value={{date, calendarWidth, dateStyle, hoverDateStyle, clickedDateStyle, dateClickHandler, dateHoverHandler, periodStyle}}>
            <CalendarBox>
                <Month />
                <Week />
                <Days />
            </CalendarBox>
        </CalendarContext.Provider>
    );
};

const CalendarBox = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({calendarWidth}) => `${calendarWidth}px`};
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
`;

export default Calendar;
