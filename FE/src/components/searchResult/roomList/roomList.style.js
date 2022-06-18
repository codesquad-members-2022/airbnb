import styled from 'styled-components';

const RoomListWrapper = styled.div`
  width: 720px;
  height: 1000px;
  padding: 32px 24px 0 24px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.p`
  width: 100%;
  font-size: ${({ theme: { fontSize } }) => fontSize.xLarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.grey1};
  margin-bottom: 34px;
`;

const SearchInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 13px;
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey1};
`;

const RoomsWrapper = styled.div`
  width: 684px;
  height: auto;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme: { colors } }) => colors.grey5};
  margin: 24px 0;
`;

export { Line, RoomsWrapper, Title, RoomListWrapper, SearchInfoWrapper };
