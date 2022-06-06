import React from "react";
import {useContext} from "react";
import styled from "styled-components";
import {CalendarContext} from "../CalendarContext";

const Days = () => {
    const {date, calendarWidth, dayStyle, dayHoverStyle, dayClickHandler, periodStyle} = useContext(CalendarContext);
    const year = date.getFullYear();
    const month = date.getMonth();
    const periodStart = periodStyle.period.periodStart;
    const periodEnd = periodStyle.period.periodEnd;
    const weeks = getWeeks(year, month);
    return (
        <DaysBox>
            {weeks.map((week, weekInd) => {
                return (
                    <Week key={weekInd} weekInd={weekInd}>
                        {week.map((day, ind) => {
                            return (
                                <DayBackground
                                    key={ind}
                                    calendarWidth={calendarWidth}
                                    isDuringPeriod={isDuringPeriod(
                                        periodStart,
                                        periodEnd,
                                        `${year} ${String(month + 1).padStart(2, "0")} ${String(day).padStart(2, "0")}`
                                    )}
                                    isPeriodStart={isSameDate(periodStart, `${year} ${String(month + 1).padStart(2, "0")} ${String(day).padStart(2, "0")}`)}
                                    isPeriodEnd={isSameDate(periodEnd, `${year} ${String(month + 1).padStart(2, "0")} ${String(day).padStart(2, "0")}`)}
                                    periodStyle={periodStyle.style}
                                >
                                    <Day
                                        data-date={`${year} ${String(month + 1).padStart(2, "0")} ${String(day).padStart(2, "0")}`}
                                        calendarWidth={calendarWidth}
                                        dayStyle={dayStyle}
                                        dayHoverStyle={dayHoverStyle}
                                        onClick={dayClickHandler}
                                        periodStyle={periodStyle.style}
                                        isDuringPeriod={isDuringPeriod(
                                            periodStart,
                                            periodEnd,
                                            `${year} ${String(month + 1).padStart(2, "0")} ${String(day).padStart(2, "0")}`
                                        )}
                                    >
                                        {day}
                                    </Day>
                                </DayBackground>
                            );
                        })}
                    </Week>
                );
            })}
        </DaysBox>
    );
};

const getWeeks = (year, month) => {
    const weeks = [];
    const firstDay = new Date(Number(year), Number(month), 1).getDay();
    const lastDate = new Date(Number(year), Number(month + 1), 0).getDate();
    const days = Array.from({length: lastDate}, (_, ind) => ind + 1);
    weeks.push(days.slice(0, 7 - firstDay));
    for (let idx = 7 - firstDay; idx < lastDate; idx += 7) {
        weeks.push(days.slice(idx, idx + 7));
    }
    return weeks;
};

const isDuringPeriod = (periodStart, periodEnd, today) => {
    try {
        if (isValidDate(periodStart) && isValidDate(periodEnd) && isValidDate(today)) {
            return new Date(periodStart) <= new Date(today) && new Date(today) <= new Date(periodEnd);
        }
        throw new Error();
    } catch (e) {
        console.error("Invalid preiod Date");
        return false;
    }
};

const isValidDate = (strDate) => {
    return String(new Date(strDate)) === "Invalid Date" ? false : true;
};

const isSameDate = (date1, date2) => {
    try {
        if (isValidDate(date1) && isValidDate(date2)) {
            return new Date(date1).getTime() === new Date(date2).getTime();
        }
    } catch (e) {
        console.error("Invalid preiod Date");
        return false;
    }
};

const DaysBox = styled.div`
    display: flex;
    flex-direction: column;
    height: ${({calendarWidth}) => `${calendarWidth / 14}px`};
    align-items: center;
    width: 100%;
    font-size: ${({calendarWidth}) => `${calendarWidth / 28}px`};
    gap: ${({calendarWidth}) => `${calendarWidth / 84}px`};
`;

const Week = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({weekInd}) => (weekInd === 0 ? "flex-end" : "flex-start")};
`;

const DayBackground = styled.div`
    width: ${({calendarWidth}) => `${calendarWidth / 7}px`};
    line-height: ${({calendarWidth}) => `${calendarWidth / 7}px`};
    text-align: center;
    font-size: ${({calendarWidth}) => `${calendarWidth / 28}px`};
    ${({isDuringPeriod, periodStyle}) => {
        return isDuringPeriod ? periodStyle : {};
    }}
    ${({isPeriodStart}) => {
        if (isPeriodStart) {
            return {
                "border-top-left-radius": "50%",
                "border-bottom-left-radius": "50%",
            };
        }
    }}
    ${({isPeriodEnd}) => {
        if (isPeriodEnd) {
            return {
                "border-top-right-radius": "50%",
                "border-bottom-right-radius": "50%",
            };
        }
    }}
`;

const Day = styled.div`
    border: 1px solid
        ${({periodStyle, isDuringPeriod}) => {
            return isDuringPeriod ? periodStyle.backgroundColor : "white";
        }};
    border-radius: 50%;
    ${({dayStyle}) => {
        return dayStyle;
    }}
    &:hover {
        border-radius: 50%;
        ${({dayHoverStyle}) => {
            return dayHoverStyle;
        }}
    }
`;

export default Days;
