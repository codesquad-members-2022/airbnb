import styled from 'styled-components';

const Btn = styled.button`
  width: 25%;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: flex-start;
  padding-left: 15px;
  border: 1px solid #e0e0e0;
  border-top-style: none;
  border-left-style: none;
  border-bottom-style: none;
`;

const BarTitle = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 22px;
`;

const BarContent = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray3};
`;

export { Btn, ContentBox, BarTitle, BarContent };
