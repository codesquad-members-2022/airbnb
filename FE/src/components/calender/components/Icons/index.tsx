import React from 'react';
import LeftArrowIcon from 'components/calender/components/Icons/LeftArrowIcon';
import RightArrowIcon from 'components/calender/components/Icons/RightArrowIcon';
import styled from 'styled-components';
import { CALENDER_HEIGHT } from 'components/calender/constants/size';

export interface DefaultIconProps {
  width?: string;
  height?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface IconProps extends DefaultIconProps {
  type: IconType;
}

export enum IconType {
  ARROW_LEFT,
  ARROW_RIGHT,
}

const IconComponents = {
  [IconType.ARROW_RIGHT]: RightArrowIcon,
  [IconType.ARROW_LEFT]: LeftArrowIcon,
};

const IconWrapper = styled.div<DefaultIconProps>`
  display: flex;
  align-items: flex-start;
  height: ${`${(CALENDER_HEIGHT * 90) / 100}px`};
`;

function Icon({ type, onClick, ...props }: IconProps) {
  const IconComponent = IconComponents[type];
  return (
    <IconWrapper onClick={onClick}>
      <IconComponent {...props} />
    </IconWrapper>
  );
}

Icon.defaultProps = {
  width: undefined,
  height: undefined,
  color: undefined,
  onClick: () => undefined,
};

export default Icon;
