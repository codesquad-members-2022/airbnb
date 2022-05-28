import CompanyInfo from '@components/Footer/CompanyInfo';
import Content from '@components/Footer/Content';
import * as S from '@components/Footer/Footer.style';
import { footerContent, FooterContentType } from '@components/Footer/constants';
import { companyInfo, CompanyInfoType } from '@components/Footer/constants';

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.FooterContent>
          {footerContent.map((data: FooterContentType) => (
            <Content key={data.id} data={data} />
          ))}
        </S.FooterContent>
        {companyInfo.map((info: CompanyInfoType) => (
          <CompanyInfo key={info.id} info={info} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
