import React, { useState } from 'react';

import * as S from '@components/Calender/Calender.style';
// import Days from '@components/Calender/Days';
// import Month from '@components/Calender/Month';
import Week from '@components/Calender/Week';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';

interface Calendertypes {
  year: number;
  month: number;
}

const Calender = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month);

  //년월
  const renderMonth = ({ year, month }: Calendertypes) => {
    return (
      <S.Month>
        <S.Date>
          <h1>
            {year}년 {month + 1}월
          </h1>
        </S.Date>
      </S.Month>
    );
  };

  //Week가져오기

  //days 모아서 div 만들기
  const getMonthDays = ({ year, month }: Calendertypes) => {
    const lastDay = new Date(year, month + 1, 0).getDate(); //이번달마지막날
    //const prevlastDay = new Date(year, month, 0).getDate(); //지난달마지막날
    const firstDayIndex = new Date(year, month, 1).getDay(); //이번달1일 요일
    const lastDayIndex = new Date(date.getFullYear(), month + 1, 0).getDay(); //이번달마지막요일
    const nextDays = 7 - lastDayIndex - 1;

    const onClick = ({ target }: any) => {
      console.log(year, month + 1, Number(target.innerText));
    };

    //수정예정
    const result: (string | number)[] = [];

    for (let prev = firstDayIndex; prev > 0; prev--) {
      result.push('');
    }

    for (let i = 1; i <= lastDay; i++) {
      result.push(i);
    }

    for (let j = 1; j <= nextDays; j++) {
      result.push('');
    }

    return result.map((day, index) => (
      <div key={index} onClick={onClick}>
        {day}
      </div>
    ));
  };

  const RenderCalender = ({ year, month }: Calendertypes) => {
    return (
      <>
        <S.CalenderWrapper>
          <S.Calendar>{renderMonth({ year, month })}</S.Calendar>
          <Week />
          <S.Days>{getMonthDays({ year, month })}</S.Days>
        </S.CalenderWrapper>
      </>
    );
  };

  const prevBtn = () => {
    if (currentMonth - 1 < 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(currentMonth + 10);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextBtn = () => {
    if (currentMonth + 1 >= 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(currentMonth - 10);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Btn onClick={prevBtn}>
          <Icon iconName={ICON_NAME.PREV} iconSize={ICON_SIZE.SMALL} />
        </S.Btn>
        <RenderCalender year={currentYear} month={currentMonth} />
        <RenderCalender year={currentYear} month={currentMonth + 1} />
        <S.Btn onClick={nextBtn}>
          <Icon iconName={ICON_NAME.NEXT} iconSize={ICON_SIZE.SMALL} />
        </S.Btn>
      </S.Wrapper>
    </S.Container>
  );
};

export default Calender;
