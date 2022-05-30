import * as S from '@components/Footer/Footer.style';
import { companyInfo, CompanyInfoTypes } from '@data';

const CompanyInfo = () => {
  return (
    <>
      {companyInfo.map(({ id, title }: CompanyInfoTypes) => (
        <S.CompanyInfo key={id}>{title}</S.CompanyInfo>
      ))}
    </>
  );
};

export default CompanyInfo;
