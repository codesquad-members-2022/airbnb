import React from "react";
import {useContext} from "react";
import styled from "styled-components";
import {CalendarContext} from "../CalendarContext";

const Month = () => {
    const {date, calendarWidth} = useContext(CalendarContext);
    return (
        <MonthBox calendarWidth={calendarWidth}>
            {date.year}년 {date.month}월
        </MonthBox>
    );
};

const MonthBox = styled.div`
    font-size: ${({calendarWidth}) => `${calendarWidth / 21}px`};
    padding: ${({calendarWidth}) => `${calendarWidth / 14}px`};
`;

export default Month;
