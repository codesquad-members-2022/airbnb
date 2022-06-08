import React, { useState } from 'react';

import * as S from '@components/Calender/Calender.style';
import RenderCalender from '@components/Calender/RenderCalender';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';

export interface Calendertypes {
  year: number;
  month: number;
}

const Calender = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month);

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
