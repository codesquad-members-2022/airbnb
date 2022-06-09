import React, {useState} from "react";
import Modal from "./Modal";
import styled from "styled-components";
import Calendar from "owl-calendar/dist/Calendar";
import {usePeriodContext} from "../../../contexts/PeriodProvider";
import {ReactComponent as LeftIcon} from "../../../assets/leftArrow.svg";
import {ReactComponent as RightIcon} from "../../../assets/rightArrow.svg";
import {searchBarTab} from "../../../helper/constants";
import {stopPropagation} from "../../../helper/util";
import {useSearchBarClickedTabContext} from "../../../contexts/SearchBarClickedTabProvider";

const CalendarModal = ({isClicked}) => {
    const {firstClickedDate, setFirstClickedDate, secondClickedDate, setSecondClickedDate} = usePeriodContext();
    const {searchBarClickedTab, setSearchBarClickedTab} = useSearchBarClickedTabContext();
    const firstDate = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
    };
    const [date, setDate] = useState({
        firstCalendar: firstDate,
        secondCalendar: getNextMonth(firstDate),
    });
    const hoverDateStyle = {
        "border-radius": "50%",
        border: "1px solid black",
    };
    const periodStyle = {
        period: {
            periodStart: firstClickedDate,
            periodEnd: secondClickedDate,
        },
        style: {
            backgroundColor: "#F5F5F7",
        },
    };
    const dateClickHandler = (e) => {
        const clickedDate = {
            year: e.target.dataset.year,
            month: e.target.dataset.month,
            date: e.target.dataset.date,
        };

        switch (searchBarClickedTab) {
            case searchBarTab.CHECKIN:
                setFirstClickedDate(clickedDate);
                secondClickedDate && isPrevious(secondClickedDate, clickedDate) && setSecondClickedDate(null);
                setSearchBarClickedTab(searchBarTab.CHECKOUT);
                break;
            case searchBarTab.CHECKOUT:
                setSecondClickedDate(clickedDate);
                if (firstClickedDate && isPrevious(clickedDate, firstClickedDate)) {
                    setFirstClickedDate(clickedDate);
                    setSecondClickedDate(null);
                }
                !firstClickedDate && setSearchBarClickedTab(searchBarTab.CHECKIN);
                break;
        }
    };

    const setPreviousMonth = (date) => {
        setDate({
            firstCalendar: getPreviousMonth(date.firstCalendar),
            secondCalendar: date.firstCalendar,
        });
    };

    const setNextMonth = (date) => {
        setDate({
            firstCalendar: date.secondCalendar,
            secondCalendar: getNextMonth(date.secondCalendar),
        });
    };

    return (
        <CalendarModalBox isClicked={isClicked} onClick={stopPropagation}>
            <IconBox>
                <LeftIcon onClick={() => setPreviousMonth(date)} />
                <RightIcon onClick={() => setNextMonth(date)} />
            </IconBox>
            <CalendarContentBox>
                <Calendar
                    calendarWidth={336}
                    date={date.firstCalendar}
                    dateClickHandler={dateClickHandler}
                    hoverDateStyle={hoverDateStyle}
                    periodStyle={periodStyle}
                />
                <Calendar
                    calendarWidth={336}
                    date={date.secondCalendar}
                    dateClickHandler={dateClickHandler}
                    hoverDateStyle={hoverDateStyle}
                    periodStyle={periodStyle}
                />
            </CalendarContentBox>
        </CalendarModalBox>
    );
};

const getNextMonth = (date) => {
    const year = date.year;
    const month = date.month;
    return {year: year, month: month + 1};
};

const getPreviousMonth = (date) => {
    const year = date.year;
    const month = date.month;
    return {year: year, month: month - 1};
};

const isPrevious = (date1, date2) => {
    return new Date(date1.year, date1.month - 1, date1.date) < new Date(date2.year, date2.month - 1, date2.date);
};

const CalendarModalBox = styled(Modal)`
    ${({theme}) => theme.layout.flexLayoutMixin("column")};
    width: 916px;
    height: 512px;
    top: 345px;
    left: 50%;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    display: ${({isClicked}) => (isClicked ? "flex" : "none")};
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1);
    padding-top: 40px;
`;

const CalendarContentBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center", "start")};
    gap: 34px;
`;

const IconBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between")};
    padding: 0 70px;
    svg {
        width: 16px;
        padding: 10px;
        cursor: pointer;
    }
`;

export default CalendarModal;
