import React from 'react';
import styled from 'styled-components';

const HeaderGNB = () => {
  return (
    <GNB>
      <ul>
        <li>숙소</li>
        <li>체험</li>
        <li>온라인 체험</li>
      </ul>
    </GNB>
  );
};

export default HeaderGNB;

const GNB = styled.nav`
  ul {
    ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
  }

  li {
    margin: 0 12px;
    color: ${({ theme }) => theme.colors.black};
  }

  li:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
