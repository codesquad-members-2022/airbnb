import styled from 'styled-components';

const MinusIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const PlusIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const GuestInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const GuestType = styled.div``;

const Count = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.grey1};
  font-style: normal;
  line-height: 29px;
`;
const TypeTitle = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
  font-style: normal;
  line-height: 23px;
`;

const Description = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey3};
  font-style: normal;
  line-height: 20px;
`;

const GuestCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`;

export { MinusIconWrapper, PlusIconWrapper, GuestInfoWrapper, GuestType, Count, TypeTitle, Description, GuestCount };
