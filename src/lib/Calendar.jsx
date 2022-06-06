import React from "react";
import styled from "styled-components";
import {CalendarContext} from "./CalendarContext";
import Days from "./Calendar/Days";
import Month from "./Calendar/Month";
import Week from "./Calendar/Week";
import {isValidDate} from "./util";

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
    periodStyle = {
        period: {
            periodStart: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: 2,
            },
            periodEnd: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: 1,
            },
        },
        style: {
            backgroundColor: "#e0e0e0",
            hoverColor: "black",
        },
    },
}) => {
    try {
        if (isValidDate(date)) {
            return (
                <CalendarContext.Provider value={{date, calendarWidth, dateStyle, hoverDateStyle, clickedDateStyle, dateClickHandler, periodStyle}}>
                    <CalendarBox calendarWidth={calendarWidth}>
                        <Month />
                        <Week />
                        <Days />
                    </CalendarBox>
                </CalendarContext.Provider>
            );
        }
        throw new Error();
    } catch (e) {
        console.error("Invalid Date");
    }
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
