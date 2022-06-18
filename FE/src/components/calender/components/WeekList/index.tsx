import React from 'react';
import * as Styled from 'components/calender/components/WeekList/weekList.style';
import { Language, weekData } from 'components/calender/constants/dateData';
import Text, { TextProps } from 'components/calender/components/Text';

export interface WeekListProps {
  width?: string;
  height?: string;
  background?: string;
  data?: string[];
}

const textProps: TextProps = {
  fontColor: '#828282',
  fontWeight: 'bold',
};

function WeekList({ data, ...props }: WeekListProps) {
  return (
    <Styled.WeekList {...props}>
      {data &&
        data.map((value) => {
          return (
            <Styled.WeekListItem key={value}>
              <Text {...textProps}>{value}</Text>
            </Styled.WeekListItem>
          );
        })}
    </Styled.WeekList>
  );
}

WeekList.defaultProps = {
  width: '336px',
  height: '24px',
  background: '#fff',
  data: weekData[Language.KOR],
};

export default WeekList;
