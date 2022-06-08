import React from 'react';
import StyledMenu from 'components/GNB/Menu/Menu.styled';

export default function Menu(): JSX.Element {
  return (
    <StyledMenu>
      <ul>
        <li>
          <span>숙소</span>
        </li>
        <li>
          <span>체험</span>
        </li>
        <li>
          <span>온라인 체험</span>
        </li>
      </ul>
    </StyledMenu>
  );
}
