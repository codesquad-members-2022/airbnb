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
    dateHoverStyle = {
        "border-radius": "50%",
        border: "1px solid black",
    },
    dateClickHandler = (e) => {
        e.target.style.backgroundColor = "black";
        e.target.style.borderRadius = "50%";
        e.target.style.color = "white";
    },
    periodStyle = {
        period: {
            periodStart: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: 1,
            },
            periodEnd: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: 1,
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
                <CalendarContext.Provider value={{date, calendarWidth, dateStyle, dateHoverStyle, dateClickHandler, periodStyle}}>
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
