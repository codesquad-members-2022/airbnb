import * as S from '@components/Footer/Footer.style';
import { CompanyInfoTypes } from '@data';

interface InfoType {
  info: CompanyInfoTypes;
}

const CompanyInfo = ({ info }: InfoType) => {
  return <S.CompanyInfo>{info.title}</S.CompanyInfo>;
};

export default CompanyInfo;
