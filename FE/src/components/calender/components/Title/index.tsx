import * as React from 'react';
import * as Styled from 'components/calender/components/Title/title.style';

export interface TitleProps {
  level?: number;
  // fontSize?: number;
  // fontUnit?: string;
  // fontColor?: string;
  fontWeight?: string;
  children?: React.ReactNode;
}

function Title(props: TitleProps) {
  return <Styled.Heading {...props} />;
}

Title.defaultProps = {
  level: 4,
  // fontSize: 16,
  // fontUnit: 'px',
  // fontColor: '#000',
  fontWeight: 'bold',
  children: '2021년 5월',
};

export default Title;
