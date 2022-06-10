import styled from 'styled-components';
import { FooterTitle, FooterText } from 'common/util.styled';

export const Hero = styled.div<{ src: string }>`
  width: 1440px;
  height: 640px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
`;

export const Footer = styled.footer`
  width: 1440px;
`;

export const Near = styled.section`
  padding: 8rem;
`;

export const NearTitle = styled.h2`
  ${FooterTitle}
`;

export const NearList = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

export const NearItem = styled.li`
  margin-top: 2.4rem;
  display: flex;
  width: 25%;
`;

export const TravelImg = styled.img`
  display: block;
`;

export const TravelDesc = styled.section`
  padding: 1rem 0;
  margin-left: 1.6rem;
`;

export const TravelTitle = styled.h3`
  ${FooterText}
`;

export const TravelDistance = styled.h3`
  margin-top: 0.8rem;
  ${FooterText}
`;

export const AnyWhere = styled.section`
  padding: 0 8rem 8rem;
`;

export const AnyWhereTitle = styled.h2`
  ${FooterTitle}
`;

export const AnyWhereList = styled.ul`
  margin-top: 3.2rem;
  display: flex;
  gap: 1.6rem;
`;

export const AnyWhereItem = styled.li`
  width: 25%;
`;

export const Lodging = styled.section``;

export const LodgingImg = styled.img`
  display: block;
`;

export const LodgingTitle = styled.h3`
  margin-top: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.taller};
  color: ${({ theme }) => theme.colors.grey1};
`;

export const Navigator = styled.nav`
  padding: 8rem 8rem 0;
  background-color: ${({ theme }) => theme.colors.grey6};
`;

export const LNB = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 8rem;
`;

export const LNBList = styled.ul`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const LNBItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.base};
  color: ${({ theme }) => theme.colors.grey1};
`;

export const LNBItemTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const LNBItemLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const FNB = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey5};
`;

export const FNBList = styled.ul`
  display: flex;
  gap: 1.6rem;
  padding: 3.2rem 0;
`;

export const FNBItem = styled.li`
  &::after {
    margin-left: 1.6rem;
    content: '・';
  }
  &:last-child::after {
    content: '';
  }
`;

export const FNBItemLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.base};
  color: ${({ theme }) => theme.colors.grey1};
`;
