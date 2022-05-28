import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 600px;
  background: ${({ theme }) => theme.color.grey6};
`;

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey5};
`;

export const ServieWrapper = styled.div`
  width: 20%;
  margin: 50px 50px 80px 0px;
`;

export const ServiceTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.grey1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 30px;
`;

export const ServiceContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.black};
  margin-top: 20px;
`;

export const CompanyInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.black};
  margin-right: 30px;
`;
