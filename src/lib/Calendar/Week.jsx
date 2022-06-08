import React from "react";
import {useContext} from "react";
import styled from "styled-components";
import {CalendarContext} from "../CalendarContext";

const Week = () => {
    const {calendarWidth} = useContext(CalendarContext);
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    return (
        <WeekBox calendarWidth={calendarWidth}>
            {week.map((day, ind) => (
                <div key={ind}>{day}</div>
            ))}
        </WeekBox>
    );
};

const WeekBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: ${({calendarWidth}) => `${calendarWidth / 28}px`};
    height: ${({calendarWidth}) => `${calendarWidth / 14}px`};
    color: #828282;
`;

export default Week;
