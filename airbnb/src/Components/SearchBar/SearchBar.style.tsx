import styled from 'styled-components';

interface SearchBarItem {
  width: number;
}

export const searchBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 999px;
  background-color: white;
  padding: 0 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

// 스타일드 컴포넌트 호출시 제네릭 타입으로 SearchBarItems를 지정해 받는 인자타입 선언
export const searchBarItem = styled.div<SearchBarItem>`
  padding: 16px 24px;
  padding-right: 0;
  width: ${({ width }) => width}px;
  cursor: pointer;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 26px;
  width: 20px;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 50%;
`;
