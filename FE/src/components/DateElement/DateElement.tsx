/* eslint-disable no-param-reassign */
import React, { useContext, useEffect, useState } from 'react';

import { IDateElementProps } from 'components/DateElement/DateElement.types';

import {
  DateElementContent,
  DateElementCircle,
} from 'components/DateElement/DateElement.styled';

import { CheckContext } from 'contexts/checkcontext/checkContext';

export function DateElement({
  dateInfo,
  past,
  calendarClickCount,
}: IDateElementProps): JSX.Element {
  const [isSelcet, setIsSelect] = useState<boolean>(false);
  const [isRange, setIsRange] = useState<boolean>(false);
  const {
    checkIn,
    checkOut,
    mouseOverCheckOut,
    setCheckIn,
    setCheckOut,
    setMouseOverCheckOut,
  } = useContext(CheckContext);

  const elementDateValue = `${dateInfo?.year}, ${dateInfo?.month}, ${dateInfo?.date}`;
  const elementDate = new Date(elementDateValue);
  const elementMouseOverCheckOut = new Date(`${mouseOverCheckOut}`);
  const elementCheckIn = new Date(`${checkIn}`);
  const elementCheckOut = new Date(`${checkOut}`);

  const {
    clickCountEqualToZero,
    clickCountEqualToOne,
    clickCountEqualToTwo,
    dateLessThanMouseOverCheckOut,
    dateLessThanCheckOut,
    dateGreaterThanCheckIn,
    dateLessThanCheckIn,
  } = {
    clickCountEqualToZero: calendarClickCount.current === 0,
    clickCountEqualToOne: calendarClickCount.current === 1,
    clickCountEqualToTwo: calendarClickCount.current === 2,
    dateLessThanMouseOverCheckOut: elementDate < elementMouseOverCheckOut,
    dateLessThanCheckOut: elementDate < elementCheckOut,
    dateGreaterThanCheckIn: elementDate > elementCheckIn,
    dateLessThanCheckIn: elementDate < elementCheckIn,
  };

  useEffect(() => {
    setRange();
    markupCheckIn();
    markupCheckOut();
  }, [mouseOverCheckOut, checkOut, checkIn]);

  const handleMouseOverDateElementContent = () => setRangeMouseOver();

  const setRange = () => {
    setRangeLessThanMouseOver();
    setRangeClick();
  };

  const setRangeMouseOver = () => {
    if (clickCountEqualToOne) setMouseOverCheckOut(elementDateValue);
  };

  const setRangeLessThanMouseOver = () => {
    if (
      clickCountEqualToOne &&
      dateLessThanMouseOverCheckOut &&
      dateGreaterThanCheckIn
    )
      setIsRange(true);
    else setIsRange(false);
  };

  const setRangeClick = () => {
    if (clickCountEqualToTwo && dateLessThanCheckOut && dateGreaterThanCheckIn)
      setIsRange(prev => !prev);
  };

  const markupCheckIn = () => {
    if (elementDate.getTime() === elementCheckIn.getTime()) setIsSelect(true);
    else setIsSelect(false);
  };

  const markupCheckOut = () => {
    if (elementDate.getTime() === elementCheckOut.getTime()) setIsSelect(true);
  };

  const handleClickDateElementContent = () => selectCheck();

  const selectCheck = () => {
    if (clickCountEqualToZero) selectCheckIn();
    else if (clickCountEqualToOne) selectCheckOut();
    else if (clickCountEqualToTwo) resetCheckInAndCheckOut();
  };

  const selectCheckIn = () => {
    setCheckIn(elementDateValue);
    calendarClickCount.current += 1;
  };

  const selectCheckOut = () => {
    if (dateGreaterThanCheckIn) {
      setCheckOut(elementDateValue);
      calendarClickCount.current += 1;
    } else if (dateLessThanCheckIn) {
      resetCheckOut();
    } else {
      setCheckOut(elementDateValue);
      calendarClickCount.current = 2;
    }
  };

  const resetCheckInAndCheckOut = () => {
    if (dateLessThanCheckIn) resetCheckOut();
    else setCheckOut(elementDateValue);
  };

  const resetCheckOut = () => {
    setCheckIn(elementDateValue);
    setCheckOut('');
    calendarClickCount.current = 1;
  };

  return (
    <DateElementContent
      dateInfo={dateInfo}
      past={past}
      isSelcet={isSelcet}
      isRange={isRange}
      onClick={handleClickDateElementContent}
      onMouseOver={handleMouseOverDateElementContent}
    >
      <DateElementCircle past={past} dateInfo={dateInfo} isRange={isRange}>
        {dateInfo?.date}
      </DateElementCircle>
    </DateElementContent>
  );
}
