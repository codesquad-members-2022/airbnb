import customStyled from '@/utils/custom-styled-component/customStyled';

function Logo() {
  return <StyledTitle>LOGO</StyledTitle>;
}

const StyledTitle = customStyled.h1`
  width: 88px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.logo};
  font-weight: ${({ theme }) => theme.fontWeight.logo};
  color: ${({ theme }) => theme.color.grey1};
  cursor: pointer;
`;

export default Logo;
