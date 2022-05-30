import CompanyInfo from '@components/Footer/CompanyInfo';
import Content from '@components/Footer/Content';
import * as S from '@components/Footer/Footer.style';
import { footerContent, FooterContentTypes } from '@data';
import { companyInfo, CompanyInfoTypes } from '@data';

export const Footer = () => {
  return (
    <S.FooterContent>
      {footerContent.map((data: FooterContentTypes) => (
        <Content key={data.id} data={data} />
      ))}
    </S.FooterContent>
  );
  {
    companyInfo.map((info: CompanyInfoTypes) => <CompanyInfo key={info.id} info={info} />);
  }
};
