import React from "react";
import styled from "styled-components";
import {CalendarContext} from "./CalendarContext";
import Days from "./Calendar/Days";
import Month from "./Calendar/Month";
import Week from "./Calendar/Week";

const Calendar = ({date, calendarWidth = 336, dayStyle, dayHoverStyle, dayClickHandler, periodStyle}) => {
    try {
        if (isValidDate(date)) {
            date = new Date(date);
            return (
                <CalendarContext.Provider value={{date, calendarWidth, dayStyle, dayHoverStyle, dayClickHandler, periodStyle}}>
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

const isValidDate = (strDate) => {
    return String(strDate) === "Invalid Date" ? false : true;
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
