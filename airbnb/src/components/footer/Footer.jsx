import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

import { footerData } from '../../assets/data/footerData.js';
import Content from './Content.jsx';
import { flexColumn } from 'style/mixins.js';
import CompanyInfo from './CompanyInfo.jsx';

function Footer() {
  return (
    <FooterDiv>
      <Flex flexDirection="row">
        {footerData.map((data) => (
          <Content key={data.title} data={data} />
        ))}
      </Flex>
      <CompanyInfo />
    </FooterDiv>
  );
}

const FooterDiv = styled.footer`
  ${flexColumn}
  justify-content: space-between;
  margin-top: 50px;
  background: ${({ theme }) => theme.colors.gray6};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export default Footer;
