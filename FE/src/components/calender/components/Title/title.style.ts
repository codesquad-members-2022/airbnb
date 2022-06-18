import * as React from 'react';
import styled from 'styled-components';

const Heading = styled(({ level, children, ...props }) => React.createElement(`h${level}`, props, children))`
  /* color: ${({ fontColor }) => fontColor}; */
  font-weight: ${({ fontWeight }) => fontWeight};
  /* font-size: ${({ fontSize, fontUnit }) => `${fontSize}${fontUnit}`}; */
`;

export { Heading };
