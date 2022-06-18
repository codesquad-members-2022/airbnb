import React from 'react';
import * as Styled from 'components/calender/components/Text/text.style';

export interface TextProps {
  fontSize?: number;
  fontUnit?: string;
  fontColor?: string;
  fontWeight?: string;
  children?: React.ReactNode;
}

function Text({ children, ...props }: TextProps) {
  return <Styled.Text {...props}>{children}</Styled.Text>;
}

Text.defaultProps = {
  fontSize: 12,
  fontUnit: 'px',
  fontColor: '#000',
  fontWeight: 'normal',
  children: 'test',
};

export default Text;
