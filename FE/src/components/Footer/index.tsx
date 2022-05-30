import CompanyInfo from '@components/Footer/CompanyInfo';
import Content from '@components/Footer/Content';
import * as S from '@components/Footer/Footer.style';
import { footerContent, FooterContentTypes } from '@data';
import { companyInfo, CompanyInfoTypes } from '@data';

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.FooterContent>
          {footerContent.map((data: FooterContentTypes) => (
            <Content key={data.id} data={data} />
          ))}
        </S.FooterContent>
        {companyInfo.map((info: CompanyInfoTypes) => (
          <CompanyInfo key={info.id} info={info} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
