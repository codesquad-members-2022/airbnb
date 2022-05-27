import styled from 'styled-components';

interface SearchBarItem {
  width: number;
}

export const searchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 916px;
  height: 76px;
  marign: 0 auto;
  border-radius: 999px;
  background-color: white;
  padding: 16px;
`;

// 스타일드 컴포넌트 호출시 제네릭 타입으로 SearchBarItems를 지정해 받는 인자타입 선언
export const searchBarItem = styled.div<SearchBarItem>`
  margin: 0 24px;
  width: ${({ width }) => width}px;
`;

export const itemTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const itemContents = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const line = styled.div`
  width: 1px;
  height: 44px;
  background-color: #e0e0e0;
`;

export const SearchFonts = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: white;
`;

// ${({ theme }) => theme.palette.Secondary.main}
