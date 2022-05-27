import { Flex, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';

const MenuData = ['숙소', '체험', '온라인 체험'];

function UpperMenu() {
  return (
    <Menu>
      <Flex justify="space-between">
        {MenuData.map((data, idx) => (
          <UpperMenuContent key={idx}>{data}</UpperMenuContent>
        ))}
      </Flex>
    </Menu>
  );
}

const Menu = styled.div`
  width: 15%;
`;

const UpperMenuContent = styled.p`
  background-color: ${({ theme }) => theme.colors.clearwhite};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  padding: 10px;
  border-radius: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export default UpperMenu;
